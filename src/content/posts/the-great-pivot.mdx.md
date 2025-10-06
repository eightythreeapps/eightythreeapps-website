---
title: "The Great Pivot: From Cross-Platform Web Tech to back to Native Development."
excerpt: "A deep dive into how I built a scalable music streaming server using modern web technologies and why I chose this particular stack."
date: "2025-10-06"
readTime: "12 min read"
tags: ["architecture", "nodejs", "typescript", "nx", "iOS", "macOS", "crossplatform", "kanora"]
---

## TL;DR

After months of development bringing Kanora to near-release state as an Electron desktop app, I'm making a major architectural pivot: extracting the REST API as a standalone service and rebuilding the desktop application as a native Mac Catalyst app. This decision wasn't taken lightly—it came after repeated development sessions spent fighting framework issues rather than building features. Here's why, and what I learned.

---

## The Journey So Far

Kanora started as an ambitious project: a self-hosted music server with CD ripping capabilities, library management, and playback across multiple platforms. The technology stack seemed perfect:

- **Backend**: Node.js + Express + TypeScript + SQLite (Drizzle ORM)
- **Desktop**: Electron (Windows, macOS, Linux)
- **Web**: React + Vite
- **Monorepo**: Nx workspace for code sharing

We built:
- ✅ Robust REST API with OpenAPI documentation (53.4% coverage, 47+ endpoints)
- ✅ JWT authentication system
- ✅ Library scanning and metadata extraction
- ✅ Audio streaming with transcoding
- ✅ CD ripping integration
- ✅ Analytics and listening sessions
- ✅ Multi-user support
- ✅ Responsive web interface
- ✅ Docker development environment

The project was **almost at a releasable state**. 90% of the features were done. We were in polish mode.

Then reality hit.

---

## The Breaking Point

### Session After Session of Framework Fighting

Here's what my recent development sessions looked like:

**Session 1**: "Let's add a new playback feature!"  
*Actually spent*: 3 hours debugging why Electron's `app` object was undefined. Traced through module loading, CommonJS vs ESM issues, tried different Electron versions, checked permissions, reinstalled dependencies.

**Session 2**: "Let's improve the CD ripping UI!"  
*Actually spent*: 2 hours fighting with Electron's IPC communication between main and renderer processes, dealing with context isolation issues.

**Session 3**: "Let's set up automated testing!"  
*Actually spent*: 4 hours trying to get jest to work with Nx, Electron, and TypeScript all playing nicely together. Tests that should be simple became integration nightmares.

**Session 4**: "Let's make sure native binaries work!"  
*Actually spent*: An entire afternoon worrying about how `node-gyp`, native CD reading libraries, and audio processing tools would work across platforms in packaged Electron builds.

### The Pattern Became Clear

I wasn't building features anymore. I was maintaining a framework integration layer.

Every "simple" feature required:
1. Making it work in Node.js (backend)
2. Making it work in Electron main process
3. Making it work in Electron renderer process
4. Setting up IPC communication between them
5. Handling security/context isolation
6. Worrying about how it packages
7. Testing across platforms
8. Debugging when it breaks differently on each platform

The promise of "write once, run everywhere" had become **"write once, debug everywhere."**

---

## The Realization: Cross-Platform Web Tech Has Fundamental Limits

### The Theory

Cross-platform frameworks like Electron are pitched on a beautiful premise:
- Use web technologies (HTML/CSS/JavaScript)
- Share code across platforms
- Deploy to desktop with native features
- One codebase to maintain

For certain applications, this works beautifully. VS Code, Slack, Discord—these are proof that Electron can deliver production-quality applications.

### The Reality for Media Applications

But Kanora isn't Slack. It needs:
- **CD drive access** - Hardware interaction
- **Audio playback** - Native audio APIs for best quality
- **File system monitoring** - Efficient, native file watchers
- **Background processing** - CD ripping while doing other tasks
- **Native performance** - Scanning large music libraries
- **System integration** - Media keys, notifications, system audio

Every single one of these becomes a compromise in Electron:
- Native modules that need compilation per platform
- Bridging JavaScript to native APIs through IPC
- Security restrictions fighting against system integration
- Performance overhead from Chromium
- Package size bloat (150MB+ just for the runtime)

### The Walls You Hit

As predicted, I started hitting walls:

1. **CD Ripping**: Native binaries (`cdparanoia`, `ffmpeg`) need to be bundled and work across platforms. Each OS needs different handling.

2. **Audio Processing**: Want high-quality, gapless playback? You're wrapping native audio libraries with JavaScript bindings that may or may not work in packaged builds.

3. **System Integration**: macOS media key handling, system notifications, dock integration—all require native code anyway.

4. **Testing**: How do you test native module integration? How do you mock CD drives? The testing complexity explodes.

5. **Distribution**: Code signing, notarization, different package formats per platform. The "easy" cross-platform deployment becomes a CI/CD nightmare.

You end up **compromising every platform** instead of doing any platform properly.

---

## The Decision: Go Native

After a particularly frustrating session trying to debug why Electron's `app` object was undefined (turned out to be a system-level macOS issue, not even a code problem), I made the call:

**Stop fighting. Go native.**

### Why Mac Catalyst?

I'm a macOS user and have been for over 20 years, I like the platform an the ecosystem. My 2012 Mac Mini is still fantastic, it has a 500GB SSD and runs macOS Monterey. This is my target hardware as this is currently sat in my office acting as a plex media server. I don't want to buy any new hardware for my media set up, so it has to run on this. 

So I have decied on:

1. **Primary Platform**: macOS
2. **Technology**: Swift + SwiftUI
3. **Deployment Strategy**: Mac Catalyst (iPad app running on Mac)

Why Catalyst specifically?
Well, the main reason is that I am an iOS developer at heart. I have mever written a macOS application and have spent all my time in UIKit and more recently SwiftUI. I dabbled in Mac development once or twice, but I couldn't get my head around the UI code (I was only ever trying to learn it in the evening anyway, so probably never dedicated enough time to it).

Anyway, using Catalyst gives me:

- ✅ **Single Codebase**: Write once for iPad, iPhone, *and* Mac
- ✅ **Native Performance**: Real Swift, real Core Data, real AVFoundation
- ✅ **System Integration**: First-class macOS citizen with proper entitlements
- ✅ **Modern APIs**: SwiftUI for UI, Combine for reactive patterns
- ✅ **Backwards Compatibility**: Runs on macOS 12+ (my 2012 Mac Mini)
- ✅ **Multiplatfrom**: There will be iPhone and iPad apps at some point. It's the same codebase

Mac Catalyst gives me the "write once, deploy multiple places" benefit, but using **actually native code** instead of wrapping a web browser. And yes, I am aware that "multiple places" here is under the caveat that they all have to be Apple, but thats my primary target for this project.

I am hoping that AI tooling, REST endpoints etc. will give me options for building for other platforms if I ever choose to.  

### What We're Keeping: The REST API

The one thing that worked flawlessly? **The Express.js REST API.**

The API is clean, well-tested, well-documented, and framework-agnostic. It's just HTTP. Any client—native, web, mobile, whatever—can consume it.

So the architecture becomes:

```
┌─────────────────────────────────────┐
│  Native Mac Catalyst App (Swift)    │
│  - UI/UX (SwiftUI)                  │
│  - Local playback (AVFoundation)    │
│  - CD ripping (native tools)        │
│  - Core Data for local library      │
└──────────────┬──────────────────────┘
               │ HTTP REST API
┌──────────────▼──────────────────────┐
│  Kanora REST API (Express/Node)     │
│  - Authentication                   │
│  - Library management               │
│  - Streaming                        │
│  - Multi-user support               │
│  - Analytics                        │
└─────────────────────────────────────┘
```

This is the **right** separation of concerns:
- **Native app**: Handles UI, local playback, hardware integration
- **API server**: Handles data, streaming, multi-user, remote access

---

## The Planning: 39 User Stories Across 6 Epics

I didn't just throw out the old codebase and start fresh. I used Cursor to review the existing project in detail and asked it to pull out all of Kanora's functionality and break it down into properly defined user stories for me. I've found that when given a task such as this, AI excels. You are not asking it to generate code, you are simply asking it to say what it sees and I've been getting good results, as long as you give it a good, detailed prompt. 

It broke it down into:

### The Epics

1. **Foundation** (8 stories)
   - Project setup with Mac Catalyst
   - Core Data model schema (User, Library, Artist, Album, Track, Playlist)
   - MVVM architecture with protocol-based dependency injection
   - Unit testing (XCTest) and UI testing (XCUITest)
   - Xcode Cloud CI/CD

2. **CD Ripping** (4 stories)
   - Auto-detect audio CDs (DiskArbitration framework)
   - Fetch metadata from MusicBrainz
   - Configure ripping settings
   - Actual CD extraction and encoding (native tools, not Node.js wrappers)

3. **Library Management** (6 stories)
   - Browse by artists, albums, tracks
   - Unified search
   - Create and manage playlists
   - Edit metadata
   - Import from folders

4. **Local Playback** (4 stories)
   - Native audio playback (AVFoundation—proper gapless, no Electron overhead)
   - Now Playing view
   - Queue management
   - Shuffle and repeat modes

5. **REST API Integration** (6 stories)
   - URLSession-based HTTP client for Express API
   - JWT authentication and token management
   - Consume library, streaming, and playlist endpoints
   - Map API responses to Core Data models

6. **UX/Polish** (7 stories)
   - Main window with sidebar navigation
   - Persistent mini-player
   - Keyboard shortcuts
   - Dark mode
   - Progress indicators
   - Error handling
   - Settings

7. **Performance** (2 stories)
   - Efficient memory usage (targeting 2012 hardware!)
   - Responsive UI at 60fps

All 39 stories are now tracked in the new `kanora-app` repository with detailed acceptance criteria, edge cases, and Given/When/Then scenarios.

---

## The Technical Decisions

### Architecture: MVVM + Protocol-Based DI

```
┌─────────────┐
│    View     │ SwiftUI (presentation only)
└──────┬──────┘
       │ observes
┌──────▼──────┐
│  ViewModel  │ @Observable classes (coordinates)
└──────┬──────┘
       │ uses (via protocols)
┌──────▼──────┐
│  Services   │ Protocol-based business logic
└──────┬──────┘
       │ uses
┌──────▼──────┐
│ Core Data   │ Native persistence
└─────────────┘
```

What this pattern gives me:
- ✅ **Testable**: Mock services via protocols
- ✅ **Maintainable**: Clear separation of concerns
- ✅ **Type-safe**: Swift's compiler catches errors
- ✅ **Native**: No JavaScript bridge, no IPC, no overhead

### Data Layer: Core Data (not Swift Data)

I chose Core Data over Swift Data because:
- Runs on macOS 12+ (Swift Data requires macOS 14+)
- Mature, battle-tested framework
- Better performance for large datasets
- More control over migrations

### API Integration: URLSession + Codable DTOs

The native app will consume the Express.js REST API using native Swift networking:

```swift
// API response model (matches Express API)
struct ArtistDTO: Codable {
    let id: UUID
    let name: String
    let albumCount: Int
    let trackCount: Int
}

// Core Data model (local storage)
@objc(Artist)
class Artist: NSManagedObject {
    @NSManaged var id: UUID
    @NSManaged var name: String
    @NSManaged var albums: NSSet?
}

// Service to fetch and sync
class ArtistService {
    func fetchArtists() async throws -> [ArtistDTO] {
        let url = URL(string: "http://localhost:3000/api/artists")!
        let (data, _) = try await URLSession.shared.data(from: url)
        return try JSONDecoder().decode([ArtistDTO].self, from: data)
    }
    
    func syncToLocalDatabase(_ dtos: [ArtistDTO], context: NSManagedObjectContext) {
        // Map DTOs to Core Data and save
    }
}
```

This keeps the separation clean:
- **Express API**: Continues to serve JSON over HTTP (unchanged)
- **Native app**: Consumes the API using URLSession (no Node.js embedding needed)
- **Core Data**: Local caching and offline support

---

## What This Means: The Hard Truth About Cross-Platform and what its good for...
I've known for years that cross plaform sells the dream but ultimately comes up short. It has its place, sometimes, for simple apps. I think there are some amazing examples... VS Code and Slack for example.

Anything else thats cross platform should just run in the browser, or a browser windows like WebView2. 

- ✅ Business applications (CRUD interfaces)
- ✅ Communication tools (Slack, Discord)
- ✅ Content-heavy apps (Notion, Obsidian)
- ✅ Prototyping and MVPs
- ✅ Internal tools
- ✅ When web deployment is primary and desktop is secondary

Cross-platform web tech struggles with:

- ❌ Hardware integration (CD drives, USB devices)
- ❌ High-performance media processing
- ❌ Deep system integration
- ❌ Native performance requirements
- ❌ Applications where the OS *is* part of the feature set

### The Compromise Curve

Here's what I learned: Cross-platform has a **compromise curve**.

```
Quality
  ↑
  │     ┌─ Native (Platform-specific)
  │   ┌─┘
  │ ┌─┘
  │─┘        ┌─ Cross-platform (Web tech)
  │        ┌─┘
  │      ┌─┘
  │    ┌─┘
  │────┘
  └─────────────────────────→ Time/Complexity
```

Initially, cross-platform is faster (quick prototyping, shared code). But as requirements increase, native pulls ahead. You spend less time fighting frameworks and more time building features.

For Kanora, I hit the crossover point around the 80% mark. The last 20% was going to be **painful** in Electron.

---

## The AI Factor: Native Is Now Accessible

Here's the game-changer: **AI-assisted development**.

Five years ago, choosing Electron made sense because:
- JavaScript was what I knew
- Native iOS/macOS development had a steep learning curve
- Cross-platform meant one codebase to learn

Today, with AI tools (Claude, GPT-4, Cursor, GitHub Copilot):
- I can write Swift with AI assistance as easily as JavaScript
- I can understand Core Data, AVFoundation, SwiftUI through AI explanations
- I can debug native code with AI helping interpret compiler errors
- I can learn platform idioms on-the-fly

**AI has democratized native development.**

I genuinely believe AI will spell the end of cross-platform web frameworks for anything beyond simple applications. Why compromise when you can ask Claude "How do I implement X in Swift?" and get working code in seconds?

Native gives you:
- Better performance
- Better OS integration  
- Better user experience
- Less framework fighting

And now, with AI, it's no harder to write than JavaScript.

---

## The Next Steps

### Phase 1: API Extraction ✅ (In Progress)

1. Create archive branch of full monorepo
2. Extract REST API to standalone Express.js service
3. Remove Nx workspace overhead
4. Simplify deployment (Docker, PM2, systemd)
5. Document API for native client consumption

### Phase 2: Native Foundation (Next 2 weeks)

1. Set up Xcode project with Mac Catalyst
2. Implement Core Data schema
3. Build MVVM architecture with DI
4. Set up unit and UI testing
5. Configure Xcode Cloud CI/CD

### Phase 3: Core Features (1-2 months)

1. Library browsing (Artists, Albums, Tracks)
2. Search functionality
3. Playlist management
4. Native audio playback (AVFoundation)
5. CD detection and ripping

### Phase 4: API Integration (2 weeks)

1. Implement Vapor REST server
2. JWT authentication
3. DTOs for Core Data serialization
4. Streaming endpoints

### Phase 5: Polish (Ongoing)

1. Dark mode support
2. Keyboard shortcuts
3. Mini-player
4. Settings management
5. Performance optimization for older hardware

---

## Lessons Learned

### 1. Framework Fatigue Is Real

If you're spending more time fighting your framework than building features, something is wrong. Don't fall for the sunk cost fallacy. Pivot.

### 2. "Write Once, Run Everywhere" Is a Lie (Mostly)

It's really "Write once, debug everywhere." The complexity doesn't disappear—it multiplies by the number of platforms.

### 3. Know Your Requirements

If you need deep OS integration, hardware access, or native performance, start with native. Don't try to hack cross-platform tools into doing something they weren't designed for.

### 4. Separation of Concerns Works

The REST API is perfect. It's clean, testable, and framework-agnostic. Separating the backend from the frontend was the right call from day one.

### 5. AI Changes Everything

Native development is no longer the exclusive domain of specialists. If you can prompt an AI well, you can build native apps. The learning curve has flattened dramatically.

### 6. Optimize for Joy

I'm building this project for fun. If development sessions are frustrating instead of enjoyable, I'm doing it wrong. Going native means I'm excited to code again.

---

## Conclusion: Embrace Native, Embrace the Future

Cross-platform web technologies served their purpose. They made desktop development accessible to web developers. They enabled rapid prototyping. They created amazing applications.

But for applications like Kanora—media-heavy, hardware-integrated, performance-sensitive—they're the wrong tool.

**Native development is back.** And with AI assistance, it's more accessible than ever.

My advice to anyone starting a similar project:

1. **Prototype in web tech if you want** - It's great for validating ideas
2. **But don't be afraid to go native** - Especially with AI to help
3. **Separate your concerns** - Keep your API clean and framework-agnostic
4. **Trust your instincts** - If you're fighting the framework, you're on the wrong path
5. **Optimize for the 80-100% range** - The last 20% is where cross-platform falls apart

Kanora's future is native. The codebase is cleaner. The architecture is simpler. The development experience is better.

And most importantly: **I'm building features again, not fighting frameworks.**

---

## Resources

- **Kanora API Repository**: [eightythreeapps/kanora-media-server](https://github.com/eightythreeapps/kanora-media-server)
- **Kanora Native App**: [eightythreeapps/kanora-app](https://github.com/eightythreeapps/kanora-app)
- **User Stories Document**: [View all 39 user stories](../USER_STORIES_MAC_CATALYST.md)
- **Mac Catalyst Guide**: [Apple Developer Documentation](https://developer.apple.com/documentation/uikit/mac_catalyst)

---

**Update Log**:
- 2025-01-06: Initial decision and planning
- 2025-01-06: Created 39 user stories for native app
- 2025-01-06: Migrated issues to new repository
- 2025-01-06: Began API extraction (in progress)

---

*This is part of a series documenting the Kanora project. Follow along as we build a modern, native music server that proves you don't need cross-platform frameworks to build great software.*


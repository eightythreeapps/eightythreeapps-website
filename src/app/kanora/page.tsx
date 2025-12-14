import Link from 'next/link';
import { Globe, Music, Smartphone, Headphones, Monitor } from 'lucide-react';

export default function KanoraPage() {
  const keyFeatures = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Native Mac Experience",
      description: "SwiftUI interface with buttery animations, system media controls, and full keyboard support made specifically for macOS."
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Serious Library Tools",
      description: "Import, tidy, and browse huge collections with smart views, metadata editing, and powerful search built on Core Data."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "CD Ripping Built-In",
      description: "Rip directly from physical media with automatic lookup, accurate metadata, and gapless playback ready files."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Designed for Expansion",
      description: "Embedded REST API and Catalyst groundwork unlock remote control, iPad support, and future mobile clients."
    }
  ];

  const problemsSolved = [
    {
      problem: "Streaming Burnout",
      solution: "Own your listening again. Kanora manages the files you already have locally without recurring subscriptions or disappearing albums."
    },
    {
      problem: "Desktop Neglect",
      solution: "Modern services treat the desktop like an afterthought. Kanora is crafted for macOS first, with windows, menus, and shortcuts that feel native."
    },
    {
      problem: "Metadata Chaos",
      solution: "Import flows clean up tags, artwork, and structure so massive archives stay organized and searchable."
    },
    {
      problem: "No Insight",
      solution: "Play history, listening stats, and planned remote API access give you observability over every session."
    }
  ];

  const techStack = [
    { category: "App Framework", tech: ["Swift", "SwiftUI", "Combine", "Mac Catalyst"] },
    { category: "Data & Services", tech: ["Core Data", "AVFoundation", "Swift Concurrency", "Embedded HTTP API (planned)"] },
    { category: "Platforms", tech: ["macOS Sonoma+", "iPad (Catalyst)", "AirPlay-ready audio engine"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white text-3xl">
              <Music className="w-10 h-10" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--foreground)' }}>
            Kanora
          </h1>
          
          <p className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
            Native Music Companion
          </p>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Remember when iTunes cared about your library? Kanora brings back that feeling with a fresh,
            fully native SwiftUI app that manages files locally, rips CDs, and plays beautifully through AirPlay.
          </p>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            The Problem with Modern Music
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Music streaming has become expensive, invasive, and limiting. 
            Here&apos;s what Kanora fixes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problemsSolved.map((item, index) => (
            <div key={index} className="glass-card rounded-2xl p-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  {item.problem}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Why Kanora?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="glass-card p-6 rounded-xl hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                     style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Status */}
      <section className="mb-20">
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium" style={{ color: 'var(--accent)' }}>
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              In Development
            </div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
              Currently Building
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              The native macOS build is deep in development with daily dogfooding across a 20k+ track library.
              CD ripping, playback, smart filtering, and analytics are live while remote access and Catalyst layouts are underway.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          What Makes Kanora Different?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <Headphones className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              vs Spotify
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              No monthly fees, no ads, no algorithm pushing content you don&apos;t want. 
              Just your music, organized your way.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <Monitor className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              vs iTunes
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              All the good parts of iTunes (library management, smart playlists) 
              rebuilt with SwiftUI, Core Data, and modern concurrency so it feels fast and stable again.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <Smartphone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              vs Plex
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Focused specifically on music with better organization, 
              faster streaming, and a cleaner interface designed for desktop use.
            </p>
          </div>
        </div>
      </section>

      {/* Future Ideas */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Future Ideas (if I ever get around to it...)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                   style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                Native Companion Apps
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Catalyst groundwork opens the door for iPad and iPhone companions. 
                The vision is seamless remote playback, queue management, and offline sync wherever you are.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                   style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                VR Listening Room
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                A virtual reality client for Meta Quest that creates a virtual listening room. 
                Browse your music library in 3D space, create immersive listening environments, 
                and experience your music in a whole new way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Compact */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Built With Modern Tech
        </h2>
        <div className="glass-card rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--accent)' }}>
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.tech.map((tech) => (
                    <div key={tech} className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started - Simplified */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Ready to Try Kanora?
        </h2>
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="space-y-6">
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Kanora is actively being developed in the open. Follow progress, request access, and grab the latest build from the official site.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://kanora.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}
              >
                <Globe className="w-5 h-5" />
                <span>Visit Kanora.app</span>
              </Link>
              
              <Link 
                href="/blog/building-kanora-modern-self-hosted-music-server"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                style={{ color: 'var(--foreground)' }}
              >
                <span>Read the Blog Post</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

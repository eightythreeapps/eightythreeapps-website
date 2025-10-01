import Link from 'next/link';
import { Code, Globe, Music, Database, Zap, Shield, Users } from 'lucide-react';

export default function KanoraPage() {
  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Smart Library Management",
      description: "Automatic scanning, metadata extraction, and intelligent organization of your music collection."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Range-based Streaming",
      description: "Efficient streaming with seeking support. Start playing instantly, no matter how large your library."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Authentication",
      description: "JWT-based authentication with role management. Your music, your rules, your security."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multi-user Support",
      description: "Support for multiple users with individual playlists and preferences."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "SQLite Database",
      description: "Lightweight, fast, and reliable. No separate database server required."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-platform Clients",
      description: "Web, mobile (iOS/Android), desktop, and even VR clients for the complete experience."
    }
  ];

  const techStack = [
    { category: "Backend", tech: ["Node.js", "Express", "TypeScript", "Drizzle ORM", "SQLite", "JWT", "FFmpeg"] },
    { category: "Frontend", tech: ["React", "Vite", "Tailwind CSS", "Radix UI", "React Native", "Expo"] },
    { category: "Tools", tech: ["Nx", "Docker", "Jest", "Playwright", "ESLint", "Prettier"] },
    { category: "Special", tech: ["Three.js (VR)", "Electron (Desktop)", "BullMQ (Jobs)", "Music-metadata"] }
  ];

  const architecture = [
    {
      name: "API Server",
      description: "Express.js server with TypeScript, handling authentication, streaming, and library management.",
      tech: ["Node.js", "Express", "TypeScript", "Drizzle ORM"]
    },
    {
      name: "Web Client",
      description: "Modern React application with Vite and Tailwind CSS for the best web experience.",
      tech: ["React", "Vite", "Tailwind CSS", "Radix UI"]
    },
    {
      name: "Mobile Apps",
      description: "React Native applications for iOS and Android, sharing code with the web client.",
      tech: ["React Native", "Expo", "TypeScript"]
    },
    {
      name: "VR Client",
      description: "Three.js-powered VR experience for Meta Quest. Because why not browse music in 3D?",
      tech: ["Three.js", "WebXR", "Meta Quest"]
    },
    {
      name: "Desktop App",
      description: "Electron wrapper for native desktop experience across Windows, macOS, and Linux.",
      tech: ["Electron", "React", "TypeScript"]
    }
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
            Self-Hosted Music Streaming Solution
          </p>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A modern music server that brings back the glory days of music management. 
            Think iTunes when it was good, but built for the modern web with web, mobile, and VR clients.
          </p>
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
              Kanora is actively being developed with a focus on core functionality, 
              mobile apps, and VR experience. The web client is functional, 
              and the API is stable for development use.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Why Kanora?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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

      {/* Architecture Overview */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Architecture Overview
        </h2>
        <div className="space-y-8">
          {architecture.map((component, index) => (
            <div key={index} className="glass-card rounded-2xl p-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                    {component.name}
                  </h3>
                  <p className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {component.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg text-sm font-medium"
                            style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-secondary)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
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
      </section>

      {/* Development Status */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Development Status
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              ✅ Completed
            </h3>
            <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>• Core API server with authentication</li>
              <li>• Music library scanning and metadata extraction</li>
              <li>• Range-based audio streaming</li>
              <li>• Web client with React and Tailwind</li>
              <li>• SQLite database with Drizzle ORM</li>
              <li>• Docker deployment setup</li>
              <li>• Comprehensive testing suite</li>
            </ul>
          </div>
          
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              🚧 In Progress
            </h3>
            <ul className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
              <li>• Mobile apps (iOS/Android)</li>
              <li>• VR client for Meta Quest</li>
              <li>• Desktop Electron app</li>
              <li>• Advanced playlist features</li>
              <li>• Real-time collaboration</li>
              <li>• Cloud storage integration</li>
              <li>• Performance optimizations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Getting Started
        </h2>
        <div className="glass-card rounded-2xl p-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
              Quick Start with Docker
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`# Clone the repository
git clone https://github.com/eightythreeapps/kanora-media-server.git
cd kanora-media-server

# Copy environment file
cp apps/api/src/env.example .env

# Edit configuration
nano .env

# Start with Docker
docker compose up -d`}
              </pre>
            </div>
            
            <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
              Development Setup
            </h3>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-green-400 text-sm">
{`# Install dependencies
npm install

# Setup database
npm run db:generate
npm run db:migrate
npm run db:seed

# Start development server
npm run dev`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="text-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
            Ready to Try Kanora?
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Check out the source code, contribute to the project, or just take a look at how it&apos;s built.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://github.com/eightythreeapps/kanora-media-server"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}
            >
              <Code className="w-5 h-5" />
              <span>View Source Code</span>
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
      </section>
    </div>
  );
}

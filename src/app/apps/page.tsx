import { Github, ExternalLink, Smartphone, Globe, Code } from 'lucide-react';

export default function Apps() {
  const apps = [
    {
      id: 1,
      name: "Santabot",
      description: "An AI-powered messaging app for kids and parents to message Santa at Christmas.",
      longDescription: "Santabot lets kids send messages to Santa and get AI-powered responses. Parents can monitor conversations and customize the experience. It's designed to bring back the magic of Christmas while keeping parents involved.",
      status: "In Development",
      category: "Mobile",
      tech: ["React Native", "AI", "Node.js", "Firebase"],
      features: ["AI Santa Messages", "Parent Controls", "Custom Responses", "Christmas Magic"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/santabot-1.png", "/screenshots/santabot-2.png"],
    },
    {
      id: 2,
      name: "Kanora",
      description: "A music server and player application like Plex. Think iTunes when it was good.",
      longDescription: "Kanora is a self-hosted music server that lets you organize and stream your music collection. It has a clean interface, supports multiple formats, and works across devices. No subscriptions, no ads, just your music.",
      status: "In Development",
      category: "Desktop",
      tech: ["React", "Node.js", "Electron", "Audio Processing"],
      features: ["Music Library", "Multi-format Support", "Cross-device Sync", "Clean Interface"],
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/kanora-1.png", "/screenshots/kanora-2.png"],
    },
    {
      id: 3,
      name: "GiftBoxd",
      description: "Keep track of gifts, ideas, and spending. Works on iPhone, iPad, and Apple Watch.",
      longDescription: "GiftBoxd helps you never forget a gift again. Track gifts you've bought, save ideas for later, and see where your money goes. Simple, honest, and yours forever. No ads, no data grabs, no nonsense.",
      status: "Beta",
      category: "iOS",
      tech: ["iOS", "Swift", "Core Data", "Apple Watch"],
      features: ["Gift Tracking", "Idea Storage", "Spending Analytics", "Apple Watch Support"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      githubUrl: "#",
      demoUrl: "https://giftboxd.app",
      screenshots: ["/screenshots/giftboxd-1.png", "/screenshots/giftboxd-2.png"],
    },
  ];

  const categories = ["All", "Mobile", "Desktop", "iOS"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            My Apps
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Here&apos;s what I&apos;ve been working on. Some are finished, some are works in progress, 
            and some are probably never going to be finished (but I&apos;ll keep telling myself they will be).
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-200 glass-card hover:scale-105"
              style={{ color: 'var(--foreground)' }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div 
              key={app.id}
              className="group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-6">
                {/* App Header */}
                <div className="flex items-center justify-between">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center text-white`}>
                    {app.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium glass"
                        style={{ color: 'var(--accent)' }}>
                    {app.status}
                  </span>
                </div>

                {/* App Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {app.name}
                    </h3>
                    <span className="px-2 py-1 rounded-lg text-xs font-medium"
                          style={{ 
                            backgroundColor: 'var(--glass-bg)', 
                            color: 'var(--text-secondary)' 
                          }}>
                      {app.category}
                    </span>
                  </div>
                  
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {app.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {app.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 rounded-lg text-sm font-medium"
                        style={{ 
                          backgroundColor: 'var(--glass-bg)', 
                          color: 'var(--text-secondary)' 
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {app.features.map((feature) => (
                      <span 
                        key={feature}
                        className="text-sm px-2 py-1 rounded-lg"
                        style={{ 
                          backgroundColor: 'var(--glass-bg)', 
                          color: 'var(--text-secondary)' 
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4">
                  <button className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
                          style={{ color: 'var(--accent)' }}>
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
                          style={{ color: 'var(--accent)' }}>
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

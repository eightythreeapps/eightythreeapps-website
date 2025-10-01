import { Github, ExternalLink, Smartphone, Globe, Code, Database, Zap, Shield } from 'lucide-react';

export default function Apps() {
  const apps = [
    {
      id: 1,
      name: "TaskFlow Pro",
      description: "A comprehensive productivity app that combines task management with AI-powered insights to help teams and individuals work more efficiently.",
      longDescription: "TaskFlow Pro revolutionizes productivity by integrating advanced task management with AI-driven analytics. Features include smart scheduling, team collaboration, progress tracking, and predictive insights to optimize workflow efficiency.",
      status: "In Development",
      category: "Productivity",
      tech: ["React Native", "Node.js", "PostgreSQL", "OpenAI API", "Redis"],
      features: ["AI Task Suggestions", "Team Collaboration", "Progress Analytics", "Smart Scheduling"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/taskflow-1.png", "/screenshots/taskflow-2.png"],
    },
    {
      id: 2,
      name: "DataViz Studio",
      description: "Interactive data visualization platform that transforms complex datasets into beautiful, interactive charts and dashboards.",
      longDescription: "DataViz Studio empowers users to create stunning data visualizations without coding. With drag-and-drop functionality, real-time collaboration, and extensive chart types, it's perfect for analysts, marketers, and business professionals.",
      status: "Beta",
      category: "Analytics",
      tech: ["React", "D3.js", "TypeScript", "WebSocket", "MongoDB"],
      features: ["Drag & Drop Builder", "Real-time Collaboration", "50+ Chart Types", "Export Options"],
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/dataviz-1.png", "/screenshots/dataviz-2.png"],
    },
    {
      id: 3,
      name: "CloudSync Manager",
      description: "Enterprise-grade cloud storage management solution with advanced security, monitoring, and automation features.",
      longDescription: "CloudSync Manager provides comprehensive cloud storage management for enterprises. Features include automated backups, security monitoring, cost optimization, and compliance reporting across multiple cloud providers.",
      status: "Planning",
      category: "Enterprise",
      tech: ["Next.js", "AWS", "PostgreSQL", "Docker", "Kubernetes"],
      features: ["Multi-Cloud Support", "Automated Backups", "Security Monitoring", "Cost Optimization"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/cloudsync-1.png", "/screenshots/cloudsync-2.png"],
    },
    {
      id: 4,
      name: "HealthTracker",
      description: "Personal health and fitness tracking app with AI-powered insights and personalized recommendations.",
      longDescription: "HealthTracker combines fitness tracking with health monitoring to provide personalized insights. Features include activity tracking, nutrition logging, health metrics, and AI-powered recommendations for optimal wellness.",
      status: "In Development",
      category: "Health",
      tech: ["React Native", "Firebase", "TensorFlow", "HealthKit", "Google Fit"],
      features: ["Activity Tracking", "Nutrition Logging", "Health Metrics", "AI Recommendations"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/healthtracker-1.png", "/screenshots/healthtracker-2.png"],
    },
    {
      id: 5,
      name: "SecureChat",
      description: "End-to-end encrypted messaging platform with advanced security features and privacy protection.",
      longDescription: "SecureChat provides military-grade encryption for private communications. Features include disappearing messages, secure file sharing, group chats, and advanced privacy controls for maximum security.",
      status: "In Development",
      category: "Security",
      tech: ["React Native", "Node.js", "Signal Protocol", "WebRTC", "PostgreSQL"],
      features: ["End-to-End Encryption", "Disappearing Messages", "Secure File Sharing", "Group Chats"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/securechat-1.png", "/screenshots/securechat-2.png"],
    },
    {
      id: 6,
      name: "EcoTracker",
      description: "Environmental impact tracking app that helps users monitor and reduce their carbon footprint.",
      longDescription: "EcoTracker empowers users to make environmentally conscious decisions by tracking their carbon footprint across various activities. Features include impact calculations, sustainability tips, and community challenges.",
      status: "Planning",
      category: "Sustainability",
      tech: ["React", "Node.js", "MongoDB", "Carbon API", "Maps API"],
      features: ["Carbon Footprint Tracking", "Sustainability Tips", "Community Challenges", "Impact Reports"],
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      githubUrl: "#",
      demoUrl: "#",
      screenshots: ["/screenshots/ecotracker-1.png", "/screenshots/ecotracker-2.png"],
    },
  ];

  const categories = ["All", "Productivity", "Analytics", "Enterprise", "Health", "Security", "Sustainability"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            My Apps Portfolio
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            A collection of innovative applications I&apos;m developing, each designed to solve real-world problems 
            with modern technology and elegant user experiences.
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

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Interested in Working Together?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              I&apos;m always excited to collaborate on new projects and bring innovative ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                      style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                Start a Project
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                      style={{ color: 'var(--foreground)' }}>
                View My Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

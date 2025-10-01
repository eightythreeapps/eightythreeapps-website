import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Code, Smartphone, Globe } from 'lucide-react';

export default function Home() {
  const featuredApps = [
    {
      name: "TaskFlow Pro",
      description: "A productivity app for managing tasks and workflows with AI-powered insights.",
      status: "In Development",
      tech: ["React Native", "Node.js", "AI/ML"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "DataViz Studio",
      description: "Interactive data visualization tool for creating stunning charts and dashboards.",
      status: "Beta",
      tech: ["React", "D3.js", "TypeScript"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "CloudSync Manager",
      description: "Enterprise-grade cloud storage management with advanced security features.",
      status: "Planning",
      tech: ["Next.js", "AWS", "PostgreSQL"],
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const recentPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and performant React applications.",
      date: "2024-01-15",
      readTime: "5 min read",
    },
    {
      title: "The Future of Mobile Development",
      excerpt: "Exploring the latest trends in mobile app development and cross-platform solutions.",
      date: "2024-01-10",
      readTime: "7 min read",
    },
    {
      title: "Design Systems That Scale",
      excerpt: "Creating consistent and scalable design systems for modern applications.",
      date: "2024-01-05",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-opacity-5" 
             style={{ background: `linear-gradient(135deg, transparent 0%, transparent 50%, var(--accent) 100%)` }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                <span className="block" style={{ color: 'var(--foreground)' }}>
                  Building the
                </span>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Future of Apps
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" 
                 style={{ color: 'var(--text-secondary)' }}>
                I create innovative web and mobile applications that solve real-world problems. 
                From concept to deployment, I bring ideas to life with modern technology and elegant design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/apps"
                className="group px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                <span>View My Apps</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/blog"
                className="px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                style={{ color: 'var(--foreground)' }}
              >
                Read My Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Featured Apps
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A collection of innovative applications I&apos;m currently developing, 
              each solving unique challenges with modern technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApps.map((app) => (
              <div 
                key={app.name}
                className="group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                         style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                      {app.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium glass"
                          style={{ color: 'var(--accent)' }}>
                      {app.status}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {app.name}
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {app.description}
                    </p>
                  </div>

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

                  <div className="flex items-center space-x-4 pt-4">
                    <button className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
                            style={{ color: 'var(--accent)' }}>
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-sm font-medium hover:opacity-80 transition-opacity"
                            style={{ color: 'var(--accent)' }}>
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/apps"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold glass-card hover:scale-105 transition-all duration-300"
              style={{ color: 'var(--foreground)' }}
            >
              <span>View All Apps</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20" style={{ backgroundColor: 'var(--glass-bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Latest Insights
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Thoughts on web development, mobile apps, and the latest in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Link 
                key={index}
                href="/blog"
                className="group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm" 
                       style={{ color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:opacity-80 transition-opacity" 
                      style={{ color: 'var(--foreground)' }}>
                    {post.title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-2 pt-4">
                    <span className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
                      Read More
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                                style={{ color: 'var(--accent)' }} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold glass-card hover:scale-105 transition-all duration-300"
              style={{ color: 'var(--foreground)' }}
            >
              <span>Read All Posts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
              Let&apos;s Build Something Amazing
            </h2>
            
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Have an idea for an app? Looking for a development partner? 
              I&apos;d love to hear about your project and explore how we can bring it to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about"
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                Get In Touch
              </Link>
              
              <Link 
                href="/apps"
                className="px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                style={{ color: 'var(--foreground)' }}
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';

export default function Home() {
  const featuredApps = [
    {
      name: "Santabot",
      description: "An AI-powered messaging app for kids and parents to message Santa at Christmas.",
      status: "In Development",
      tech: ["React Native", "AI", "Node.js"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Kanora",
      description: "A music server and player application like Plex. Think iTunes when it was good.",
      status: "In Development",
      tech: ["React", "Node.js", "Audio Processing"],
      icon: <Code className="w-6 h-6" />,
    },
    {
      name: "GiftBoxd",
      description: "Keep track of gifts, ideas, and spending. Works on iPhone, iPad, and Apple Watch.",
      status: "Beta",
      tech: ["iOS", "Swift", "Core Data"],
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                  <span className="block" style={{ color: 'var(--foreground)' }}>
                    Hi, I&apos;m Ben
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                    I make stuff
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl leading-relaxed max-w-2xl" 
                   style={{ color: 'var(--text-secondary)' }}>
                  Sometimes they&apos;re useful, sometimes they&apos;re just for fun. 
                  Either way, I try to make them not terrible to use.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>3</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Apps in Development</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>20+</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Years Building</div>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <div className="text-2xl font-bold" style={{ color: 'var(--accent)' }}>∞</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>Ideas in Queue</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Right Column - Visual Element */}
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded w-1/2"></div>
                    <div className="h-4 bg-gradient-to-r from-indigo-200 to-blue-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-300">
                ⚡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium mb-6" style={{ color: 'var(--accent)' }}>
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Current Projects
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              What I&apos;m Working On
            </h2>
            
            <p className="text-xl max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
              Here&apos;s what I&apos;ve been tinkering with lately. 
              Some are actually useful, others... well, they seemed like a good idea at the time.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredApps.map((app) => (
              <div 
                key={app.name}
                className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-4">
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
                    <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {app.name}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
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
      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border-2 border-indigo-300 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-purple-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-pink-300 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card text-sm font-medium mb-6" style={{ color: 'var(--accent)' }}>
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              Latest Thoughts
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Occasionally I Write Things
            </h2>
            
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              When I&apos;m not breaking things, I sometimes write about web development, 
              mobile apps, and whatever else catches my attention.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-2">
              <Link 
                href="/blog"
                className="group glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 block"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm" 
                       style={{ color: 'var(--text-muted)' }}>
                    <span>{recentPosts[0].date}</span>
                    <span>{recentPosts[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold group-hover:opacity-80 transition-opacity" 
                      style={{ color: 'var(--foreground)' }}>
                    {recentPosts[0].title}
                  </h3>
                  
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {recentPosts[0].excerpt}
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
            </div>

            {/* Side Posts */}
            <div className="space-y-6">
              {recentPosts.slice(1).map((post, index) => (
                <Link 
                  key={index}
                  href="/blog"
                  className="group glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 block"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm" 
                         style={{ color: 'var(--text-muted)' }}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold group-hover:opacity-80 transition-opacity" 
                        style={{ color: 'var(--foreground)' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center space-x-2 pt-2">
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
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold glass-card hover:scale-105 transition-all duration-300"
              style={{ color: 'var(--foreground)' }}
            >
              <span>Read All Posts</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
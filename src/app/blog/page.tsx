import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function Blog() {
  // This is a placeholder - in a real implementation, you'd fetch blog posts
  const posts = [
    {
      slug: "building-scalable-react-applications",
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and performant React applications that can grow with your team and user base.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      tags: ["React", "Performance", "Architecture"],
    },
    {
      slug: "future-of-mobile-development",
      title: "The Future of Mobile Development",
      excerpt: "Exploring the latest trends in mobile app development, cross-platform solutions, and what the future holds for mobile developers.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Mobile",
      tags: ["React Native", "Flutter", "Cross-platform"],
    },
    {
      slug: "design-systems-that-scale",
      title: "Design Systems That Scale",
      excerpt: "Creating consistent and scalable design systems for modern applications. Learn how to build maintainable UI component libraries.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Design",
      tags: ["Design Systems", "UI/UX", "Components"],
    },
    {
      slug: "ai-integration-in-web-apps",
      title: "AI Integration in Web Applications",
      excerpt: "How to effectively integrate AI capabilities into web applications while maintaining performance and user experience.",
      date: "2024-01-01",
      readTime: "8 min read",
      category: "AI",
      tags: ["AI", "Machine Learning", "Web Development"],
    },
    {
      slug: "typescript-best-practices",
      title: "TypeScript Best Practices for Large Projects",
      excerpt: "Essential TypeScript patterns and practices that help maintain code quality and developer productivity in large-scale projects.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "TypeScript",
      tags: ["TypeScript", "Best Practices", "Large Projects"],
    },
    {
      slug: "nextjs-performance-optimization",
      title: "Next.js Performance Optimization Techniques",
      excerpt: "Advanced techniques for optimizing Next.js applications, including SSR, SSG, and modern performance patterns.",
      date: "2023-12-25",
      readTime: "9 min read",
      category: "Next.js",
      tags: ["Next.js", "Performance", "Optimization"],
    },
  ];

  const categories = ["All", "React", "Mobile", "Design", "AI", "TypeScript", "Next.js"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Tech Blog
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Insights, tutorials, and thoughts on web development, mobile apps, and the latest in technology.
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

        {/* Featured Post */}
        {posts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
              Featured Post
            </h2>
            <Link 
              href={`/blog/${posts[0].slug}`}
              className="block group glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium glass"
                          style={{ color: 'var(--accent)' }}>
                      {posts[0].category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{posts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold group-hover:opacity-80 transition-opacity" 
                      style={{ color: 'var(--foreground)' }}>
                    {posts[0].title}
                  </h3>
                  
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {posts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-medium" style={{ color: 'var(--accent)' }}>
                      Read Full Article
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                                style={{ color: 'var(--accent)' }} />
                  </div>
                </div>
                
                <div className="aspect-video glass-card rounded-xl flex items-center justify-center">
                  <span style={{ color: 'var(--text-muted)' }}>Featured Image</span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>
            All Posts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Post Meta */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-sm font-medium glass"
                            style={{ color: 'var(--accent)' }}>
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold group-hover:opacity-80 transition-opacity" 
                        style={{ color: 'var(--foreground)' }}>
                      {post.title}
                    </h3>
                    
                    <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="flex items-center space-x-1 px-2 py-1 rounded-lg text-sm"
                        style={{ 
                          backgroundColor: 'var(--glass-bg)', 
                          color: 'var(--text-secondary)' 
                        }}
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More */}
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
        </div>

      </div>
    </div>
  );
}

import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();
  const categories = ["All", "Development", "Architecture", "Music", "AI"];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            My Blog
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Sometimes I write about web development, mobile apps, and whatever else I&apos;m 
            thinking about. No promises on how often I&apos;ll actually post though.
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
                      Development
                    </span>
                    <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                          <span>{(posts[0].frontMatter.readTime as string) || '5 min read'}</span>
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
          
          {posts.length > 0 ? (
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
                          Development
                        </span>
                        <div className="flex items-center space-x-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                          <Clock className="w-4 h-4" />
                          <span>{(post.frontMatter.readTime as string) || '5 min read'}</span>
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
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold group-hover:opacity-80 transition-opacity" 
                          style={{ color: 'var(--foreground)' }}>
                        {post.title}
                      </h3>
                      
                      <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {post.excerpt}
                      </p>
                    </div>
                    
                    {post.frontMatter.tags && (
                      <div className="flex flex-wrap gap-2">
                        {(post.frontMatter.tags as string[]).map((tag) => (
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
                    )}
                    
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                No blog posts yet. Check back soon!
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
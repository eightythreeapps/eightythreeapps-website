import Link from "next/link";

export default function Blog() {
  // This is a placeholder - in a real implementation, you'd fetch blog posts
  const posts = [
    {
      slug: "welcome-to-eightythree-apps",
      title: "Welcome to EightyThree Apps",
      excerpt: "Discover our modern web development approach and the technologies we use to create exceptional user experiences.",
      date: "2024-01-01",
    },
    {
      slug: "frosted-glass-design-guide",
      title: "Frosted Glass Design Guide",
      excerpt: "Learn how to implement beautiful frosted glass effects in your web applications using CSS backdrop-filter.",
      date: "2024-01-02",
    },
    {
      slug: "theme-aware-components",
      title: "Building Theme-Aware Components",
      excerpt: "Create components that automatically adapt to light and dark themes with smooth transitions.",
      date: "2024-01-03",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="glass rounded-2xl p-12 text-center space-y-6">
          <h1 className="text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
            Blog
          </h1>
          
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Insights, tutorials, and updates from EightyThree Apps
          </p>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link 
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
                {post.title}
              </h2>
              
              <p className="text-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                
                <span 
                  className="text-sm font-medium"
                  style={{ color: 'var(--accent)' }}
                >
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State Message */}
        {posts.length === 0 && (
          <div className="glass-card rounded-xl p-12 text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
              No Posts Yet
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Check back soon for our latest insights and tutorials!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

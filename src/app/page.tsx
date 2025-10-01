import ThemeAwareAppIcon from "@/components/ThemeAwareAppIcon";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <div className="glass rounded-2xl p-12 space-y-6">
          <div className="flex justify-center mb-6">
            <ThemeAwareAppIcon width={80} height={80} className="rounded-2xl" />
          </div>
          
          <h1 className="text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
            EightyThree Apps
          </h1>
          
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Modern web solutions with frosted glass aesthetic and theme-aware design
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <button 
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: 'var(--accent)', 
                color: 'white' 
              }}
            >
              Get Started
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-semibold glass-card transition-all duration-300 hover:scale-105"
              style={{ color: 'var(--foreground)' }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass-card rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
              <span className="text-white font-bold text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
              Frosted Glass Design
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Beautiful frosted glass effects with backdrop blur and subtle borders for a modern aesthetic.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
              <span className="text-white font-bold text-xl">🌙</span>
            </div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
              Theme Support
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Automatic light/dark mode detection with manual override options and smooth transitions.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent)' }}>
              <span className="text-white font-bold text-xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
              Performance
            </h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Built with Next.js 15, React 19, and Tailwind CSS 4 for optimal performance and developer experience.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="glass rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            Built With Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS 4'].map((tech) => (
              <div 
                key={tech}
                className="glass-card rounded-lg p-4 text-center font-medium"
                style={{ color: 'var(--foreground)' }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
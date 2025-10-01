import ThemeAwareAppIcon from "@/components/ThemeAwareAppIcon";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="glass rounded-2xl p-12 text-center space-y-6">
          <div className="flex justify-center mb-6">
            <ThemeAwareAppIcon width={80} height={80} className="rounded-2xl" />
          </div>
          
          <h1 className="text-5xl font-bold" style={{ color: 'var(--foreground)' }}>
            About EightyThree Apps
          </h1>
          
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            Crafting modern web experiences with attention to detail
          </p>
        </div>

        {/* Content */}
        <div className="glass-card rounded-xl p-8 space-y-6">
          <h2 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
            Our Mission
          </h2>
          
          <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            At EightyThree Apps, we believe in creating web applications that not only function flawlessly 
            but also provide exceptional user experiences. Our focus on modern design patterns, performance 
            optimization, and accessibility ensures that every project we deliver meets the highest standards.
          </p>

          <h3 className="text-2xl font-semibold mt-8" style={{ color: 'var(--foreground)' }}>
            What We Do
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                Web Development
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Full-stack web applications using modern frameworks like Next.js, React, and Node.js.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                UI/UX Design
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Beautiful, intuitive interfaces with frosted glass aesthetics and theme-aware design.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                Performance Optimization
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Fast, efficient applications optimized for speed and user experience.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                Accessibility
              </h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Inclusive design that works for everyone, regardless of ability or device.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="glass rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>
            Get In Touch
          </h2>
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            Ready to start your next project? We&apos;d love to hear from you.
          </p>
          <button 
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: 'var(--accent)', 
              color: 'white' 
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </main>
  );
}

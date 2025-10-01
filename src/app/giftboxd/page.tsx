import Link from 'next/link';
import { Gift, Smartphone, Apple, Watch, DollarSign, Calendar, Users, Heart } from 'lucide-react';

export default function GiftBoxdPage() {
  const keyFeatures = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Track Your Gifts",
      description: "Keep a list of gifts you've bought. Add names, costs, dates, and who they're for. Mark them as ordered, received, wrapped, or given."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Save Gift Ideas",
      description: "Write down ideas before you buy them. Set priorities, guess the cost, add photos. Turn ideas into purchases when you're ready."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "See Your Spending",
      description: "Look at how much you've spent over time. See spending by person and occasion. Compare what you planned to spend versus what you actually spent."
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: "Apple Ecosystem",
      description: "Works seamlessly on iPhone, iPad, and Apple Watch. Your data syncs across all devices using iCloud. Native iOS experience."
    }
  ];

  const techStack = [
    { category: "Platform", tech: ["iOS", "iPadOS", "watchOS"] },
    { category: "Development", tech: ["Swift", "SwiftUI", "SwiftData"] },
    { category: "AI Tools", tech: ["Cursor", "Claude Code", "ChatGPT"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-3xl">
              <Gift className="w-10 h-10" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--foreground)' }}>
            GiftBoxd
          </h1>
          
          <p className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
            Never Forget a Gift Again
          </p>
          
          <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Built by a dad with two boys whose birthdays collide with Christmas. 
            Keep track of gifts, ideas, and spending. Works on iPhone, iPad, and Apple Watch. 
            Simple, honest, and yours forever. No ads. No data grabs. No nonsense. Ever.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
            One Dad, AI, and a Week of Late Nights
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            GiftBoxd is less than a week old. Built by a dad with two boys whose birthdays 
            collide with Christmas, drowning in "who's got what" lists and broken spreadsheets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                The Real Problem
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My boys Zac and Noah have birthdays that fall right around Christmas. Every year, 
                I'd find myself drowning in "who's got what" lists, broken spreadsheets, and the 
                constant fear of buying duplicate gifts or forgetting someone entirely.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                AI-Assisted Development
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm not some startup founder with VC funding. I'm just a guy with an idea, 
                a full-time job as a Software Architect, and two young boys. The difference? 
                We're living in the age of AI.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                No Backend, No Accounts, No Nonsense
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I hate subscriptions. No accounts, no data collection, no servers to maintain. 
                Everything stays on your device. SwiftData handles local storage, and if you want 
                cloud sync, that's handled by Apple's infrastructure, not mine.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                Built in Spare Time
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Built in the evenings between family life, kids' bedtime stories, and the general 
                chaos of being a dad in Cornwall. The goal isn't to build the next unicorn startup. 
                It's to solve a real problem I have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          What It Does
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {keyFeatures.map((feature, index) => (
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

      {/* Project Status */}
      <section className="mb-20">
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm font-medium" style={{ color: 'var(--accent)' }}>
              <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
              Beta Testing
            </div>
            <h2 className="text-3xl font-bold" style={{ color: 'var(--foreground)' }}>
              Available on TestFlight
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              GiftBoxd is currently in beta testing through TestFlight. 
              Join the beta to help shape the app and get early access to new features.
            </p>
            <div className="flex justify-center mt-6">
              <Link 
                href="https://testflight.apple.com/join/giftboxd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}
              >
                <Apple className="w-5 h-5" />
                <span>Join TestFlight Beta</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          What Makes GiftBoxd Different?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              Built by a Dad
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Not some startup founder with VC funding. Just a dad with two boys whose birthdays 
              collide with Christmas, solving his own real problem.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <Apple className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              No Backend Required
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I hate subscriptions. No accounts, no data collection, no servers to maintain. 
              Everything stays on your device with optional iCloud sync.
            </p>
          </div>

          <div className="glass-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
              AI-Assisted Development
            </h3>
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Built in less than a week using AI tools. Cursor, Claude Code, and ChatGPT helped 
              turn an idea into a fully functional app in spare time.
            </p>
          </div>
        </div>
      </section>

      {/* Future Ideas */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Future Ideas (if I ever get around to it...)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                   style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                Smart Reminders
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Automatic reminders for birthdays, anniversaries, and holidays. 
                Integration with your calendar to never miss an important gift-giving occasion.
              </p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                   style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                Family Sharing
              </h3>
              <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Share gift lists with family members. Coordinate gift buying, 
                avoid duplicates, and make sure everyone gets something thoughtful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack - Compact */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Built with AI Assistance
        </h2>
        <div className="glass-card rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <div key={index} className="text-center">
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
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: 'var(--foreground)' }}>
          Want to Try GiftBoxd?
        </h2>
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="space-y-6">
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Join the TestFlight beta and help shape the app. 
              No ads, no data grabs, no nonsense. Just a simple app to help you never forget a gift again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://testflight.apple.com/join/giftboxd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}
              >
                <Apple className="w-5 h-5" />
                <span>Join TestFlight</span>
              </Link>
              
              <Link 
                href="https://giftboxd.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                style={{ color: 'var(--foreground)' }}
              >
                <span>Visit Website</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

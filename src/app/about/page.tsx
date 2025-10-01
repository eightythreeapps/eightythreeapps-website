import { Code, Smartphone, Globe, Zap, Users, Award } from 'lucide-react';

export default function About() {
  const skills = [
    { name: "React & Next.js", level: 95, icon: <Code className="w-5 h-5" /> },
    { name: "Mobile Development", level: 90, icon: <Smartphone className="w-5 h-5" /> },
    { name: "Backend Development", level: 85, icon: <Globe className="w-5 h-5" /> },
    { name: "UI/UX Design", level: 80, icon: <Zap className="w-5 h-5" /> },
  ];

  const achievements = [
    {
      title: "5+ Years Experience",
      description: "Building web and mobile applications",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "3 Apps in Development",
      description: "Santabot, Kanora, and GiftBoxd",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Open Source Contributor",
      description: "Contributing to various React and Node.js projects",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">83</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Hi, I&apos;m Ben Reed
                </h1>
                
                <p className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Full-Stack Developer & App Creator
                </p>
                
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I build apps because I like solving problems and making things work. 
                  Sometimes they&apos;re actually useful, sometimes they&apos;re just me scratching an itch.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Skills & Expertise
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A comprehensive overview of my technical skills and areas of expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="glass-card rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" 
                         style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                        {skill.name}
                      </h3>
                      <div className="mt-2">
                        <div className="w-full glass rounded-full h-2">
                          <div 
                            className="h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              backgroundColor: 'var(--accent)', 
                              width: `${skill.level}%` 
                            }}
                          ></div>
                        </div>
                        <span className="text-sm mt-1 block" style={{ color: 'var(--text-muted)' }}>
                          {skill.level}% proficiency
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Achievements
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Key milestones and accomplishments in my development journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center" 
                       style={{ backgroundColor: 'var(--accent)', color: 'white' }}>
                    {achievement.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="glass rounded-2xl p-12">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-center mb-8" style={{ color: 'var(--foreground)' }}>
                My Story
              </h2>
              
              <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-secondary)' }}>
                <p className="text-xl leading-relaxed mb-6">
                  I&apos;ve been building apps for about 5 years now. Started with web stuff, 
                  then got curious about mobile apps, and now I do both. Turns out I&apos;m 
                  pretty good at breaking things and then fixing them.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  I work with React, Next.js, React Native, and iOS development. I try to 
                  keep things simple because honestly, most apps are way more complicated than they need to be.
                </p>
                
                <p className="text-xl leading-relaxed">
                  When I&apos;m not coding, I write about development (when I remember to), 
                  contribute to open source projects, and try to keep up with whatever new 
                  framework everyone&apos;s excited about this week.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

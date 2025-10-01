import { Code, Smartphone, Globe, Zap, Users, Award, Mail, Github, Linkedin, Twitter } from 'lucide-react';

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
                
                <p className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Full-Stack Developer & App Creator
                </p>
                
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I build web and mobile apps that solve real problems. 
                  I focus on clean code, good design, and creating things that people actually want to use.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:ben@eightythreeapps.com"
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get In Touch</span>
                </a>
                
                <a 
                  href="/apps"
                  className="px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                  style={{ color: 'var(--foreground)' }}
                >
                  View My Work
                </a>
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
                  I&apos;ve been building apps for about 5 years now. Started with web development, 
                  then got into mobile apps, and now I work on both. I like solving problems and 
                  creating things that make life a bit easier.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  I work with React, Next.js, React Native, and iOS development. I prefer 
                  keeping things simple and focused on what actually matters to users.
                </p>
                
                <p className="text-xl leading-relaxed">
                  When I&apos;m not coding, I write about development, contribute to open source projects, 
                  and try to stay up with what&apos;s new in the field. Always learning something new.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              Let&apos;s Work Together
            </h2>
            
            <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
              Have a project in mind? I&apos;d love to hear about it and explore how we can bring your ideas to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="mailto:ben@eightythreeapps.com"
                className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                style={{ backgroundColor: 'var(--accent)', color: 'white' }}
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
              
              <a 
                href="/apps"
                className="px-8 py-4 rounded-xl font-semibold text-lg glass-card transition-all duration-300 hover:scale-105"
                style={{ color: 'var(--foreground)' }}
              >
                View Portfolio
              </a>
            </div>

            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/eightythreeapps"
                className="p-3 rounded-xl glass-card hover:scale-110 transition-all duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/benreed"
                className="p-3 rounded-xl glass-card hover:scale-110 transition-all duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/eightythreeapps"
                className="p-3 rounded-xl glass-card hover:scale-110 transition-all duration-300"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

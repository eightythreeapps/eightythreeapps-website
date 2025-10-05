import { Code, Smartphone, Globe, Briefcase, GraduationCap, Award, Building2, Rocket, Brain } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: "2024",
      role: "Senior Software Engineer",
      company: "System C Healthcare",
      description: "Full-stack development across iOS, Vue.js, Vuetify, and C#. Leading ambient listening projects with AI-assisted development.",
      icon: <Rocket className="w-6 h-6" />,
      current: true,
    },
    {
      year: "2020",
      role: "Acquisition",
      company: "Careflow Connect → System C Healthcare",
      description: "Careflow Connect acquired by System C Healthcare. Continued leading mobile and web development initiatives.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      year: "2015",
      role: "Head of Mobile",
      company: "Careflow Connect",
      description: "Developed the much-loved Careflow Connect iOS app and contributed to Android and web versions. Transitioned from agency to product development.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      year: "2010-2015",
      role: "iOS Developer → Head of Technology",
      company: "Mubaloo",
      description: "Progressed from iOS Developer to Mobile Web App Developer, Web Team Lead, iOS Team Lead, and finally Head of Technology (CTO-level). Supported new business opportunities and pitches. Built apps across iOS, Android, Blackberry, and Nokia Symbian for clients including UBS, DHL, Endemol Gaming, William Hill, Aviva, and Alliance. Left agency life due to frustration of never seeing projects through to completion.",
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      year: "2006-2010",
      role: "CMS Developer",
      company: "Sift Group",
      description: "Custom CMS development, Drupal, and Flash development for clients including The Kennel Club and the NHS. Started during placement year in 2006.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "2008",
      role: "First Class Degree",
      company: "University of the West of England",
      description: "Graduated with First Class Honours while already working professionally.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const skills = [
    { name: "iOS Development", level: 95, icon: <Smartphone className="w-5 h-5" /> },
    { name: "React & Next.js", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "Vue.js & Vuetify", level: 60, icon: <Globe className="w-5 h-5" /> },
    { name: "C# & .NET", level: 25, icon: <Code className="w-5 h-5" /> },
    { name: "Node.js", level: 70, icon: <Code className="w-5 h-5" /> },
    { name: "Architecture & Planning", level: 95, icon: <Brain className="w-5 h-5" /> },
  ];

  const achievements = [
    {
      title: "18+ Years Experience",
      description: "Building software since 2006",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Multiple Platforms",
      description: "iOS, Android, Blackberry, Symbian, Web",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Enterprise Clients",
      description: "UBS, DHL, NHS, William Hill, Aviva",
      icon: <Building2 className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">83</span>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold" style={{ color: 'var(--foreground)' }}>
                  Hi, I&apos;m Ben Reed
                </h1>
                
                <p className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent">
                  Software Engineer & Architect
                </p>
                
                <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Building software in various guises since 2006. From Flash and Drupal to iOS and AI-assisted development,
                  I&apos;ve seen a lot of tech come and go. These days I&apos;m as much an architect as I am a developer—I like
                  to map things out before setting off.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--foreground)' }}>
              My Journey
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              18 years of building software across platforms, companies, and continents.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 ${
                    item.current ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center" 
                           style={{ 
                             backgroundColor: item.current ? 'var(--accent)' : 'var(--glass-bg)', 
                             color: item.current ? 'var(--background)' : 'var(--foreground)' 
                           }}>
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <h3 className="text-xl font-bold" style={{ color: 'var(--foreground)' }}>
                              {item.role}
                            </h3>
                            {item.current && (
                              <span className="px-2 py-1 rounded-full text-xs font-medium" 
                                    style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-medium" style={{ color: 'var(--accent)' }}>
                            {item.company}
                          </p>
                        </div>
                        <span className="text-sm font-semibold px-3 py-1 rounded-full glass" 
                              style={{ color: 'var(--text-secondary)' }}>
                          {item.year}
                        </span>
                      </div>
                      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              Core technologies and competencies I work with regularly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" 
                         style={{ backgroundColor: 'var(--accent)', color: 'var(--background)' }}>
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--foreground)' }}>
                      {skill.name}
                    </h3>
                  </div>
                  <div>
                    <div className="w-full glass rounded-full h-2 mb-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          backgroundColor: 'var(--accent)', 
                          width: `${skill.level}%` 
                        }}
                      ></div>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {skill.level}% proficiency
                    </span>
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
                The Full Story
              </h2>
              
              <div className="prose prose-lg max-w-none" style={{ color: 'var(--text-secondary)' }}>
                <p className="text-xl leading-relaxed mb-6">
                  I started building software professionally in 2006 during a placement year at Sift Group while 
                  studying at the University of the West of England. Back then it was custom CMS work, Drupal 
                  development, and Flash (yes, Flash). I graduated with a First Class degree in 2008, but by 
                  then I&apos;d already been working for two years building sites for clients like The Kennel Club and the NHS.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  In 2010, I jumped ship to Mubaloo and entered the wild world of mobile development. This was 
                  peak mobile diversity—iOS, Android, Blackberry, Nokia Symbian—you name it, I built for it. 
                  I started as an iOS Developer, then moved to Mobile Web Apps, became Web Team Lead, then iOS 
                  Team Lead, and eventually Head of Technology—basically a CTO role where I was supporting new 
                  business opportunities and pitches. I worked on everything from public-facing consumer apps to 
                  enterprise software for the likes of UBS, DHL, Endemol Gaming, William Hill, Aviva, and Alliance.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  But there was a problem: agency life meant I never saw projects through to completion. You&apos;d 
                  build something, hand it off, and move to the next pitch. It was frustrating. After five years, 
                  I wanted to work on products rather than projects—to actually see something through and iterate on it.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  So in 2015, I joined Careflow Connect as Head of Mobile and developed the much-loved Careflow 
                  Connect iOS app. I also contributed to the Android and web versions. Finally, I could see a 
                  product evolve and improve based on real user feedback. In 2020, we were acquired by System C 
                  Healthcare, and I&apos;m still there today.
                </p>
                
                <p className="text-xl leading-relaxed mb-6">
                  These days I work across iOS and full-stack web development using Vue.js, Vuetify, and C#. 
                  I&apos;ve only been working with C# for about three months, but I stand by my belief that if 
                  you know programming fundamentals, picking up a new language is just learning the libraries. 
                  Right now I&apos;m heavily involved in an ambient listening project where my skills have been 
                  put to the test, and I&apos;ve been using ChatGPT and Claude as my sidekicks. I&apos;m a firm 
                  advocate for AI-assisted development.
                </p>
                
                <p className="text-xl leading-relaxed">
                  I&apos;m as much an architect as I am a developer. I like to map things out before setting 
                  off—plan the structure, think through the edge cases, then build it properly. Sometimes that 
                  means saying no to the quick fix and doing it right the first time.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

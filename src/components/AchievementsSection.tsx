import { Trophy, Star, Code, Award, TrendingUp, CheckCircle2, Medal } from "lucide-react";

const achievements = [
  {
    platform: "LeetCode",
    stat: "174+",
    label: "Problems Solved",
    icon: Code,
    highlight: "50 Days Badge 2025",
    color: "from-orange-500 to-yellow-500",
  },
  {
    platform: "GeeksforGeeks",
    stat: "59",
    label: "Problems Solved",
    icon: Trophy,
    highlight: "Consistent Solver",
    color: "from-green-500 to-emerald-500",
  },
  {
    platform: "HackerRank",
    stat: "50+",
    label: "Problems Solved",
    icon: Star,
    highlight: "SQL ⭐⭐⭐",
    color: "from-emerald-500 to-teal-500",
  },
  {
    platform: "Coding Ninjas",
    stat: "17",
    label: "Problems Solved",
    icon: Award,
    highlight: "Active Learner",
    color: "from-primary to-primary/70",
  },
];

const certifications = [
  { name: "Python 101 for Data Science", issuer: "IBM" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco" },
  { name: "Time Complexity Wizard", issuer: "InterviewBit" },
  { name: "50 Days Badge 2025", issuer: "LeetCode" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="accent-dot" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Achievements
              </span>
              <div className="accent-dot" />
            </div>

            <h2 className="section-heading mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Coding <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subheading mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
              A track record of consistent practice and continuous improvement across multiple platforms.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((item, index) => (
              <div
                key={item.platform}
                className="group relative bg-card rounded-3xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                {/* Gradient top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                
                <div className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={28} />
                  </div>
                  
                  <div className="stat-number text-5xl mb-2">{item.stat}</div>
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground mb-3">{item.platform}</p>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-full">
                    <Medal size={12} className="text-primary" />
                    <span className="text-xs text-primary font-medium">{item.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total stats banner */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-3xl p-8 mb-16 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 rounded-2xl">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">300+ Total Problems Solved</h3>
                  <p className="text-white/80">Across all competitive programming platforms</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">4+</div>
                  <div className="text-sm text-white/80">Platforms</div>
                </div>
                <div className="w-px h-12 bg-white/20 hidden md:block" />
                <div className="text-center text-white">
                  <div className="text-3xl font-bold">Daily</div>
                  <div className="text-sm text-white/80">Practice</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card p-8 rounded-3xl animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <CheckCircle2 className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="group flex items-center gap-4 p-5 bg-background rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform" />
                  <div>
                    <span className="text-foreground font-medium block">{cert.name}</span>
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

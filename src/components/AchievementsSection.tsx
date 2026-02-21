import { Trophy, Star, Code, Award, TrendingUp, CheckCircle2, Medal } from "lucide-react";

const achievements = [
  { platform: "LeetCode", stat: "174+", label: "Problems Solved", icon: Code, highlight: "50 Days Badge 2025" },
  { platform: "GeeksforGeeks", stat: "59", label: "Problems Solved", icon: Trophy, highlight: "Consistent Solver" },
  { platform: "HackerRank", stat: "50+", label: "Problems Solved", icon: Star, highlight: "SQL ⭐⭐⭐" },
  { platform: "Coding Ninjas", stat: "17", label: "Problems Solved", icon: Award, highlight: "Active Learner" },
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
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="accent-dot" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Achievements</span>
              <div className="accent-dot" />
            </div>
            <h2 className="section-heading mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Coding <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-subheading mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
              A track record of consistent practice and continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {achievements.map((item, index) => (
              <div
                key={item.platform}
                className="group glass-card p-6 text-center hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div className="stat-number text-4xl mb-2">{item.stat}</div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-sm font-semibold text-foreground mb-3">{item.platform}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 rounded-lg">
                  <Medal size={12} className="text-primary" />
                  <span className="text-xs text-primary font-medium">{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Total stats */}
          <div className="glass-card border-primary/20 p-8 mb-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <TrendingUp size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">300+ Total Problems Solved</h3>
                  <p className="text-muted-foreground">Across all competitive programming platforms</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-muted-foreground">Platforms</div>
                </div>
                <div className="w-px h-10 bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">Daily</div>
                  <div className="text-sm text-muted-foreground">Practice</div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-primary/10 rounded-lg">
                <CheckCircle2 className="text-primary" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-border/30 hover:border-primary/20 transition-all">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <span className="text-foreground font-medium block text-sm">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">{cert.issuer}</span>
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

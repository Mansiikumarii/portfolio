import { Trophy, Star, Code, Award } from "lucide-react";

const achievements = [
  {
    platform: "LeetCode",
    stat: "174+",
    label: "Problems Solved",
    icon: Code,
    highlight: "50 Days Badge 2025",
  },
  {
    platform: "GeeksforGeeks",
    stat: "59",
    label: "Problems Solved",
    icon: Trophy,
    highlight: "Consistent Problem Solver",
  },
  {
    platform: "HackerRank",
    stat: "50+",
    label: "Problems Solved",
    icon: Star,
    highlight: "SQL ⭐⭐⭐ (3 Stars)",
  },
  {
    platform: "Coding Ninjas",
    stat: "17",
    label: "Problems Solved",
    icon: Award,
    highlight: "Active Learner",
  },
];

const certifications = [
  "Python 101 for Data Science",
  "CCNA: Introduction to Networks — Cisco",
  "Time Complexity Wizard — InterviewBit",
  "50 Days Badge 2025 — LeetCode",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Achievements
            </span>
          </div>

          <h2 className="section-heading mb-4">
            Coding <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subheading mb-12">
            A track record of consistent practice and continuous improvement across multiple platforms.
          </p>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((item) => (
              <div
                key={item.platform}
                className="bg-card p-6 rounded-xl text-center"
                style={{ boxShadow: 'var(--card-shadow)' }}
              >
                <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div className="stat-number text-4xl mb-1">{item.stat}</div>
                <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                <p className="text-xs font-medium text-foreground">{item.platform}</p>
                <p className="text-xs text-primary mt-2">{item.highlight}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-card p-8 rounded-2xl" style={{ boxShadow: 'var(--card-shadow)' }}>
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{cert}</span>
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

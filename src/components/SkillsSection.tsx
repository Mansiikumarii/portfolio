import { Code2, Globe, Database, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["C++", "Python", "Java", "C", "PHP", "C#", "SQL"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Node.js"],
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent-foreground",
  },
  {
    title: "Frameworks & Libraries",
    icon: Code2,
    skills: ["Flask", "React", "Bootstrap", "Tailwind CSS"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MySQL"],
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent-foreground",
  },
  {
    title: "Cloud & DevOps",
    icon: Globe,
    skills: ["Google Cloud", "AWS", "Salesforce", "Linux", "Shell Script"],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Linux"],
    color: "from-accent/30 to-accent/10",
    iconColor: "text-accent-foreground",
  },
  {
    title: "Core Concepts",
    icon: Brain,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Problem Solving",
      "Time & Space Complexity",
      "Communication Skills",
    ],
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    fullWidth: true,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="accent-dot" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Skills
              </span>
              <div className="accent-dot" />
            </div>

            <h2 className="section-heading mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subheading mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
              A comprehensive toolkit for building efficient solutions and solving complex problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`group bg-card p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 animate-fade-in ${
                  category.fullWidth ? "md:col-span-2" : ""
                }`}
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}>
                    <category.icon className={category.iconColor} size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.skills.length} skills</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-badge group-hover:bg-primary/10 transition-colors"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Skill highlight bar */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary to-primary/80 rounded-2xl text-primary-foreground animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Brain size={24} />
                <span className="text-lg font-medium">Continuously learning and improving every day</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-xs text-primary-foreground/80">Languages</div>
                </div>
                <div className="w-px h-10 bg-primary-foreground/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold">3+</div>
                  <div className="text-xs text-primary-foreground/80">Databases</div>
                </div>
                <div className="w-px h-10 bg-primary-foreground/20" />
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-xs text-primary-foreground/80">Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

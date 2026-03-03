import { Briefcase, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "AI/ML Intern",
    company: "UptoSkills",
    period: "Feb 2026 – Present",
    type: "Internship",
    status: "current",
    description:
      "Working on AI and Machine Learning projects, building predictive models and deploying intelligent solutions.",
    skills: ["Python", "Machine Learning", "Deep Learning", "Data Analysis"],
  },
  {
    role: "Web Developer",
    company: "Scout and Guide",
    period: "Oct 2025 – Feb 2026",
    type: "Part-time",
    status: "completed",
    description:
      "Developed and maintained web applications, built responsive interfaces and improved user experience across platforms.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="accent-dot" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Experience
              </span>
              <div className="accent-dot" />
            </div>

            <h2
              className="section-heading mb-4 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <p
              className="section-subheading mx-auto animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              Real-world experience building products and solving problems.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative flex flex-col md:flex-row items-start gap-8 animate-fade-in ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        exp.status === "current"
                          ? "bg-primary border-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]"
                          : "bg-background border-primary/50"
                      }`}
                    />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                    }`}
                  >
                    <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium text-sm flex items-center gap-1.5">
                            {exp.company}
                            <ArrowUpRight size={14} className="opacity-50" />
                          </p>
                        </div>
                        {exp.status === "current" && (
                          <span className="px-2.5 py-1 text-xs font-semibold bg-primary/15 text-primary rounded-full border border-primary/20">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={12} />
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-secondary/50 text-foreground/70 rounded border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default ExperienceSection;

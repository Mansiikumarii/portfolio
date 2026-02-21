import { ExternalLink, Github, Code2, Database, Brain, ArrowUpRight, Folder } from "lucide-react";

const projects = [
  {
    title: "Data Structures & Algorithms",
    description: "Comprehensive implementations of core DSA concepts in C++ including arrays, linked lists, stacks, queues, trees, and various algorithms.",
    tech: ["C++", "Algorithms", "Data Structures"],
    icon: Code2,
    github: "https://github.com/Mansiikumarii",
  },
  {
    title: "LeetCode & GFG Solutions",
    description: "Collection of competitive programming solutions with optimized approaches and focus on time complexity analysis.",
    tech: ["C++", "Python", "Problem Solving"],
    icon: Brain,
    github: "https://github.com/Mansiikumarii",
  },
  {
    title: "SQL & Database Practice",
    description: "Hands-on SQL queries, joins, and database fundamentals. Practical experience with relational databases.",
    tech: ["SQL", "MySQL", "Database Design"],
    icon: Database,
    github: "https://github.com/Mansiikumarii",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                <div className="accent-dot" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects</span>
              </div>
              <h2 className="section-heading mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p className="section-subheading animate-fade-in" style={{ animationDelay: '150ms' }}>
                Showcasing my journey through code, algorithms, and practical implementations.
              </p>
            </div>
            <a
              href="https://github.com/Mansiikumarii"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-6 md:mt-0"
            >
              <Folder size={18} />
              View All on GitHub
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group glass-card p-7 hover:border-primary/30 transition-all duration-300 animate-fade-in flex flex-col"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <project.icon size={24} className="text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 bg-secondary/50 rounded-md text-muted-foreground font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                >
                  <Github size={16} />
                  View Repository
                  <ExternalLink size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <a
              href="https://github.com/Mansiikumarii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:border-primary/50 hover:bg-primary/5 transition-all"
            >
              <Github size={18} />
              Explore GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

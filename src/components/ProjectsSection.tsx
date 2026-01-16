import { ExternalLink, Github, Code2, Database, Brain, ArrowUpRight, Folder } from "lucide-react";

const projects = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Comprehensive implementations of core DSA concepts in C++ including arrays, linked lists, stacks, queues, trees, and various algorithms. Demonstrates strong problem-solving ability and interview preparation.",
    tech: ["C++", "Algorithms", "Data Structures"],
    icon: Code2,
    github: "https://github.com/Mansiikumarii",
    gradient: "from-primary to-primary/70",
    bgGlow: "bg-primary/20",
  },
  {
    title: "LeetCode & GFG Solutions",
    description:
      "Collection of competitive programming solutions with optimized approaches and focus on time complexity analysis. Showcases consistency, logical thinking, and systematic problem-solving.",
    tech: ["C++", "Python", "Problem Solving"],
    icon: Brain,
    github: "https://github.com/Mansiikumarii",
    gradient: "from-accent to-accent/70",
    bgGlow: "bg-accent/20",
  },
  {
    title: "SQL & Database Practice",
    description:
      "Hands-on SQL queries, joins, and database fundamentals. Practical experience with relational databases covering CRUD operations, complex queries, and data manipulation.",
    tech: ["SQL", "MySQL", "Database Design"],
    icon: Database,
    github: "https://github.com/Mansiikumarii",
    gradient: "from-primary to-primary/70",
    bgGlow: "bg-primary/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fade-in">
                <div className="accent-dot" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Projects
                </span>
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
              className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all mt-6 md:mt-0 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <Folder size={18} />
              View All on GitHub
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-background rounded-3xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 ${project.bgGlow} opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500`} />
                
                <div className="relative p-8 border border-border group-hover:border-primary/30 rounded-3xl transition-all duration-300 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <project.icon size={26} className="text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-secondary/80 rounded-full text-secondary-foreground font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                  >
                    <Github size={18} />
                    View Repository
                    <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA for more projects */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-muted-foreground mb-4">Interested in seeing more of my work?</p>
            <a
              href="https://github.com/Mansiikumarii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
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

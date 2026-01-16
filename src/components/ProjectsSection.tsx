import { ExternalLink, Github, Code2, Database, Brain } from "lucide-react";

const projects = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Comprehensive implementations of core DSA concepts in C++ including arrays, linked lists, stacks, queues, trees, and various algorithms. Demonstrates strong problem-solving ability and interview preparation.",
    tech: ["C++", "Algorithms", "Data Structures"],
    icon: Code2,
    github: "https://github.com/Mansiikumarii",
    color: "bg-primary/10 text-primary",
  },
  {
    title: "LeetCode & GFG Solutions",
    description:
      "Collection of competitive programming solutions with optimized approaches and focus on time complexity analysis. Showcases consistency, logical thinking, and systematic problem-solving.",
    tech: ["C++", "Python", "Problem Solving"],
    icon: Brain,
    github: "https://github.com/Mansiikumarii",
    color: "bg-accent/20 text-accent-foreground",
  },
  {
    title: "SQL & Database Practice",
    description:
      "Hands-on SQL queries, joins, and database fundamentals. Practical experience with relational databases covering CRUD operations, complex queries, and data manipulation.",
    tech: ["SQL", "MySQL", "Database Design"],
    icon: Database,
    github: "https://github.com/Mansiikumarii",
    color: "bg-primary/10 text-primary",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Projects
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="section-heading mb-4">
                Featured <span className="gradient-text">Work</span>
              </h2>
              <p className="section-subheading">
                Showcasing my journey through code, algorithms, and practical implementations.
              </p>
            </div>
            <a
              href="https://github.com/Mansiikumarii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline mt-4 md:mt-0"
            >
              View All on GitHub
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 rounded-xl w-fit ${project.color} mb-6`}>
                  <project.icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  View Repository
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

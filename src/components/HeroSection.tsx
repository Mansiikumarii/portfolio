import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Open for Opportunities
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Hey There,
                <br />
                I'm <span className="gradient-text">Mansi</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Final-year CSE student with strong fundamentals in programming, 
                data structures & algorithms. Passionate about building efficient 
                solutions and ready to contribute to innovative teams.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://github.com/Mansiikumarii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mansiikumarii"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mansi15094@gmail.com"
                className="p-3 bg-secondary rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="hidden lg:flex flex-col items-end gap-8 animate-fade-up delay-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-8 rounded-2xl text-center" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="stat-number">174+</div>
                <p className="text-muted-foreground mt-2 font-medium">LeetCode Problems</p>
              </div>
              <div className="bg-card p-8 rounded-2xl text-center" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="stat-number">8.88</div>
                <p className="text-muted-foreground mt-2 font-medium">CGPA</p>
              </div>
              <div className="bg-card p-8 rounded-2xl text-center col-span-2" style={{ boxShadow: 'var(--card-shadow)' }}>
                <div className="stat-number">300+</div>
                <p className="text-muted-foreground mt-2 font-medium">Problems Solved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" className="p-3 bg-secondary rounded-full block">
            <ArrowDown size={20} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

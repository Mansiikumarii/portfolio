import { ArrowDown, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import coderGirl from "@/assets/coder-girl-character.png";

const roles = ["Software Developer", "Problem Solver", "DSA Enthusiast", "Tech Explorer"];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.slice(0, displayText.length + 1));
        if (displayText.length === role.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(role.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.3)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Available for Opportunities
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-lg font-medium flex items-center gap-2">
                <Terminal size={18} className="text-primary" />
                Hello World, I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] tracking-tight">
                Mansi
                <span className="text-primary">.</span>
              </h1>
              <div className="h-12 flex items-center">
                <span className="text-2xl md:text-3xl text-muted-foreground font-light">
                  {"<"}
                </span>
                <span className="text-2xl md:text-3xl gradient-text font-semibold mx-2">
                  {displayText}
                </span>
                <span className="text-2xl md:text-3xl text-primary animate-pulse font-light">|</span>
                <span className="text-2xl md:text-3xl text-muted-foreground font-light">
                  {" />"}
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Final-year CSE student with strong fundamentals in{" "}
                <span className="text-foreground">programming & DSA</span>. 
                Building efficient solutions, one algorithm at a time.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Get In Touch
                  <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                </span>
              </a>
              <a
                href="#projects"
                className="group px-7 py-3.5 border border-border text-foreground rounded-lg font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <div className="h-px w-12 bg-border" />
              {[
                { icon: Github, href: "https://github.com/Mansiikumarii", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mansiikumarii", label: "LinkedIn" },
                { icon: Mail, href: "mailto:mansi15094@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2.5 text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Character + Stats */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative flex flex-col items-center">
              {/* Character */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl scale-75" />
                <img
                  src={coderGirl}
                  alt="Coder character"
                  className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain relative z-10 animate-float drop-shadow-2xl"
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                {[
                  { value: "174+", label: "LeetCode" },
                  { value: "8.88", label: "CGPA" },
                  { value: "300+", label: "Problems" },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-4 text-center hover:border-primary/30 transition-all group">
                    <div className="stat-number text-2xl md:text-3xl">{stat.value}</div>
                    <p className="text-muted-foreground text-xs mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <a href="#about" className="p-2 border border-border rounded-full animate-float">
            <ArrowDown size={14} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

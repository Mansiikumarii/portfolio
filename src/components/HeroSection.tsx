import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Zap } from "lucide-react";
import coderGirl from "@/assets/coder-girl-character.png";
import floatingLaptop from "@/assets/floating-laptop.png";
import cuteCoffee from "@/assets/cute-coffee.png";
import cuteRocket from "@/assets/cute-rocket.png";
import cuteLightbulb from "@/assets/cute-lightbulb.png";
import cuteCodeSymbols from "@/assets/cute-code-symbols.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-10 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      {/* Cute floating cartoon images */}
      <div className="absolute top-24 right-16 animate-float hidden lg:block">
        <img src={cuteCoffee} alt="Cute coffee" className="w-20 h-20 object-contain drop-shadow-lg" />
      </div>
      <div className="absolute bottom-32 left-16 animate-float-delayed hidden lg:block">
        <img src={cuteLightbulb} alt="Cute lightbulb" className="w-24 h-24 object-contain drop-shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-8 animate-bounce-slow hidden lg:block">
        <img src={cuteRocket} alt="Cute rocket" className="w-16 h-16 object-contain drop-shadow-lg" />
      </div>
      <div className="absolute bottom-48 right-1/4 animate-pulse-slow hidden lg:block">
        <img src={cuteCodeSymbols} alt="Code symbols" className="w-20 h-20 object-contain opacity-80" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">
                Open for Opportunities
              </span>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.1]">
                Hey There,
                <br />
                <span className="relative">
                  I'm{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text">Mansi</span>
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                      <path d="M2 8.5C50 2 150 2 198 8.5" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round" className="animate-draw-line"/>
                    </svg>
                  </span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed font-light">
                Final-year <span className="text-foreground font-medium">CSE student</span> with strong fundamentals in{" "}
                <span className="text-primary font-medium">programming & DSA</span>. 
                Passionate about building efficient solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <Mail size={18} className="group-hover:rotate-12 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#projects"
                className="group px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all hover:bg-primary/5"
              >
                <span className="flex items-center gap-2">
                  View Projects
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </div>

            {/* Social Links with enhanced styling */}
            <div className="flex items-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="h-px w-8 bg-border" />
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-card rounded-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="GitHub"
                >
                  <Github size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-card rounded-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
                <a
                  href="mailto:mansi15094@gmail.com"
                  className="group p-3 bg-card rounded-xl text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                  aria-label="Email"
                >
                  <Mail size={20} className="group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Cute Coder Character + Stats */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              {/* Cute coder girl character */}
              <div className="relative z-20 flex justify-center mb-6">
                <div className="relative">
                  <img 
                    src={coderGirl} 
                    alt="Cute coder girl" 
                    className="w-72 h-72 object-contain drop-shadow-2xl animate-float"
                  />
                  {/* Floating laptop beside character */}
                  <img 
                    src={floatingLaptop} 
                    alt="Floating laptop" 
                    className="absolute -right-8 top-1/2 w-24 h-24 object-contain animate-float-delayed drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Stats grid below character */}
              <div className="relative z-10 grid grid-cols-3 gap-4">
                <div className="group bg-card p-5 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
                  <div className="stat-number text-4xl">174+</div>
                  <p className="text-muted-foreground mt-2 text-sm font-medium">LeetCode</p>
                  <div className="mt-2 flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                    ))}
                  </div>
                </div>
                
                <div className="group bg-card p-5 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
                  <div className="stat-number text-4xl">8.88</div>
                  <p className="text-muted-foreground mt-2 text-sm font-medium">CGPA</p>
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 rounded-full">
                    <Sparkles size={10} className="text-primary" />
                    <span className="text-[10px] text-primary font-medium">Top</span>
                  </div>
                </div>
                
                <div className="group bg-card p-5 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
                  <div className="stat-number text-4xl">300+</div>
                  <p className="text-muted-foreground mt-2 text-sm font-medium">Solved</p>
                  <div className="mt-2 flex justify-center gap-1">
                    <span className="text-[10px] px-1.5 py-0.5 bg-accent/20 rounded text-accent-foreground">DSA</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements behind stats */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Mobile stats */}
          <div className="lg:hidden grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="bg-card p-4 rounded-2xl text-center shadow-sm">
              <div className="stat-number text-3xl">174+</div>
              <p className="text-xs text-muted-foreground mt-1">LeetCode</p>
            </div>
            <div className="bg-card p-4 rounded-2xl text-center shadow-sm">
              <div className="stat-number text-3xl">8.88</div>
              <p className="text-xs text-muted-foreground mt-1">CGPA</p>
            </div>
            <div className="bg-card p-4 rounded-2xl text-center shadow-sm">
              <div className="stat-number text-3xl">300+</div>
              <p className="text-xs text-muted-foreground mt-1">Solved</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <a href="#about" className="p-2 border border-border rounded-full animate-bounce-slow">
            <ArrowDown size={16} className="text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

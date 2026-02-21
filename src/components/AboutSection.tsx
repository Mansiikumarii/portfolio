import { GraduationCap, MapPin, Calendar, Briefcase, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Me
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h2 className="section-heading mb-6">
                A Passionate <span className="gradient-text">CSE Student</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm Mansi Kumari, a final-year Computer Science Engineering student at JECRC University, 
                Jaipur. With a strong foundation in programming and a passion for problem-solving, 
                I'm actively preparing for software development roles.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                My journey includes extensive practice in <span className="text-foreground font-medium">Data Structures & Algorithms</span>, 
                competitive programming, and building practical projects that solve real-world problems.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm font-medium text-primary">
                  <Target size={16} />
                  Goal-Oriented
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-lg text-sm font-medium text-accent">
                  <Briefcase size={16} />
                  Open to Work
                </span>
              </div>
            </div>

            <div className="grid gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {[
                { icon: GraduationCap, title: "Education", desc: "B.Tech in Computer Science Engineering", sub: "JECRC University, Jaipur" },
                { icon: Calendar, title: "Duration", desc: "2022 - 2026", sub: "Final Year Student" },
                { icon: MapPin, title: "Location", desc: "Jaipur, Rajasthan, India", sub: "Open to Relocation" },
              ].map(({ icon: Icon, title, desc, sub }) => (
                <div key={title} className="group flex items-start gap-5 p-5 glass-card hover:border-primary/30 transition-all duration-300">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{title}</h3>
                    <p className="text-muted-foreground">{desc}</p>
                    <p className="text-sm text-primary font-medium mt-1">{sub}</p>
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

export default AboutSection;

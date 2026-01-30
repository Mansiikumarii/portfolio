import { GraduationCap, MapPin, Calendar, Briefcase, Target } from "lucide-react";
import coderGirl from "@/assets/coder-girl-character.png";
import cuteLightbulb from "@/assets/cute-lightbulb.png";
import cuteRocket from "@/assets/cute-rocket.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Cute floating images - visible on more screens */}
      <div className="absolute top-12 right-4 md:top-20 md:right-24 animate-float z-10">
        <img src={cuteRocket} alt="Rocket" className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-lg" />
      </div>
      <div className="absolute bottom-16 left-4 md:bottom-24 md:left-20 animate-float-delayed z-10">
        <img src={cuteLightbulb} alt="Lightbulb" className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Me
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text content */}
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
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                  <Target size={16} />
                  Goal-Oriented
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-accent-foreground">
                  <Briefcase size={16} />
                  Open to Work
                </span>
              </div>
            </div>

            {/* Right - Info cards */}
            <div className="grid gap-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="group flex items-start gap-5 p-6 bg-background rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Education</h3>
                  <p className="text-muted-foreground">B.Tech in Computer Science Engineering</p>
                  <p className="text-sm text-primary font-medium mt-1">JECRC University, Jaipur</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-background rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                  <Calendar className="text-accent-foreground" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Duration</h3>
                  <p className="text-muted-foreground">2022 - 2026</p>
                  <p className="text-sm text-primary font-medium mt-1">Final Year Student</p>
                </div>
              </div>

              <div className="group flex items-start gap-5 p-6 bg-background rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl group-hover:scale-110 transition-transform">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                  <p className="text-sm text-primary font-medium mt-1">Open to Relocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

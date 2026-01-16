import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              About Me
            </span>
          </div>

          <h2 className="section-heading">
            A Passionate <span className="gradient-text">CSE Student</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I'm Mansi Kumari, a final-year Computer Science Engineering student at JECRC University, 
            Jaipur. With a strong foundation in programming and a passion for problem-solving, 
            I'm actively preparing for software development roles. My journey includes extensive 
            practice in Data Structures & Algorithms, competitive programming, and building practical projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech in CSE</p>
                <p className="text-sm text-muted-foreground">JECRC University</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Duration</h3>
                <p className="text-sm text-muted-foreground">2022 - 2026</p>
                <p className="text-sm text-muted-foreground">Final Year</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-background rounded-xl">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Jaipur, Rajasthan</p>
                <p className="text-sm text-muted-foreground">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

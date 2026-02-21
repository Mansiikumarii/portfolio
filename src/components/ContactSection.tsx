import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/3 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="accent-dot" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contact</span>
              <div className="accent-dot" />
            </div>
            <h2 className="section-heading mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subheading mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
              I'm currently open to internship and full-time opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 space-y-4">
              <a
                href="mailto:mansi15094@gmail.com"
                className="group flex items-center gap-5 p-5 glass-card hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '200ms' }}
              >
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Mail size={24} className="text-primary" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-0.5">Email me at</p>
                  <p className="text-foreground font-semibold">mansi15094@gmail.com</p>
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 p-5 glass-card animate-fade-in" style={{ animationDelay: '250ms' }}>
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Jaipur, Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 glass-card animate-fade-in" style={{ animationDelay: '300ms' }}>
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="text-foreground font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '350ms' }}>
                <a
                  href="https://github.com/Mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-3 p-4 glass-card hover:border-primary/30 transition-all"
                >
                  <Github size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-3 p-4 glass-card hover:border-primary/30 transition-all"
                >
                  <Linkedin size={20} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                  <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 glass-card border-primary/20 p-8 flex flex-col justify-between min-h-[300px] animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Send size={22} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Ready to collaborate?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively looking for internship and entry-level software development opportunities.
                </p>
              </div>
              <a
                href="mailto:mansi15094@gmail.com"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all mt-6"
              >
                <Mail size={18} />
                Send a Message
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

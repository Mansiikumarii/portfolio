import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 animate-fade-in">
              <div className="accent-dot" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Contact
              </span>
              <div className="accent-dot" />
            </div>

            <h2 className="section-heading mb-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="section-subheading mx-auto animate-fade-in" style={{ animationDelay: '150ms' }}>
              I'm currently open to internship and full-time opportunities. 
              Feel free to reach out if you'd like to discuss potential collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Cards */}
            <div className="lg:col-span-3 space-y-4">
              <a
                href="mailto:mansi15094@gmail.com"
                className="group flex items-center gap-5 p-6 bg-background rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: '200ms' }}
              >
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Mail size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-1">Email me at</p>
                  <p className="text-foreground font-semibold text-lg">mansi15094@gmail.com</p>
                </div>
                <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>

              <div className="grid md:grid-cols-2 gap-4">
                <div
                  className="flex items-center gap-4 p-6 bg-background rounded-2xl animate-fade-in"
                  style={{ animationDelay: '250ms' }}
                >
                  <div className="p-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl">
                    <MapPin size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Jaipur, Rajasthan</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 p-6 bg-background rounded-2xl animate-fade-in"
                  style={{ animationDelay: '300ms' }}
                >
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                    <p className="text-foreground font-medium">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '350ms' }}>
                <a
                  href="https://github.com/Mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-3 p-5 bg-background rounded-2xl border border-transparent hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Github size={22} className="group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-3 p-5 bg-background rounded-2xl border border-transparent hover:border-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                >
                  <Linkedin size={22} className="group-hover:rotate-12 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="lg:col-span-2 relative rounded-3xl overflow-hidden animate-fade-in"
              style={{ animationDelay: '400ms' }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
              
              {/* Pattern overlay */}
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='1'%3e%3ccircle cx='30' cy='30' r='2'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
                }}
              />
              
              <div className="relative p-8 flex flex-col justify-between h-full min-h-[320px]">
                <div>
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-white mb-3">
                    Ready to collaborate?
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    I'm actively looking for internship and entry-level software development opportunities. 
                    Let's discuss how I can contribute to your team.
                  </p>
                </div>

                <a
                  href="mailto:mansi15094@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-primary rounded-2xl font-semibold hover:bg-white/90 transition-all hover:shadow-lg mt-6"
                >
                  <Mail size={18} />
                  Send a Message
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="accent-dot" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Contact
            </span>
          </div>

          <h2 className="section-heading mb-4">
            Let's Connect<span className="gradient-text">.</span>
          </h2>
          <p className="section-subheading mb-12">
            I'm currently open to internship and full-time opportunities. 
            Feel free to reach out if you'd like to discuss potential collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <a
                href="mailto:mansi15094@gmail.com"
                className="flex items-center gap-4 p-6 bg-background rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">mansi15094@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-background rounded-xl">
                <div className="p-4 bg-primary/10 rounded-xl">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">Jaipur, Rajasthan, India</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/Mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 bg-background rounded-xl hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Github size={20} />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mansiikumarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 p-4 bg-background rounded-xl hover:bg-primary hover:text-primary-foreground transition-all group"
                >
                  <Linkedin size={20} />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div
              className="bg-primary p-8 rounded-2xl text-primary-foreground flex flex-col justify-center"
              style={{ background: 'var(--hero-gradient)' }}
            >
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Ready to work together?
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                I'm actively looking for internship and entry-level software development opportunities. 
                Let's discuss how I can contribute to your team.
              </p>
              <a
                href="mailto:mansi15094@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors w-fit"
              >
                <Send size={18} />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

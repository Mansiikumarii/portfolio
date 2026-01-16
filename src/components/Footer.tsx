import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Mansi Kumari. Crafted with</span>
            <Heart size={14} className="text-destructive fill-destructive animate-pulse" />
            <span>in Jaipur</span>
          </div>

          {/* Center - Logo */}
          <a href="#" className="font-heading text-2xl font-bold text-foreground order-first md:order-none">
            Mansi<span className="text-primary">.</span>
          </a>

          {/* Right - Links & Back to top */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Mansiikumarii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mansiikumarii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-all group"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Heart, ArrowUp, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Mansi Kumari. Crafted with</span>
            <Heart size={14} className="text-primary fill-primary" />
          </div>

          <a href="#" className="flex items-center gap-2 font-heading text-lg font-bold text-foreground order-first md:order-none">
            <Code2 size={18} className="text-primary" />
            Mansi<span className="text-primary">.</span>
          </a>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Mansiikumarii" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/mansiikumarii" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

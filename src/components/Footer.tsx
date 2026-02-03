import { motion } from 'framer-motion';
import { Rocket, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-glow-cyan/20">
      <div className="absolute inset-0 bg-gradient-to-t from-glow-cyan/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-glow-cyan" />
            </div>
            <div>
              <span className="font-display font-bold text-foreground">Ashish Dubey</span>
              <p className="text-xs text-muted-foreground font-tech">
                © {currentYear} All Rights Reserved
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/ashishdubeyuw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center text-muted-foreground hover:text-glow-cyan hover:border-glow-cyan/50 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ashishdubeyuw@gmail.com"
              className="w-10 h-10 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center text-muted-foreground hover:text-glow-cyan hover:border-glow-cyan/50 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Made with */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-muted-foreground font-tech"
          >
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-glow-cyan animate-pulse" />
            <span>for Aerospace Excellence</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

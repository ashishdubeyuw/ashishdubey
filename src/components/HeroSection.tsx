import { motion } from 'framer-motion';
import { ChevronDown, Download, Linkedin, Mail, MapPin } from 'lucide-react';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/Resume_AshishDubey.pdf';
    link.download = 'Ashish_Dubey_Resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* HUD-style overlay elements */}
      <div className="absolute top-8 left-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-2 text-sm font-tech text-glow-cyan"
        >
          <div className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
          <span>SYSTEM ONLINE</span>
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-2 text-sm font-tech text-muted-foreground"
        >
          <MapPin className="w-4 h-4 text-glow-cyan" />
          <span>Lynnwood, WA, USA</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Designation badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 text-glow-cyan font-tech text-sm tracking-widest uppercase">
              Senior Embedded Software Architect
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">ASHISH</span>
            <br />
            <span className="text-gradient text-glow">DUBEY</span>
          </motion.h1>

          {/* Animated divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="divider-hud max-w-md mx-auto mb-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl font-tech text-muted-foreground mb-4"
          >
            15+ Years Engineering Excellence
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg font-body text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Aerospace • Embedded Systems • Flight Control Software • Hardware-in-Loop Testing • eVTOL Innovation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleDownloadResume}
              className="btn-aerospace group"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </span>
            </button>

            <a
              href="https://linkedin.com/in/ashishdubeyuw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-tech text-foreground hover:border-glow-cyan hover:text-glow-cyan transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>

            <a
              href="mailto:ashishdubeyuw@gmail.com"
              className="flex items-center gap-2 px-8 py-3 border border-border rounded-lg font-tech text-foreground hover:border-glow-cyan hover:text-glow-cyan transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '$5M+', label: 'Cost Savings' },
              { value: '0.001', label: 'Defect Density' },
              { value: '3', label: 'Trade Secrets' },
            ].map((stat, index) => (
              <div key={index} className="card-glow p-4 rounded-lg corner-accents">
                <div className="text-2xl md:text-3xl font-display font-bold text-glow-cyan text-glow">
                  {stat.value}
                </div>
                <div className="text-sm font-tech text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-xs font-tech mb-2">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-glow-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

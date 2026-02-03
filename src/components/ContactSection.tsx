import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, MapPin, Phone, ExternalLink, Send } from 'lucide-react';

const ContactSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: '-50px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ashishdubeyuw@gmail.com',
      href: 'mailto:ashishdubeyuw@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (425) 560-5118',
      href: 'tel:+14255605118',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ashishdubeyuw',
      href: 'https://linkedin.com/in/ashishdubeyuw',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lynnwood, WA 98036, USA',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 text-glow-cyan font-tech text-sm tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">LET'S</span>{' '}
            <span className="text-gradient text-glow">CONNECT</span>
          </h2>
          <div className="divider-hud max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Open to discussing aerospace engineering opportunities, embedded systems consulting, and innovative projects
          </p>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isContentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`card-glow rounded-xl p-6 flex items-center gap-4 group ${
                    item.href ? 'cursor-pointer hover:border-glow-cyan/50' : ''
                  } transition-all duration-300`}
                >
                  <div className="w-14 h-14 rounded-xl bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center group-hover:bg-glow-cyan/20 transition-colors">
                    <Icon className="w-6 h-6 text-glow-cyan" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-tech text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </span>
                    <p className="text-foreground font-tech mt-1 group-hover:text-glow-cyan transition-colors">
                      {item.value}
                    </p>
                  </div>
                  {item.href && (
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-glow-cyan transition-colors" />
                  )}
                </motion.div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a
              href="mailto:ashishdubeyuw@gmail.com?subject=Portfolio Inquiry"
              className="btn-aerospace inline-flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

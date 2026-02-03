import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Honeywell Aerospace',
    location: 'Phoenix, USA',
    roles: [
      {
        title: 'Senior Advanced Embedded Engineer',
        period: 'Jul 2022 – Jun 2025',
        highlights: [
          'Architected and integrated safety-critical flight control software for eVTOL programs',
          'Designed A429 drivers and RS422 device driver for Vertical eVTOL program',
          'Automated hardware test lab with Python and LabVIEW, saving $1M+',
          'Led verification and validation for Level-A software',
        ],
      },
      {
        title: 'Advanced Embedded Engineer',
        period: 'May 2017 – Jul 2022',
        highlights: [
          'Developed flight control systems for Boeing 787 and Comac 919 with 0.001 defect density',
          'Created FADEC, Maintenance Systems, Door Sliding, and Landing Gear Control systems',
          'Automated hardware test lab using C#, saving $2M (2,000 man-hours)',
          'Automated A429 C code generation with Python, saving 400 man-hours',
        ],
      },
      {
        title: 'Senior Software Engineer',
        period: 'May 2013 – May 2017',
        highlights: [
          'Developed flight control modules for Embraer ERJ170, Gulfstream G650, Comac ARJ21',
          'Created Boot Loader and Post Software Verifier tools, saving 3,000 man-hours',
          'Performed structural coverage, code coverage, and coupling analysis',
          'Developed test plans and conducted HIL software debugging',
        ],
      },
    ],
  },
  {
    company: 'Alten',
    location: 'Bengaluru, INDIA',
    roles: [
      {
        title: 'Software Engineer',
        period: 'May 2009 – May 2013',
        highlights: [
          'Designed Wing Ice Protection Systems for Boeing 787 with 0.02% defect density',
          'Developed boot-up code for Boeing 787 and Mitsubishi MRJ21 systems',
          'Architected flash memory drivers with 0.01% defect density',
          'Performed software integration and component testing for safety-critical apps',
        ],
      },
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-glow-cyan via-glow-blue to-transparent -translate-x-1/2 hidden md:block" />

      <div className="card-glow rounded-xl p-6 md:p-8 mb-8 ml-8 md:ml-0 relative">
        {/* Timeline dot */}
        <div className="absolute -left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-glow-cyan shadow-glow -translate-x-1/2 hidden md:block" />
        <div className="absolute -left-10 top-8 w-4 h-4 rounded-full bg-glow-cyan shadow-glow md:hidden" />

        {/* Company Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-glow-cyan" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                {experience.company}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground font-tech text-sm">
                <MapPin className="w-3 h-3" />
                {experience.location}
              </div>
            </div>
          </div>
        </div>

        {/* Roles */}
        <div className="space-y-6">
          {experience.roles.map((role, roleIndex) => (
            <div key={roleIndex} className="border-l-2 border-glow-cyan/30 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-lg font-display font-semibold text-glow-cyan">
                  {role.title}
                </h4>
                <div className="flex items-center gap-1 text-muted-foreground font-tech text-sm">
                  <Calendar className="w-3 h-3" />
                  {role.period}
                </div>
              </div>
              <ul className="space-y-2">
                {role.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                    <ChevronRight className="w-4 h-4 text-glow-cyan mt-0.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 text-glow-cyan font-tech text-sm tracking-widest uppercase mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">PROFESSIONAL</span>{' '}
            <span className="text-gradient text-glow">EXPERIENCE</span>
          </h2>
          <div className="divider-hud max-w-xs mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

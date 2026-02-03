import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const education = [
  {
    school: 'University of Washington',
    department: 'Michael G. Foster School of Business',
    degree: 'M.S. in Information Systems',
    period: 'Jun 2025 – 2026',
    status: 'Ongoing',
    location: 'Seattle, USA',
    focus: ['Linear Regression', 'AI/ML', 'Cloud Computing', 'Cybersecurity', 'Generative AI', 'Business Leadership'],
  },
  {
    school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
    department: null,
    degree: 'B.E. in Information Technology',
    period: 'Jun 2004 – 2008',
    status: 'Completed',
    location: 'Bhopal, INDIA',
    focus: ['Computer Algorithms', 'Data Structures', 'Embedded C', 'Operating Systems', 'AI', 'Micro Controller'],
  },
];

const certifications = [
  {
    title: 'Software Security Practitioner - Architect',
    issuer: 'ISC2',
    category: 'Cybersecurity',
  },
  {
    title: 'Six Sigma Green Belt',
    issuer: 'Honeywell',
    category: 'Process Excellence',
    highlight: 'Best Project Award (Global)',
  },
  {
    title: 'Certified Embedded Systems Professional',
    issuer: 'Cranes Software',
    category: 'Embedded Systems',
  },
];

const awards = [
  'Top Flyer Award (2x) - Flight Control debugging & HW test automation',
  'Individual Excellence Award - Critical functionality development',
  'Team Excellence Award - Milestone delivery despite scope creep',
  '3 Trade Secret Ideas logged with Honeywell (2 in eVTOL product lines)',
];

const EducationSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const educationRef = useRef(null);
  const isEducationInView = useInView(educationRef, { once: true, margin: '-50px' });

  const certsRef = useRef(null);
  const isCertsInView = useInView(certsRef, { once: true, margin: '-50px' });

  const awardsRef = useRef(null);
  const isAwardsInView = useInView(awardsRef, { once: true, margin: '-50px' });

  return (
    <section id="education" className="py-24 relative bg-grid-dense">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 text-glow-cyan font-tech text-sm tracking-widest uppercase mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">EDUCATION &</span>{' '}
            <span className="text-gradient text-glow">CREDENTIALS</span>
          </h2>
          <div className="divider-hud max-w-xs mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <motion.div
            ref={educationRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isEducationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-glow-cyan" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-glow rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-display font-semibold text-glow-cyan">
                        {edu.degree}
                      </h4>
                      <p className="text-foreground font-tech">{edu.school}</p>
                      {edu.department && (
                        <p className="text-sm text-muted-foreground font-body">{edu.department}</p>
                      )}
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-tech ${
                      edu.status === 'Ongoing' 
                        ? 'bg-hud-green/20 text-hud-green' 
                        : 'bg-glow-cyan/20 text-glow-cyan'
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-tech mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                    <span>{edu.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((item, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded text-xs font-tech bg-muted text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Awards Column */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.div
              ref={certsRef}
              initial={{ opacity: 0, x: 30 }}
              animate={isCertsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-glow-cyan" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isCertsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card-glow rounded-lg p-4 flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-glow-cyan" />
                    <div className="flex-1">
                      <h4 className="font-tech font-semibold text-foreground">{cert.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.category}</span>
                      </div>
                      {cert.highlight && (
                        <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-tech bg-warning-orange/20 text-warning-orange">
                          {cert.highlight}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              ref={awardsRef}
              initial={{ opacity: 0, x: 30 }}
              animate={isAwardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-warning-orange/10 border border-warning-orange/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-warning-orange" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">Recognitions</h3>
              </div>

              <div className="card-glow rounded-xl p-6">
                <ul className="space-y-3">
                  {awards.map((award, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isAwardsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-warning-orange mt-2 flex-shrink-0" />
                      <span>{award}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

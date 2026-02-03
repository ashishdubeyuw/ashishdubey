import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Rocket, Cpu, Gauge, Shield, Zap } from 'lucide-react';

const projects = [
  {
    icon: Rocket,
    title: 'eVTOL Flight Control',
    company: 'Honeywell',
    description: 'Architected safety-critical flight control software for electric vertical takeoff and landing aircraft programs.',
    tech: ['Embedded C', 'A429', 'RS422', 'DEOS RTOS'],
    impact: 'Near-perfect accuracy in component development',
    category: 'UAM',
  },
  {
    icon: Plane,
    title: 'Boeing 787 Flight Systems',
    company: 'Honeywell/Alten',
    description: 'Developed flight control systems software modules achieving industry-leading defect density of 0.001.',
    tech: ['Embedded C', 'GHS RTOS', 'DO-178C'],
    impact: '0.001 defect density',
    category: 'Commercial Aviation',
  },
  {
    icon: Cpu,
    title: 'FADEC Engine Control',
    company: 'Honeywell',
    description: 'Created Full Authority Digital Engine Control systems for multiple aircraft programs with exceptional reliability.',
    tech: ['Embedded C', 'Real-time Systems', 'Safety-Critical'],
    impact: '0.002% defect density',
    category: 'Propulsion',
  },
  {
    icon: Gauge,
    title: 'HIL Test Automation',
    company: 'Honeywell',
    description: 'Automated hardware-in-loop test lab using Python and LabVIEW, revolutionizing testing efficiency.',
    tech: ['Python', 'LabVIEW', 'C#', 'Automation'],
    impact: '$2M+ savings',
    category: 'Test Systems',
  },
  {
    icon: Shield,
    title: 'Wing Ice Protection',
    company: 'Boeing/Alten',
    description: 'Designed and developed Wing Ice Protection Systems ensuring aircraft safety in adverse conditions.',
    tech: ['Embedded C', 'Safety-Critical', 'DO-178C'],
    impact: '0.02% defect density',
    category: 'Safety Systems',
  },
  {
    icon: Zap,
    title: 'Landing Gear Control',
    company: 'Honeywell',
    description: 'Developed critical landing gear control systems for commercial aircraft with high reliability standards.',
    tech: ['Embedded C', 'Real-time', 'Safety-Critical'],
    impact: 'Level-A certification',
    category: 'Mechanical Systems',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="card-glow rounded-xl overflow-hidden group"
    >
      {/* Header with gradient */}
      <div className="relative p-6 border-b border-glow-cyan/20">
        <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan/5 to-glow-blue/5" />
        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-glow-cyan/10 border border-glow-cyan/30 flex items-center justify-center group-hover:bg-glow-cyan/20 transition-colors">
            <Icon className="w-6 h-6 text-glow-cyan" />
          </div>
          <div className="flex-1">
            <span className="text-xs font-tech text-glow-cyan uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-lg font-display font-semibold text-foreground mt-1">
              {project.title}
            </h3>
            <span className="text-sm font-tech text-muted-foreground">
              {project.company}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 rounded text-xs font-tech bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Impact metric */}
        <div className="flex items-center gap-2 pt-4 border-t border-border">
          <div className="w-2 h-2 rounded-full bg-hud-green animate-pulse" />
          <span className="text-sm font-tech text-hud-green">{project.impact}</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/5 text-glow-cyan font-tech text-sm tracking-widest uppercase mb-4">
            Engineering Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">FEATURED</span>{' '}
            <span className="text-gradient text-glow">PROJECTS</span>
          </h2>
          <div className="divider-hud max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Critical aerospace systems powering the world's most advanced aircraft
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

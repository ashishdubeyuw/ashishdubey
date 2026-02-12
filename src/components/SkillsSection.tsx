import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Code, Wrench, Shield, Rocket, Database } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: 'Hardware Platforms',
    skills: ['PPC 750', 'MIPS RM7965', 'ARM A53', 'R5 Cortex', 'Xilinx Zynq'],
    color: 'from-gray-300 to-gray-500',
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Embedded C', 'Python', 'C#', 'SQL', 'MATLAB-Simulink'],
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['DEOS', 'Green Hills RTOS', 'VxWorks', 'LabVIEW', 'EASE Simulation'],
    color: 'from-gray-300 to-gray-500',
  },
  {
    icon: Shield,
    title: 'Standards & Protocols',
    skills: ['DO-178C', 'DO-254', 'A429', 'CAN', 'A664', 'RS422'],
    color: 'from-gray-400 to-gray-600',
  },
  {
    icon: Database,
    title: 'Python Libraries',
    skills: ['Pandas', 'NumPy', 'PyTorch', 'Scikit-learn', 'Matplotlib'],
    color: 'from-gray-300 to-gray-500',
  },
  {
    icon: Rocket,
    title: 'Leadership',
    skills: ['Project Planning', 'Agile/CI', 'Risk Management', 'Team Mentorship', 'Client Relations'],
    color: 'from-gray-400 to-gray-600',
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-glow rounded-xl p-6 group hover:scale-105 transition-transform duration-300"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} p-0.5 mb-4`}>
        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
          <Icon className="w-7 h-7 text-glow-cyan" />
        </div>
      </div>

      <h3 className="text-lg font-display font-semibold text-foreground mb-4">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
            className="px-3 py-1 rounded-full text-xs font-tech bg-glow-cyan/10 text-glow-cyan border border-glow-cyan/20 hover:bg-glow-cyan/20 hover:border-glow-cyan/40 transition-all duration-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="skills" className="py-24 relative bg-grid">
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
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">CORE</span>{' '}
            <span className="text-gradient text-glow">COMPETENCIES</span>
          </h2>
          <div className="divider-hud max-w-xs mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

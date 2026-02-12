import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Eye, Brain, Target, Code, Cpu, Layers, Globe, Mic, Camera, Search } from 'lucide-react';

const academiaProjects = [
  {
    icon: Eye,
    title: 'VortexEye',
    subtitle: 'AI-Powered Indoor-Outdoor Navigation PWA',
    description: 'Progressive Web App combining camera-based computer vision for indoor guidance with GPS + OSRM routing for outdoor navigation. Delivers seamless end-to-end journeys for 285M+ visually impaired users on any smartphone.',
    problem: 'GPS fails indoors, creating a last-mile navigation gap for visually impaired users.',
    tech: ['JavaScript', 'Python', 'COCO-SSD', 'OSRM', 'Web Speech API', 'IMU', 'OpenStreetMap'],
    stats: [
      { label: 'Lines of Code', value: '3,200+' },
      { label: 'JS Modules', value: '7' },
      { label: 'Target Users', value: '285M+' },
      { label: 'Languages', value: '4' },
    ],
    highlights: [
      'Adaptive GPS/Camera mode switching with accuracy thresholds',
      'IMU dead reckoning with accelerometer step detection',
      'Real-time COCO-SSD object detection for doors, exits, stairs',
      'FOV-based direction with degree-precision turning instructions',
      'Voice interface with NLP intent parsing for hands-free use',
      'Production-grade 1,000-entry ring buffer logging system',
    ],
    category: 'Computer Vision • PWA',
  },
  {
    icon: Brain,
    title: 'AI Agent SensorFusion',
    subtitle: 'Multi-Sensor Desktop AI Assistant with Emotion Recognition',
    description: 'Multi-modal AI agent that fuses camera, microphone, and screen capture for context-aware assistance. Features DeepFace integration for real-time emotion detection and multi-LLM orchestration.',
    problem: 'Traditional AI assistants are context-blind — they lack emotional intelligence and situational awareness.',
    tech: ['Python', 'DeepFace', 'OpenCV', 'Gemini', 'Ollama', 'llama.cpp', 'Pydantic', 'Threading'],
    stats: [
      { label: 'Lines of Code', value: '1,700+' },
      { label: 'Python Modules', value: '6' },
      { label: 'LLM Providers', value: '3+' },
      { label: 'Sensor Inputs', value: 'Multi' },
    ],
    highlights: [
      'Real-time emotion + age detection via DeepFace with cyberpunk HUD overlay',
      'Multi-LLM orchestration: Gemini, Ollama, llama.cpp with dynamic provider routing',
      'Producer-consumer threading pattern for smooth real-time GUI updates',
      'Structured output via Pydantic for reliable macOS automation',
      'Local-first architecture with GGUF models (Phi-3) for privacy',
      'Thread-safe queues for async sensor fusion processing',
    ],
    category: 'AI/ML • Sensor Fusion',
  },
  {
    icon: Target,
    title: 'JobGenieAI',
    subtitle: 'AI-Powered Job Search with RAG & Agentic Workflows',
    description: 'Full-stack RAG pipeline that searches 5+ job sources with skill-aware filtering. Features LlamaIndex vector search for resume-to-job matching and LangChain ReAct agent for autonomous cover letter generation.',
    problem: 'Job search is manual and time-consuming — generic applications fail to highlight relevant experience.',
    tech: ['Python', 'LlamaIndex', 'LangChain', 'Gemini', 'Streamlit', 'APScheduler', 'Twilio', 'WordPress'],
    stats: [
      { label: 'Lines of Code', value: '2,600+' },
      { label: 'Modules', value: '10' },
      { label: 'Job Sources', value: '5+' },
      { label: 'APIs', value: '15+' },
    ],
    highlights: [
      'Hybrid matching: 50% semantic similarity + 30% skills + 20% experience years',
      'LlamaIndex VectorStoreIndex with Gemini embeddings for semantic search',
      'LangChain ReAct agent with custom tools for cover letter generation',
      'APScheduler for recurring job searches with email/WhatsApp notifications',
      'Glassmorphism Streamlit frontend with session state management (1,100 LOC)',
      'WordPress plugin (197 LOC) with shortcode system for easy embedding',
    ],
    category: 'RAG • Agentic AI',
  },
];

const AcademiaCard = ({ project, index }: { project: typeof academiaProjects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="card-glow rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="relative p-6 border-b border-accent/20">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent/3" />
        <div className="relative">
          <div className="flex items-start gap-4 mb-3">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-tech text-accent uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-display font-bold text-foreground mt-1">
                {project.title}
              </h3>
              <p className="text-sm font-tech text-muted-foreground">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-4 border-b border-border">
        {project.stats.map((stat, i) => (
          <div key={i} className="p-3 text-center border-r last:border-r-0 border-border">
            <div className="text-lg font-display font-bold text-accent">{stat.value}</div>
            <div className="text-[10px] font-tech text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Problem statement */}
        <div className="mb-4 p-3 rounded-lg bg-muted/50 border border-border">
          <span className="text-xs font-tech text-accent uppercase tracking-wider">Problem</span>
          <p className="text-sm font-body text-muted-foreground mt-1">{project.problem}</p>
        </div>

        {/* Technical highlights */}
        <div className="mb-4">
          <span className="text-xs font-tech text-accent uppercase tracking-wider mb-2 block">Key Technical Achievements</span>
          <ul className="space-y-1.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded text-xs font-tech bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const AcademiaSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="academia" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent font-tech text-sm tracking-widest uppercase mb-4">
            AI/ML Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">ACADEMIA</span>{' '}
            <span className="text-gradient text-glow">PROJECTS</span>
          </h2>
          <div className="divider-hud max-w-xs mx-auto mb-4" />
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Production-grade AI/ML applications spanning Computer Vision, NLP, RAG & Multi-Agent Systems — 7,500+ LOC across 23+ modules
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {academiaProjects.map((project, index) => (
            <AcademiaCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademiaSection;

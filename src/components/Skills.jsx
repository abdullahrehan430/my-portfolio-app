import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    color: 'cyan',
    skills: ['React JS', 'React Native', 'JavaScript', 'TypeScript', 'Redux'],
  },
  {
    title: 'Backend',
    color: 'magenta',
    skills: ['Node.js', 'Laravel', 'PHP', 'REST APIs', 'Firebase'],
  },
  {
    title: 'Database',
    color: 'yellow',
    skills: ['MongoDB', 'MySQL', 'Firebase Realtime DB'],
  },
  {
    title: 'Tools & Workflow',
    color: 'cyan',
    skills: ['Git & CI/CD', 'VS Code', 'Figma', 'UI/UX Collaboration'],
  },
];

const colorMap = {
  cyan: {
    title: 'text-neon-cyan text-glow-cyan',
    border: 'border-neon-cyan/20 hover:border-neon-cyan/60',
    glow: '0 0 15px rgba(0, 255, 255, 0.15), inset 0 0 15px rgba(0, 255, 255, 0.03)',
    hoverGlow: '0 0 25px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.05)',
    chip: 'text-neon-cyan border-neon-cyan/20 hover:bg-neon-cyan/10',
    dot: 'bg-neon-cyan',
  },
  magenta: {
    title: 'text-neon-magenta',
    border: 'border-neon-magenta/20 hover:border-neon-magenta/60',
    glow: '0 0 15px rgba(255, 0, 255, 0.15), inset 0 0 15px rgba(255, 0, 255, 0.03)',
    hoverGlow: '0 0 25px rgba(255, 0, 255, 0.3), inset 0 0 20px rgba(255, 0, 255, 0.05)',
    chip: 'text-neon-magenta border-neon-magenta/20 hover:bg-neon-magenta/10',
    dot: 'bg-neon-magenta',
  },
  yellow: {
    title: 'text-neon-yellow',
    border: 'border-neon-yellow/20 hover:border-neon-yellow/60',
    glow: '0 0 15px rgba(250, 255, 0, 0.1), inset 0 0 15px rgba(250, 255, 0, 0.03)',
    hoverGlow: '0 0 25px rgba(250, 255, 0, 0.2), inset 0 0 20px rgba(250, 255, 0, 0.05)',
    chip: 'text-neon-yellow border-neon-yellow/20 hover:bg-neon-yellow/10',
    dot: 'bg-neon-yellow',
  },
};

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="skills" className="py-14 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          My <span className="text-neon-cyan text-glow-cyan">Skills</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-neon-cyan mx-auto mb-16 neon-glow-cyan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl border ${colors.border} bg-bg-surface/50 backdrop-blur-sm p-6 transition-all duration-300 group`}
                style={{ boxShadow: colors.glow }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = colors.hoverGlow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = colors.glow;
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} style={{ boxShadow: colors.glow }} />
                  <h3 className={`font-display text-lg font-semibold ${colors.title}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3.5 py-1.5 font-body text-xs uppercase tracking-wider border rounded-full transition-all duration-200 cursor-default ${colors.chip}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React Native', level: 95 },
  { name: 'React JS', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Laravel / PHP', level: 70 },
  { name: 'REST APIs', level: 85 },
  { name: 'Git & CI/CD', level: 80 },
  { name: 'UI/UX Collaboration', level: 85 },
];

const techBadges = ['React Native', 'React JS', 'Node.js', 'MongoDB', 'Laravel', 'PHP', 'JavaScript', 'TypeScript', 'Redux', 'Firebase'];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
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

        {/* Skill bars */}
        <div className="space-y-6 mb-16">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-body text-sm text-text-primary">{skill.name}</span>
                <span className="font-display text-sm text-neon-cyan">{skill.level}%</span>
              </div>
              <div className="h-2 bg-bg-surface rounded-full overflow-hidden border border-neon-cyan/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-magenta"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.2)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 font-body text-xs uppercase tracking-wider text-neon-cyan border border-neon-cyan/30 rounded-full hover:bg-neon-cyan/10 hover:neon-glow-cyan transition-all duration-200"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

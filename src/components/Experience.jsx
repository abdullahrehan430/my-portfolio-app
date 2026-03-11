import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experience = [
  {
    company: 'Taiftec',
    role: 'Senior React Native Developer',
    period: '2022 — Present',
    type: 'Full Time',
    current: true,
    description:
      'Leading mobile development initiatives, architecting scalable React Native applications, and mentoring junior developers.',
  },
  {
    company: 'FlashLead',
    role: 'React Native / React JS Developer',
    period: '2020 — 2024',
    type: 'Full Time',
    current: false,
    description:
      'Built and maintained the FlashLead CRM platform across web (React JS) and mobile (React Native). Contributed to Laravel backend integrations.',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="experience" className="py-14 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Work <span className="text-neon-cyan text-glow-cyan">Experience</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-neon-cyan mx-auto mb-16 neon-glow-cyan"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neon-cyan/30 origin-top"
            style={{ boxShadow: '0 0 10px rgba(0, 255, 255, 0.3)' }}
          />

          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                className={`relative mb-12 md:w-1/2 pl-12 md:pl-0 ${
                  isLeft ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-2 left-2.5 md:left-auto w-4 h-4 rounded-full border-2 border-neon-cyan bg-bg-primary z-10 ${
                    exp.current ? 'pulse-dot text-neon-cyan' : ''
                  } ${isLeft ? 'md:-right-2' : 'md:-left-2'}`}
                >
                  {exp.current && (
                    <div className="absolute inset-1 rounded-full bg-neon-cyan" />
                  )}
                </div>

                <div className="glass rounded-xl p-6 hover:neon-glow-cyan transition-all duration-300">
                  <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                    <Briefcase size={16} className="text-neon-cyan" />
                    <span className="font-display text-sm text-neon-cyan">{exp.company}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-text-primary mb-2">
                    {exp.role}
                  </h3>

                  <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'md:justify-end' : ''}`}>
                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-display text-neon-magenta border border-neon-magenta/30 rounded-full">
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-display text-neon-yellow border border-neon-yellow/30 rounded-full">
                      {exp.type}
                    </span>
                    {exp.current && (
                      <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-display text-green-400 border border-green-400/30 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

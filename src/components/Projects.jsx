import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star } from 'lucide-react';
import projects from '../data/projects.json';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-24 px-6 circuit-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          My <span className="text-neon-cyan text-glow-cyan">Projects</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-neon-cyan mx-auto mb-16 neon-glow-cyan"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="group glass rounded-xl overflow-hidden hover:neon-glow-cyan transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-neon-cyan/10 via-bg-surface to-neon-magenta/10 flex items-center justify-center">
                <span className="font-display text-2xl text-text-muted/30">{project.title}</span>
                {project.featured && (
                  <span className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-neon-yellow/10 border border-neon-yellow/50 text-neon-yellow font-display text-[10px] uppercase tracking-wider rounded-full">
                    <Star size={12} />
                    Featured
                  </span>
                )}
                {/* Diagonal gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-bg-primary/80" />
              </div>

              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-wider font-display text-neon-magenta border border-neon-magenta/30 rounded-full mb-3">
                  {project.category}
                </span>

                <h3 className="font-display text-xl font-bold text-text-primary mb-2 group-hover:text-neon-cyan transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="font-body text-sm text-text-muted mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider font-body text-neon-cyan/70 bg-neon-cyan/5 border border-neon-cyan/15 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-5">
                  {project.highlights.map((h, idx) => (
                    <li key={idx} className="font-body text-xs text-text-muted flex items-start gap-2">
                      <span className="text-neon-cyan mt-0.5">&#9656;</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 border border-neon-cyan text-neon-cyan font-display text-xs uppercase tracking-wider rounded hover:bg-neon-cyan hover:text-bg-primary transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                    View Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

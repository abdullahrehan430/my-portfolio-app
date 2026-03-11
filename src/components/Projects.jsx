import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Star, ChevronLeft, ChevronRight, X, Images, Smartphone } from 'lucide-react';
import projects from '../data/projects.json';

/* ─── Fullscreen Lightbox Carousel ─── */
function LightboxCarousel({ images, title, onClose }) {
  const [current, setCurrent] = useState(0);
  const len = images.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % len), [len]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + len) % len), [len]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, next, prev]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/95 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
      >
        <X size={20} />
      </button>

      {/* Title */}
      <div className="absolute top-6 left-6 z-10">
        <p className="font-display text-sm text-neon-cyan">{title}</p>
        <p className="font-body text-xs text-text-muted">{current + 1} / {len}</p>
      </div>

      {/* Image */}
      <div
        className="relative w-full h-full flex items-center justify-center px-16 py-20"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            style={{ filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.15))' }}
          />
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {len > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      {len > 1 && (
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 glass rounded-full"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-10 h-10 rounded overflow-hidden border-2 transition-all duration-200 ${
                i === current ? 'border-neon-cyan neon-glow-cyan' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}

/* ─── Project Card ─── */
function ProjectCard({ project, index, inView }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasImages = project.images && project.images.length > 0;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
        className="group glass rounded-xl overflow-hidden hover:neon-glow-cyan transition-all duration-300 hover:-translate-y-1 flex flex-col"
      >
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan" />

        <div className="p-6 flex flex-col flex-1">
          {/* Header row: category + featured */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 text-[10px] uppercase tracking-wider font-display text-neon-magenta border border-neon-magenta/30 rounded-full">
              {project.category}
            </span>
            <div className="flex items-center gap-2">
              {project.featured && (
                <span className="flex items-center gap-1 px-3 py-1 bg-neon-yellow/10 border border-neon-yellow/50 text-neon-yellow font-display text-[10px] uppercase tracking-wider rounded-full">
                  <Star size={10} />
                  Featured
                </span>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-neon-cyan transition-colors duration-200">
            {project.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-text-muted mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-body text-neon-cyan/80 bg-neon-cyan/5 border border-neon-cyan/15 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <ul className="space-y-2 mb-6 flex-1">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="font-body text-xs text-text-muted flex items-start gap-2 leading-relaxed">
                <span className="text-neon-cyan mt-0.5 shrink-0">&#9656;</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Image preview strip — click to open lightbox */}
          {hasImages && (
            <button
              onClick={() => setLightboxOpen(true)}
              className="mb-5 flex items-center gap-3 p-3 rounded-lg border border-neon-cyan/10 bg-neon-cyan/5 hover:border-neon-cyan/30 hover:bg-neon-cyan/10 transition-all duration-200 group/preview w-full"
            >
              <div className="flex -space-x-2">
                {project.images.slice(0, 4).map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-md overflow-hidden border-2 border-bg-surface shadow-sm"
                    style={{ zIndex: 4 - i }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Images size={14} className="text-neon-cyan" />
                <span className="font-body text-xs text-neon-cyan group-hover/preview:text-glow-cyan">
                  View {project.images.length} screenshots
                </span>
              </div>
            </button>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
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
            {project.androidUrl && (
              <a
                href={project.androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-neon-magenta/50 text-neon-magenta font-display text-xs uppercase tracking-wider rounded hover:bg-neon-magenta hover:text-bg-primary transition-all duration-200"
              >
                <Smartphone size={14} />
                Android
              </a>
            )}
            {project.iosUrl && (
              <a
                href={project.iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-text-primary/30 text-text-primary font-display text-xs uppercase tracking-wider rounded hover:bg-text-primary hover:text-bg-primary transition-all duration-200"
              >
                <Smartphone size={14} />
                iOS
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && hasImages && (
          <LightboxCarousel
            images={project.images}
            title={project.title}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Projects Section ─── */
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
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

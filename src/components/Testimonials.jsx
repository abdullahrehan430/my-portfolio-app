import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Client A',
    role: 'Product Manager',
    company: 'Tech Startup',
    text: 'Abdullah delivered our MVP in record time. His attention to detail and clean code architecture saved us months of technical debt.',
  },
  {
    name: 'Client B',
    role: 'CEO',
    company: 'E-Commerce Venture',
    text: 'Working with Abdullah was seamless. He understood our vision immediately and translated it into a beautiful, functional mobile app.',
  },
  {
    name: 'Client C',
    role: 'CTO',
    company: 'SaaS Platform',
    text: 'Exceptional React Native expertise. Our app performance improved dramatically after Abdullah joined the team.',
  },
];

function getInitials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="testimonials" className="py-14 px-6 circuit-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Client <span className="text-neon-cyan text-glow-cyan">Testimonials</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-neon-cyan mx-auto mb-16 neon-glow-cyan"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              className="glass rounded-xl p-6 border-t-2 border-t-neon-cyan hover:neon-glow-cyan transition-all duration-300"
            >
              <Quote className="text-neon-cyan mb-4" size={28} />

              <p className="font-body text-sm text-text-muted leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                {/* Hexagonal avatar with initials */}
                <div
                  className="w-12 h-12 bg-gradient-to-br from-neon-cyan/30 to-neon-magenta/30 flex items-center justify-center shrink-0"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <span className="font-display text-xs font-bold text-neon-cyan">
                    {getInitials(t.name)}
                  </span>
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-text-primary">{t.name}</p>
                  <p className="font-body text-xs text-text-muted">
                    {t.role} @ {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

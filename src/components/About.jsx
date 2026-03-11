import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Rocket, Clock } from 'lucide-react';

const stats = [
  { icon: Code, value: '5+', label: 'Years Experience' },
  { icon: Rocket, value: '2+', label: 'MVPs Shipped' },
  { icon: Clock, value: '4', label: 'Weeks to MVP' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-14 px-6 circuit-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          About <span className="text-neon-cyan text-glow-cyan">Me</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-neon-cyan mx-auto mb-16 neon-glow-cyan"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hexagonal avatar placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div
                className="w-64 h-64 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 flex items-center justify-center border-2 border-neon-cyan/30 neon-glow-cyan"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="font-display text-5xl font-bold text-neon-cyan text-glow-cyan">AR</span>
              </div>
              {/* Decorative ring */}
              <div
                className="absolute inset-[-8px] border border-neon-magenta/20"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-body text-text-primary leading-relaxed mb-6">
              I'm an experienced React Native developer with <span className="text-neon-cyan">5+ years</span> in the industry.
              I specialize in building high-performance mobile and web applications — from concept to deployed product.
            </p>
            <p className="font-body text-text-muted leading-relaxed mb-8">
              Got an idea? I can ship your MVP in <span className="text-neon-yellow">4 weeks</span>.
              My tech stack spans React Native, React JS, Node.js, and MongoDB — giving me the full-stack
              capabilities to bring any project to life independently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="glass rounded-lg p-4 text-center"
                >
                  <Icon className="text-neon-cyan mx-auto mb-2" size={24} />
                  <p className="font-display text-2xl font-bold text-neon-cyan text-glow-cyan">{value}</p>
                  <p className="font-body text-xs text-text-muted mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';

const floatingShapes = [
  { size: 60, top: '15%', left: '10%', delay: 0, color: 'cyan' },
  { size: 40, top: '70%', left: '85%', delay: 1, color: 'magenta' },
  { size: 80, top: '80%', left: '5%', delay: 2, color: 'cyan' },
  { size: 30, top: '20%', left: '90%', delay: 0.5, color: 'magenta' },
  { size: 50, top: '50%', left: '75%', delay: 1.5, color: 'cyan' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-bg scanlines"
    >
      {/* Floating neon shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute border ${
            shape.color === 'cyan' ? 'border-neon-cyan/30' : 'border-neon-magenta/30'
          } rounded-lg rotate-45`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [45, 90, 45],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-neon-cyan font-body text-sm uppercase tracking-[0.3em] mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-text-primary glitch-text mb-4 leading-tight"
        >
          Muhammad Abdullah
          <br />
          <span className="text-neon-cyan">Rehan</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center mb-6"
        >
          <p className="typewriter font-body text-lg sm:text-xl text-neon-magenta inline-block">
            Senior Mobile App Engineer
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="font-body text-text-muted text-base sm:text-lg mb-10"
        >
          Turning Ideas into MVPs in 4 Weeks
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 bg-neon-cyan text-bg-primary font-display text-sm uppercase tracking-wider rounded font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-200"
          >
            <ExternalLink size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-neon-magenta text-neon-magenta font-display text-sm uppercase tracking-wider rounded font-bold hover:bg-neon-magenta hover:text-bg-primary transition-all duration-200"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-neon-cyan/50" size={24} />
      </motion.div>
    </section>
  );
}

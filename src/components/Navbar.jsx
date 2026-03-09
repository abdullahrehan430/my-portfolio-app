import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display text-2xl font-bold text-neon-cyan text-glow-cyan">
          &lt;AR/&gt;
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`font-body text-sm uppercase tracking-wider transition-all duration-200 hover:text-neon-cyan ${
                activeSection === href.slice(1)
                  ? 'text-neon-cyan text-glow-cyan'
                  : 'text-text-muted'
              }`}
            >
              {label}
              {activeSection === href.slice(1) && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-0.5 bg-neon-cyan mt-1 neon-glow-cyan"
                />
              )}
            </a>
          ))}
          <a
            href="https://www.upwork.com/freelancers/~017a325636799ac701?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 border border-neon-cyan text-neon-cyan font-display text-sm uppercase tracking-wider rounded hover:bg-neon-cyan hover:text-bg-primary transition-all duration-200 neon-glow-cyan"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neon-cyan"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-72 glass z-50 flex flex-col pt-20 px-8 gap-6 md:hidden"
          >
            <button
              className="absolute top-5 right-5 text-neon-cyan"
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} />
            </button>
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`font-body text-lg uppercase tracking-wider transition-all duration-200 ${
                  activeSection === href.slice(1)
                    ? 'text-neon-cyan text-glow-cyan'
                    : 'text-text-muted hover:text-neon-cyan'
                }`}
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.upwork.com/freelancers/~017a325636799ac701?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-5 py-3 border border-neon-cyan text-neon-cyan font-display text-sm uppercase tracking-wider rounded text-center hover:bg-neon-cyan hover:text-bg-primary transition-all duration-200"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function NeonCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        className="fixed w-3 h-3 bg-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
          boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
        }}
      />
      {/* Outer ring */}
      <div
        className="fixed w-8 h-8 border border-neon-cyan/50 rounded-full pointer-events-none z-[9999] transition-all duration-100 ease-out"
        style={{
          left: pos.x - 16,
          top: pos.y - 16,
        }}
      />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <NeonCursor />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

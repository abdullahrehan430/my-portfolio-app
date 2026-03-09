import { Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Mail, href: 'mailto:abdullahrehan243@gmail.com', label: 'Email' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neon-cyan/10 bg-bg-surface/50 circuit-bg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Logo + tagline */}
        <div className="text-center mb-8">
          <a href="#hero" className="font-display text-2xl font-bold text-neon-cyan text-glow-cyan">
            &lt;AR/&gt;
          </a>
          <p className="font-body text-sm text-text-muted mt-2">
            Turning Ideas into MVPs in 4 Weeks
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-body text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 rounded-lg border border-neon-cyan/20 flex items-center justify-center text-text-muted hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-body text-xs text-text-muted text-center">
          &copy; {new Date().getFullYear()} Muhammad Abdullah Rehan.
        </p>
      </div>
    </footer>
  );
}

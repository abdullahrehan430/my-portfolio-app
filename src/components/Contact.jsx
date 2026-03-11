import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-14 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl sm:text-4xl font-bold text-center mb-4"
        >
          Get In <span className="text-neon-cyan text-glow-cyan">Touch</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-0.5 bg-neon-cyan mx-auto mb-16 neon-glow-cyan"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {['name', 'email'].map((field) => (
              <div key={field}>
                <label className="font-body text-xs uppercase tracking-wider text-text-muted mb-2 block">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  required
                  value={form[field]}
                  onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                  className="w-full bg-transparent border-b-2 border-text-muted/30 py-3 font-body text-text-primary outline-none focus:border-neon-cyan transition-colors duration-300 placeholder:text-text-muted/30"
                  placeholder={`Your ${field}`}
                />
              </div>
            ))}

            <div>
              <label className="font-body text-xs uppercase tracking-wider text-text-muted mb-2 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-text-muted/30 py-3 font-body text-text-primary outline-none focus:border-neon-cyan transition-colors duration-300 placeholder:text-text-muted/30 resize-none"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neon-cyan text-bg-primary font-display text-sm uppercase tracking-wider rounded font-bold hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-200"
            >
              <Send size={16} />
              Send Message
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-neon-cyan font-body text-sm neon-glow-cyan p-3 glass rounded-lg"
              >
                <CheckCircle size={18} />
                Message sent successfully!
              </motion.div>
            )}
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Let's work together
              </h3>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-8">
                Have a project in mind? I'm currently available for freelance work and full-time
                opportunities. Let's discuss how I can help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:abdullahrehan243@gmail.com"
                className="flex items-center gap-4 glass rounded-lg p-4 hover:neon-glow-cyan transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                  <Mail size={20} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">Email</p>
                  <p className="font-body text-sm text-text-primary group-hover:text-neon-cyan transition-colors">
                    abdullahrehan243@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+923105599915"
                className="flex items-center gap-4 glass rounded-lg p-4 hover:neon-glow-cyan transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 flex items-center justify-center">
                  <Phone size={20} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider">Phone</p>
                  <p className="font-body text-sm text-text-primary group-hover:text-neon-cyan transition-colors">
                    +92 310 559 9915
                  </p>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="glass rounded-lg p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-400 pulse-dot text-green-400" />
              <span className="font-body text-sm text-text-primary">
                Available for freelance projects
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

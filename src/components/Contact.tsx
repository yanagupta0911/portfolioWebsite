import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import SectionHeading from './SectionHeading';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = 'idle' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // No backend configured — use mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedinDisplay,
      href: personalInfo.linkedin,
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-palette-indigo/10 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-palette-cyan/10 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="08 — Contact"
          title={
            <>
              Let's build something <span className="text-gradient-cyan-indigo">useful.</span>
            </>
          }
          subtitle="Have a project, opportunity, or idea? I'd love to connect."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactCards.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.label === 'LinkedIn' ? '_blank' : undefined}
                rel={card.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-5 rounded-2xl card-dark light:card-light hover:border-palette-cyan/30 transition-colors duration-300 group"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-palette-electric/20 to-palette-indigo/20 flex items-center justify-center group-hover:from-palette-cyan/20 group-hover:to-palette-indigo/20 transition-all duration-300">
                  <card.icon className="w-5 h-5 text-palette-cyan" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono uppercase tracking-wider text-gray-500">
                    {card.label}
                  </div>
                  <div className="text-sm font-medium truncate group-hover:text-palette-cyan transition-colors">
                    {card.value}
                  </div>
                </div>
              </motion.a>
            ))}

            <div className="p-5 rounded-2xl bg-palette-electric/5 border border-palette-cyan/10">
              <p className="text-sm text-gray-400 dark:text-gray-400 light:text-gray-600">
                Based in <span className="text-palette-cyan font-medium">{personalInfo.location}</span>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 lg:p-8 card-dark light:card-light gradient-border space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-palette-nearblack/40 light:bg-white/60 border ${
                    errors.name ? 'border-red-400/50' : 'border-palette-cyan/15'
                  } focus:border-palette-cyan/50 focus:outline-none focus:ring-2 focus:ring-palette-cyan/20 text-sm transition-all`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-palette-nearblack/40 light:bg-white/60 border ${
                    errors.email ? 'border-red-400/50' : 'border-palette-cyan/15'
                  } focus:border-palette-cyan/50 focus:outline-none focus:ring-2 focus:ring-palette-cyan/20 text-sm transition-all`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl bg-palette-nearblack/40 light:bg-white/60 border ${
                    errors.message ? 'border-red-400/50' : 'border-palette-cyan/15'
                  } focus:border-palette-cyan/50 focus:outline-none focus:ring-2 focus:ring-palette-cyan/20 text-sm transition-all resize-none`}
                  placeholder="Tell me about your project or opportunity..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-palette-indigo to-palette-electric text-white font-medium text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform glow-electric"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              <p className="text-xs text-center text-gray-500">
                Opens your email client — no messages are sent from this form directly.
              </p>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-palette-cyan/10 border border-palette-cyan/20 text-sm text-palette-cyan"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    Your email client should open with the message pre-filled.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

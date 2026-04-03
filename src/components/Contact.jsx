import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Github, Linkedin, MessageSquare,
  Send, Download, CheckCircle2, AlertCircle, Loader2
} from 'lucide-react';

// ─── EmailJS Config ─────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and sign up (free)
// 2. Create an Email Service (Gmail works) → copy the Service ID below
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{message}}
//    → copy the Template ID below
// 4. Go to Account → copy your Public Key below
const EMAILJS_SERVICE_ID  = 'service_zwypicx';   // Your new service ID
const EMAILJS_TEMPLATE_ID = 'template_cssp0k9';  // From your message
const EMAILJS_PUBLIC_KEY  = 'kW1f0JD-EG6f11dj2';  // From your message
// ────────────────────────────────────────────────────────────────────────────

// Initialize EmailJS with your Public Key
emailjs.init(EMAILJS_PUBLIC_KEY);
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bt23cs006@nitmz.ac.in',
    href: 'mailto:bt23cs006@nitmz.ac.in',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-8874724927',
    href: 'tel:+918874724927',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'NIT Mizoram, Aizawl, India',
    href: null,
  },
];

const socialLinks = [
  { icon: Github,   href: 'https://github.com/priyanshu-agrawal-cse',               label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/priyanshu-agrawal-0924aa319', label: 'LinkedIn' },
  { icon: Download, href: '/resume.pdf', label: 'Resume', download: 'Priyanshu_Resume.pdf' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Check if EmailJS is still unconfigured
    if (
      EMAILJS_SERVICE_ID  === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY  === 'YOUR_PUBLIC_KEY'
    ) {
      // Fallback: open default mail client
      const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
      const body    = encodeURIComponent(
        `From: ${formData.name} <${formData.email}>\n\n${formData.message}`
      );
      window.open(`mailto:bt23cs006@nitmz.ac.in?subject=${subject}&body=${body}`, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setStatus('loading');
    try {
      // Add time for the template
      const templateParams = {
        ...formData,
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent pointer-events-none" />

      <div className="section-padding relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Let&apos;s <span className="text-accent">Connect.</span>
          </motion.h2>
          <p className="text-white/45 max-w-xl text-sm leading-relaxed">
            Open to discussing engineering roles, research collaborations, or just a good technical conversation.
            I&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Wrap = item.href ? 'a' : 'div';
                const extras = item.href
                  ? { href: item.href, ...(item.href.startsWith('mailto') || item.href.startsWith('tel') ? {} : { target: '_blank', rel: 'noreferrer' }) }
                  : {};
                return (
                  <Wrap
                    key={item.label}
                    {...extras}
                    className="group flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all"
                  >
                    <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{item.label}</p>
                      <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </Wrap>
                );
              })}
            </div>

            {/* Profiles */}
            <div>
              <p className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-4">Find me online</p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    download={s.download || undefined}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent/30 hover:bg-white/[0.07] text-white/60 hover:text-white text-sm font-medium transition-all group"
                  >
                    <s.icon size={18} className="text-accent" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />

              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent/10 text-accent rounded-lg border border-accent/20">
                  <MessageSquare size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">Send a Message</h3>
              </div>

              {/* Success State */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-accent" />
                    </div>
                    <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                    <p className="text-white/50 text-sm max-w-xs">
                      Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-sm text-accent underline underline-offset-4 hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error Banner */}
              <AnimatePresence>
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm mb-6"
                  >
                    <AlertCircle size={16} className="flex-shrink-0" />
                    <p>
                      Something went wrong. Please email me directly at{' '}
                      <a href="mailto:bt23cs006@nitmz.ac.in" className="underline">
                        bt23cs006@nitmz.ac.in
                      </a>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              {status !== 'success' && (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/35 uppercase tracking-widest">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="w-full h-12 bg-white/[0.04] border border-white/10 focus:border-accent/60 focus:bg-white/[0.07] rounded-xl px-4 text-white text-sm outline-none placeholder:text-white/20 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-white/35 uppercase tracking-widest">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full h-12 bg-white/[0.04] border border-white/10 focus:border-accent/60 focus:bg-white/[0.07] rounded-xl px-4 text-white text-sm outline-none placeholder:text-white/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/35 uppercase tracking-widest">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Priyanshu, I'd like to discuss a Software Engineering opportunity at..."
                      className="w-full bg-white/[0.04] border border-white/10 focus:border-accent/60 focus:bg-white/[0.07] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-white/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-accent hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed text-black font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-white/25 text-center">
                    Your message goes directly to my inbox. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Priyanshu Agrawal · Built for top-tier Engineering Recruiters.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/priyanshu-agrawal-cse" target="_blank" rel="noreferrer" className="text-white/25 hover:text-accent text-xs transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/priyanshu-agrawal-0924aa319" target="_blank" rel="noreferrer" className="text-white/25 hover:text-accent text-xs transition-colors">LinkedIn</a>
            <a href="https://www.hackerrank.com/profile/priyanshuagraw14" target="_blank" rel="noreferrer" className="text-white/25 hover:text-accent text-xs transition-colors">HackerRank</a>
          </div>
        </div>
      </div>
    </section>
  );
}

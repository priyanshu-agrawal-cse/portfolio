import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, ExternalLink, Download, FileText } from 'lucide-react';
import avatar from '../assets/avatar.png';

export default function Hero() {
  return (
    <section className="min-h-[90vh] md:min-h-screen flex flex-col justify-center relative overflow-hidden pt-28 md:pt-32 pb-10 md:pb-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="section-padding">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16">

          {/* Left — Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                Available for Internships &amp; Full-time Roles
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-bold leading-tight mb-4 text-white">
                Hi, I'm <span className="text-emerald-400">Priyanshu</span> 👋
              </h1>

              <p className="text-xl md:text-2xl font-display font-semibold text-white/60 mb-6">
                Software Engineer · Systems &amp; Backend Developer
              </p>

              <p className="text-base text-white/50 leading-relaxed max-w-xl mb-10">
                Computer Science undergraduate at <span className="text-white/80 font-medium">NIT Mizoram</span> (CGPA: <span className="text-emerald-400 font-bold">9.52</span>).
                I design scalable backend systems, real-time communication platforms, and intelligent data pipelines.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-10">
                <a href="#projects" className="btn-primary flex items-center gap-2">
                  View Projects <ExternalLink size={16} />
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
                  Resume <Download size={16} />
                </a>
                <a href="/cv.pdf" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
                  Full CV <FileText size={16} />
                </a>
                <a href="#contact" className="btn-secondary flex items-center gap-2">
                  Contact Me <Mail size={16} />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-5">
                <a href="https://github.com/priyanshu-agrawal-cse" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors">
                  <Github size={18} /> GitHub
                </a>
                <span className="text-white/10">|</span>
                <a href="https://www.linkedin.com/in/priyanshu-agrawal-0924aa319" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <span className="text-white/10">|</span>
                <a href="https://www.hackerrank.com/profile/priyanshuagraw14" target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 text-white/40 hover:text-emerald-400 text-sm font-medium transition-colors">
                  <span className="font-bold text-base leading-none">{'{'}</span>
                  <span className="font-bold text-base leading-none">{'}'}</span>
                  HackerRank
                </a>
                <span className="text-white/10">|</span>
                <a href="mailto:bt23cs006@nitmz.ac.in"
                  className="flex items-center gap-2 text-white/40 hover:text-white text-sm font-medium transition-colors">
                  <Mail size={18} /> Email
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right — Avatar Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-[40px] scale-110 -z-10 animate-pulse" />
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-emerald-500/30 animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-1 rounded-full border border-emerald-500/20" />

            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-2xl relative z-10">
              <img src={avatar} alt="Priyanshu Agrawal" className="w-full h-full object-cover object-top" />
            </div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 bg-secondary border border-white/10 rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2 z-20"
            >
              <span className="text-emerald-400 text-lg font-bold">9.52</span>
              <span className="text-white/40 text-xs leading-tight">CGPA<br/>NIT MZ</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -top-2 -left-4 bg-secondary border border-white/10 rounded-2xl px-4 py-2 shadow-xl z-20"
            >
              <span className="text-white/60 text-xs font-semibold">🎓 NIT Mizoram</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-8 md:mt-12"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown className="text-emerald-400/60 w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

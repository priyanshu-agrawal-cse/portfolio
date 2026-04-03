import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Cpu, Globe, Rocket, AlertCircle } from 'lucide-react';

const projects = [
  {
    title: 'PeerConnect',
    period: 'Real-Time Video Conferencing Platform',
    desc: 'Multi-user real-time video conferencing with P2P media streaming, screen sharing and signaling server implementation.',
    tech: ['React', 'Node.js', 'WebRTC', 'Socket.IO'],
    challenges: 'Managing WebRTC signaling flows, handling ICE candidates, and ensuring stable media streams across network conditions.',
    github: 'https://github.com/priyanshu-agrawal-cse/video-conferencing-and-chatting',
    live: 'https://video-conferencing-and-chatting-webapp.onrender.com',
    icon: Globe,
    color: 'emerald',
  },
  {
    title: 'WanderLust',
    period: 'Full Stack Airbnb Clone',
    desc: 'Property listing and booking workflows with authentication/authorization using a full MVC architecture.',
    tech: ['Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
    challenges: 'Implementing secure authentication, building complex property search filters, and managing state across the full stack.',
    github: 'https://github.com/priyanshu-agrawal-cse/wanderLust',
    live: 'https://wanderlust-2-0cfo.onrender.com',
    icon: Rocket,
    color: 'blue',
  },
  {
    title: 'Stock Trading Platform',
    period: 'Zerodha Inspired Simulator',
    desc: 'Simulated stock trading environment with transaction workflows, portfolio dashboard, and real-time market updates.',
    tech: ['React', 'Node.js', 'Express', 'REST APIs'],
    challenges: 'Ensuring real-time data consistency, managing complex trading logic, and building a responsive portfolio tracker.',
    github: 'https://github.com/priyanshu-agrawal-cse/stock-trading-frontend',
    live: 'https://stock-trading-platform-mvlj.onrender.com',
    icon: Cpu,
    color: 'indigo',
  },
  {
    title: 'AI Voice Assistant',
    period: 'Groq LLaMA Powered',
    desc: 'Voice command automation with natural language interaction, web automation, and intelligent task execution.',
    tech: ['Python', 'Speech Recognition', 'TTS', 'Groq LLaMA'],
    challenges: 'Fine-tuning voice latency, handling multi-intent commands, and integrating complex web automation scripts.',
    github: 'https://github.com/priyanshu-agrawal-cse/AI-assistance-in-python',
    live: null,
    icon: Code2,
    color: 'purple',
  },
];

const colorMap = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', hover: 'group-hover:bg-emerald-500', hoverText: 'group-hover:text-emerald-400' },
  blue:    { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/20',    hover: 'group-hover:bg-blue-500',    hoverText: 'group-hover:text-blue-400'    },
  indigo:  { bg: 'bg-indigo-500/10',  text: 'text-indigo-400',  border: 'border-indigo-500/20',  hover: 'group-hover:bg-indigo-500',  hoverText: 'group-hover:text-indigo-400'  },
  purple:  { bg: 'bg-purple-500/10',  text: 'text-purple-400',  border: 'border-purple-500/20',  hover: 'group-hover:bg-purple-500',  hoverText: 'group-hover:text-purple-400'  },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-secondary/20 section-padding">
      <div className="flex flex-col items-center text-center mb-10 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-4"
        >
          Engineering <span className="text-accent underline decoration-accent/20">Impact</span>
        </motion.h2>
        <p className="text-white/50 max-w-2xl text-sm">
          Production-grade projects focusing on real-time systems, full-stack engineering, and scalable backends.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, i) => {
          const c = colorMap[project.color];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass p-6 md:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl border ${c.bg} ${c.text} ${c.border} transition-colors ${c.hover} group-hover:text-black`}>
                  <project.icon size={28} />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    title="View on GitHub"
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all"
                  >
                    <Github size={20} />
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      title="Live Demo"
                      className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition-all"
                    >
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    <span title="No live demo (CLI app)" className="p-3 bg-white/5 rounded-full text-white/20 cursor-not-allowed">
                      <AlertCircle size={20} />
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className={`text-2xl font-bold text-white mb-1 transition-colors ${c.hoverText}`}>
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-white/40 tracking-wider uppercase">{project.period}</p>
                </div>
                <p className="text-white/60 leading-relaxed text-sm">{project.desc}</p>
                <div>
                  <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Cpu size={14} className="text-accent" /> Engineering Challenge
                  </h4>
                  <p className="text-xs text-white/50 italic leading-relaxed pl-4 border-l border-white/10">{project.challenges}</p>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[11px] font-medium text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Buttons */}
              <div className="mt-6 pt-6 border-t border-white/5 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm font-medium transition-all"
                >
                  <Github size={16} /> GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent/10 border border-accent/20 hover:bg-accent hover:text-black text-accent text-sm font-medium transition-all"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                ) : (
                  <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/5 text-white/20 text-sm font-medium cursor-not-allowed">
                    <AlertCircle size={16} /> CLI App
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

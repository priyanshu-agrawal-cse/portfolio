import { motion } from 'framer-motion';
import { Network, Server, Cpu, Layers, GraduationCap, MapPin } from 'lucide-react';

const interests = [
  { icon: Server,   name: 'Backend Engineering',   desc: 'Building high-performance, robust backend architectures and REST APIs.' },
  { icon: Network,  name: 'Distributed Systems',   desc: 'Designing resilient and scalable multi-node systems.' },
  { icon: Layers,   name: 'Real-time Platforms',   desc: 'Low-latency WebRTC, signaling servers, and Socket.IO applications.' },
  { icon: Cpu,      name: 'System Scalability',    desc: 'Optimizing for high-concurrency, throughput, and production reliability.' },
];

const stats = [
  { value: '9.52', label: 'CGPA' },
  { value: '4+',   label: 'Internships' },
  { value: '6+',   label: 'Certificates' },
  { value: '4+',   label: 'Projects' },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* subtle section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 to-transparent pointer-events-none" />

      <div className="section-padding relative">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4"
        >
          About Me
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
              Engineering <span className="text-accent">Reliable</span>{' '}
              Digital Ecosystems<br className="hidden md:block" /> for the Future.
            </h2>

            <div className="space-y-5 text-white/65 text-base leading-relaxed">
              <p>
                I am{' '}
                <span className="text-white font-semibold">Priyanshu Agrawal</span>, a
                Computer Science undergraduate at the{' '}
                <span className="text-white font-medium">
                  National Institute of Technology Mizoram
                </span>{' '}
                with a <span className="text-accent font-bold">CGPA of 9.52</span>.
              </p>
              <p>
                My engineering philosophy centers on{' '}
                <span className="text-white font-semibold">
                  robustness, efficiency, and scalability
                </span>
                . I enjoy dissecting complex systems — from investigating network
                bottlenecks in video streaming to architecting real-time
                communication platforms.
              </p>
              <p>
                Whether it&apos;s building production-grade REST APIs or performing
                low-level network traffic analysis with FFmpeg and tcpdump, I focus
                on writing clean, maintainable, and impact-driven code.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-6 text-white/40 text-sm">
              <MapPin size={14} className="text-accent" />
              <span>NIT Mizoram, Aizawl, India</span>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-2xl font-display font-bold text-accent">{s.value}</p>
                  <p className="text-[11px] text-white/40 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Interests */}
          <div>
            <p className="text-xs font-bold text-white/30 uppercase tracking-[0.25em] mb-6">
              Core Technical Interests
            </p>
            <div className="grid gap-4">
              {interests.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group flex gap-5 p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-accent transition-colors mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

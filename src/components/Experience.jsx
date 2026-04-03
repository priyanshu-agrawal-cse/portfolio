import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    company: 'ProPload (Propaxe Quest Pvt Ltd)',
    location: 'Remote',
    period: 'Aug 2024 - Oct 2024',
    badges: ['Backend', 'Scalability'],
    points: [
      'Architected and deployed highly scalable RESTful APIs using the MERN stack, ensuring high-concurrency capability.',
      'Optimized MongoDB aggregation pipelines and indexing strategies, reducing query latency by 40%.',
      'Implemented robust server-side logic and asynchronous task processing to improve overall system throughput.',
      'Led the transition to a modular Git-based CI/CD workflow, improving deployment reliability across teams.',
      'Independently debugged and resolved critical performance bottlenecks in production-level database workflows.',
    ],
    certificate: {
      label: 'View Certificate',
      url: 'https://drive.google.com/file/d/1FWGCsFryc9vBpV90GJyO5YRGoYuEUNid/view',
    },
  },
  {
    title: 'AI & Machine Learning Intern',
    company: 'ProPload',
    location: 'Remote',
    period: 'Jun 2024 - Aug 2024',
    badges: ['ML', 'Data Science'],
    points: [
      'Developed end-to-end Machine Learning pipelines, from automated preprocessing to high-accuracy predictive modeling.',
      'Built Python-based data processing workflows capable of handling large-scale structured datasets.',
      'Conducted rigorous exploratory data analysis (EDA) and hyperparameter tuning to optimize model evaluation metrics.',
      'Applied advanced supervised learning algorithms to extract actionable data-driven insights for business logic.',
    ],
    certificate: null,
  },
  {
    title: 'Research Intern',
    company: 'IIT Bombay — Trust Lab',
    location: 'Remote/Hybrid',
    period: 'Jan 2024 - Apr 2024',
    badges: ['Research', 'Networking'],
    points: [
      'Engineered a comprehensive Linux-based network traffic analysis tool using tcpdump and FFmpeg for real-time monitoring.',
      'Investigated video streaming performance bottlenecks, specifically focusing on latency, buffering, and frame loss metrics.',
      'Quantified Quality of Experience (QoE) through deep-packet inspection and throughput analysis.',
      'Proposed architectural improvements for reliable video delivery across low-bandwidth network environments.',
    ],
    certificate: {
      label: 'View Certificate',
      url: 'https://drive.google.com/file/d/1acWADrOnXUsBXPs8zVmfTzkZj13FPAIw/view',
    },
  },
  {
    title: 'Cybersecurity Intern',
    company: 'CDAC Noida',
    location: 'Noida, India',
    period: 'Dec 2023 - Jan 2024',
    badges: ['Security', 'Pentest'],
    points: [
      'Conducted controlled ethical hacking and penetration testing to identify critical system vulnerabilities.',
      'Analyzed modern attack surfaces and vulnerability patterns in distributed network infrastructures.',
      'Implemented secure system design principles to harden internal nodes against potential breach attempts.',
      'Authored technical security audit reports detailing discovery and mitigation strategies.',
    ],
    certificate: {
      label: 'View Certificate',
      url: 'https://drive.google.com/file/d/1HcIxxQYKWShJUwHQ9iahXCidTwT41rfp/view',
    },
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-4"
        >
          Professional <span className="text-accent">Experience</span>
        </motion.h2>
        <p className="text-white/50 max-w-2xl">
          Internships and research positions where I applied engineering principles to solve real-world problems.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto pl-8 border-l-2 border-white/10 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.period + exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-0 w-5 h-5 bg-accent rounded-full border-4 border-primary shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

            <div className="glass p-6 md:p-8 rounded-2xl hover:border-accent/40 transition-all duration-300 group">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-white/50 text-sm mt-1">
                    <Briefcase size={14} className="text-accent" />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <MapPin size={14} className="text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white/70">
                    <Calendar size={12} className="text-accent" />
                    {exp.period}
                  </div>
                  <div className="flex gap-2">
                    {exp.badges.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-accent/80 border border-accent/20 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-white/70 leading-relaxed text-sm">
                    <CheckCircle2 size={16} className="flex-shrink-0 mt-1 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Certificate Button */}
              {exp.certificate && (
                <a
                  href={exp.certificate.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-black text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  <ExternalLink size={14} />
                  {exp.certificate.label}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

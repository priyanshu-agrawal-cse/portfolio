import { motion } from 'framer-motion';
import { 
  Code2, Terminal, Globe, Database, Cpu, HardDrive, 
  Layers, Settings, GitBranch, Layout, Server, Network 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'C']
  },
  {
    title: 'CS Fundamentals',
    icon: Cpu,
    skills: ['Data Structures', 'Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'Database Systems']
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['React.js', 'Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'HTML', 'CSS', 'Bootstrap']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL']
  },
  {
    title: 'Systems & Networking',
    icon: Network,
    skills: ['FFmpeg', 'FreeSWITCH', 'Kamailio', 'Baresip', 'tcpdump']
  },
  {
    title: 'Developer Tools',
    icon: Settings,
    skills: ['Git', 'GitHub', 'Linux', 'VS Code']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-4"
        >
          Technical <span className="text-accent underline decoration-accent/20">Skillset</span>
        </motion.h2>
        <p className="text-white/50 max-w-2xl text-sm">
          A comprehensive overview of my engineering competencies, from low-level systems to modern web architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group glass p-6 rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl group-hover:bg-accent group-hover:text-black transition-all">
                <cat.icon size={24} className="group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-accent transition-colors">
                {cat.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-white/50 hover:border-accent/40 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

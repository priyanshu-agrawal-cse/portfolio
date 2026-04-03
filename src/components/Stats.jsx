import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { Award, Star, Users, Briefcase, ExternalLink, Code2 } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: 'Gold Badge in Problem Solving',
    source: 'HackerRank',
    url: 'https://www.hackerrank.com/profile/priyanshuagraw14',
  },
  {
    icon: Star,
    title: '1st Place — Coding Competition',
    source: 'TechNox (NIT Mizoram)',
    url: 'https://drive.google.com/file/d/1j3vlP9ACEYZD3xXfLdG2geV_HrNf1u_k/view',
  },
];

const leadership = [
  {
    icon: Users,
    role: 'Core Member',
    org: 'Google Developer Group — NIT Mizoram',
    url: 'https://gdg-nitmizoram.vercel.app/',
  },
  {
    icon: Briefcase,
    role: 'Assistant Student Activity Coordinator',
    org: 'Training and Placement Cell — NIT Mizoram',
    url: null,
  },
];

const certificates = [
  { label: 'Alpha DSA Certificate', url: 'https://drive.google.com/file/d/1_ZiWPQJj4qNVpGW4vYt8r3algsEKY8-D/view' },
  { label: 'MERN Stack Certificate', url: 'https://drive.google.com/file/d/1odJfpHOPOQapcsohfyxG3F-ikOsjdp_a/view' },
  { label: 'CDAC', url: 'https://drive.google.com/file/d/1HcIxxQYKWShJUwHQ9iahXCidTwT41rfp/view' },
  { label: 'Coding Competition', url: 'https://drive.google.com/file/d/1j3vlP9ACEYZD3xXfLdG2geV_HrNf1u_k/view' },
];

export default function Stats() {
  return (
    <section className="bg-secondary/10 section-padding space-y-12">
      {/* GitHub Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl border border-white/5"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-accent/10 border border-accent/20 rounded-lg text-accent">
            <Star size={20} />
          </div>
          <h3 className="text-xl font-bold text-white uppercase tracking-wider">GitHub Activity</h3>
          <a
            href="https://github.com/priyanshu-agrawal-cse"
            target="_blank"
            rel="noreferrer"
            className="ml-auto text-xs font-medium text-accent hover:underline flex items-center gap-1"
          >
            View Profile <ExternalLink size={12} />
          </a>
        </div>
        <div className="overflow-x-auto">
          <GitHubCalendar
            username="priyanshu-agrawal-cse"
            blockSize={12}
            blockMargin={5}
            fontSize={14}
            theme={{
              light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              dark:  ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{ color: 'rgba(255,255,255,0.6)' }}
          />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/5"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="text-accent" /> Key Achievements
          </h3>
          <div className="grid gap-4">
            {achievements.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-accent/40 transition-all"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-full text-accent group-hover:bg-accent group-hover:text-black transition-all">
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-xs text-white/50">{item.source}</p>
                </div>
                <ExternalLink size={14} className="text-white/20 group-hover:text-accent transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl border border-white/5"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users className="text-accent" /> Leadership &amp; Roles
          </h3>
          <div className="grid gap-4">
            {leadership.map((item) => {
              const Wrapper = item.url ? 'a' : 'div';
              const props = item.url
                ? { href: item.url, target: '_blank', rel: 'noreferrer' }
                : {};
              return (
                <Wrapper
                  key={item.org}
                  {...props}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-accent/40 transition-all"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-full text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-sm group-hover:text-accent transition-colors">{item.role}</h4>
                    <p className="text-xs text-white/50">{item.org}</p>
                  </div>
                  {item.url && <ExternalLink size={14} className="text-white/20 group-hover:text-accent transition-colors flex-shrink-0" />}
                </Wrapper>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Certificates Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-3xl border border-white/5"
      >
        <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
          <Award className="text-accent" /> Certificates &amp; Credentials
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certificates.map((cert) => (
            <a
              key={cert.label}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-accent/40 hover:bg-white/[0.07] transition-all"
            >
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-black transition-all">
                <ExternalLink size={14} />
              </div>
              <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors leading-tight">
                {cert.label}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

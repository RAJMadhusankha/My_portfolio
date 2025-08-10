import { motion } from 'framer-motion';

const skills = [
 { name: 'Networking (TCP/IP, OSI, Subnetting)', level: 90 },
  { name: 'Firewalls & VPN (IPSec, SSL, ACLs)', level: 85 },
  { name: 'Penetration Testing (Metasploit, Burp Suite)', level: 80 },
  { name: 'Linux & Windows Security', level: 75 },
  { name: 'SIEM & Monitoring (Zabbix, Splunk)', level: 70 },
  { name: 'Cybersecurity Frameworks (NIST, ISO 27001)', level: 65 },
  { name: 'Python for Security Automation', level: 60 },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a192f] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-4 font-mono">
            <span className="text-cyan-500">$</span> skills
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} aria-label={`${skill.name} skill level`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-gray-300 text-sm sm:text-base">{skill.name}</span>
                <span className="text-cyan-400 font-mono text-sm sm:text-base">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="bg-cyan-500 h-3 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

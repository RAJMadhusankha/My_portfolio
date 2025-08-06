import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: 'Network Security', level: 95, icon: '🛡️' },
    { name: 'Penetration Testing', level: 90, icon: '🔓' },
    { name: 'Firewall Configuration', level: 85, icon: '🔥' },
    { name: 'Cryptography', level: 80, icon: '🔐' },
    { name: 'SIEM Tools', level: 75, icon: '📊' },
    { name: 'Incident Response', level: 85, icon: '🚨' }
  ]

  return (
    <section id="skills" className="py-20 bg-[#0a192f] relative overflow-hidden">
      {/* Connection lines animation */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="#64ffda"
              strokeWidth="0.5"
              strokeDasharray="5,5"
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4 font-mono">
            <span className="text-[#64ffda]">$</span> skillset
          </h2>
          <div className="w-20 h-1 bg-[#64ffda] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240]/80 p-6 rounded-lg border border-[#112240] hover:border-[#64ffda]/30 transition-all"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-[#ccd6f6] font-mono">{skill.name}</h3>
              </div>
              <div className="w-full bg-[#0a192f] rounded-full h-2">
                <div 
                  className="bg-[#64ffda] h-2 rounded-full transition-all duration-1000" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="text-right mt-1">
                <span className="text-[#64ffda] font-mono text-sm">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '100%', label: 'Security Audits' },
            { value: 'A+', label: 'Security Rating' },
            { value: '24/7', label: 'Monitoring' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-[#112240]/50 rounded-lg"
            >
              <div className="text-4xl font-bold text-[#64ffda] mb-2">{stat.value}</div>
              <div className="text-[#8892b0] font-mono text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
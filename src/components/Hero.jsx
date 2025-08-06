import { motion } from 'framer-motion'
import { FiChevronDown, FiCode, FiShield } from 'react-icons/fi'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "Network Security Specialist",
    "Penetration Tester", 
    "Security Analyst"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a192f] relative overflow-hidden">
      {/* Animated network nodes */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#64ffda]/10"
            initial={{ 
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-[#ccd6f6] mb-4"
        >
          <span className="text-[#64ffda]">&gt;_ </span>
          Hello, I'm <span className="text-[#64ffda] underline decoration-wavy">Janith</span>
        </motion.h1>
        
        <div className="h-16 mb-8 flex items-center justify-center">
          <h2 className="text-xl md:text-3xl font-mono text-[#ccd6f6]/80 overflow-hidden">
            <span className="inline-block min-w-[300px] text-center">
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-[#64ffda] to-[#bd93f9]"
                style={{ animation: `typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite` }}
              >
                {roles[currentRole]}
              </span>
            </span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#64ffda] text-[#0a192f] font-mono font-bold rounded-lg hover:bg-[#64ffda]/90 transition-all flex items-center shadow-lg hover:shadow-[#64ffda]/30"
          >
            <FiCode className="mr-2" /> view-projects.sh
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-mono font-bold rounded-lg hover:bg-[#112240]/50 transition-all flex items-center shadow-lg hover:shadow-[#64ffda]/10"
          >
            <FiShield className="mr-2" /> secure-contact
          </motion.a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-[#ccd6f6]/80 hover:text-[#64ffda] transition-colors"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}

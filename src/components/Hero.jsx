import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0e1116] text-white flex flex-col justify-center items-center px-6 pt-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-center"
      >
        Hello, I'm <span className="text-cyan-400 underline decoration-wavy decoration-2">Janith</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg sm:text-xl text-gray-400 mb-8"
      >
        Security Analyst | Cyber Defense Enthusiast
      </motion.p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 transition rounded-full text-sm font-semibold"
        >
          <FaCode /> View Projects
        </a>
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-600 hover:bg-cyan-600 transition rounded-full text-sm font-semibold"
        >
          <FaShieldAlt /> Secure Contact
        </a>
      </div>
    </section>
  );
}

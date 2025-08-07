import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0e1116] text-white flex flex-col justify-center items-center px-4 sm:px-6 pt-24 sm:pt-32 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-bold mb-4"
      >
        Hello, I'm{' '}
        <span className="text-cyan-400 underline decoration-wavy decoration-2">Janith</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-base sm:text-xl text-gray-400 mb-8 max-w-xl"
      >
        Security Analyst | Cyber Defense Enthusiast
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 transition rounded-full text-sm font-semibold w-full sm:w-auto"
        >
          <FaCode /> View Projects
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-600 hover:bg-cyan-600 transition rounded-full text-sm font-semibold w-full sm:w-auto"
        >
          <FaShieldAlt /> Secure Contact
        </a>
      </div>
    </section>
  );
}

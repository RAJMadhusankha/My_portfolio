import { motion } from 'framer-motion';
import {
  FaCode,
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,  // FaEmail is not in react-icons/fa, use FaEnvelope instead
  FaWhatsapp,
} from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0e1116] text-white flex flex-col justify-center items-center px-6 sm:px-8 pt-24 sm:pt-32 text-center"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-4"
      >
        Hello, I'm{' '}
        <span className="text-cyan-400 underline decoration-wavy decoration-2">
          Janith
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-base sm:text-xl text-gray-400 mb-8 max-w-xl"
      >
        Network & Security | Undergraduate
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <a
          href="#projects"
          className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 transition rounded-full text-sm font-semibold"
        >
          <FaCode /> View Projects
        </a>
        <a
          href="#contact"
          className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-cyan-600 hover:bg-cyan-600 transition rounded-full text-sm font-semibold"
        >
          <FaShieldAlt /> Secure Contact
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-10 flex gap-6 text-xl text-cyan-400"
      >
        <a
          href="https://github.com/RAJMadhusankha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/janithmadusankha/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:janithm2000@gmail.com"
          className="hover:text-white transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/qr/POSE4MYVZCY6B1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#112240] border-t border-cyan-600/30 py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold font-mono text-[#22d3ee]">
              Janith <span className="text-[#ccd6f6]">Madhusankha</span>
            </h2>
            <p className="mt-1 text-[#8892b0] font-mono text-sm tracking-wide">
              Network & Security Specialist • Powered by React & Tailwind
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-8"
          >
            <a
              href="https://github.com/RAJMadhusankha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#22d3ee] transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/janithmadusankha/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#22d3ee] transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://wa.me/qr/POSE4MYVZCY6B1" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-[#22d3ee] transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <a
              href="mailto:janithmm2000@gmail.com"
              className="text-[#8892b0] hover:text-[#22d3ee] transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-cyan-600/20 text-center">
          <p className="text-[#8892b0] font-mono text-sm select-text">
            &copy; {new Date().getFullYear()} Janith Madhusankha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

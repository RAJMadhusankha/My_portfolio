import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] border-t border-[#112240] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#ccd6f6]">
                <span className="text-[#64ffda]">root@</span>terminal
              </span>
            </div>
            <p className="mt-2 text-[#8892b0] font-mono text-sm">
              Secure by design • Built with React & Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <a href="https://github.com" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <FiGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <FiTwitter className="h-6 w-6" />
            </a>
            <a href="mailto:alex@cybersec.com" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
              <FiMail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#112240] text-center">
          <p className="text-[#8892b0] font-mono text-sm">
            &copy; {new Date().getFullYear()} SecurePortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
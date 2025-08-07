import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-slate py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Branding */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-bold text-primaryText">
              <span className="text-accent">root@</span>terminal
            </h2>
            <p className="mt-2 text-secondaryText font-mono text-sm">
              Secure by design • Built with React & Tailwind CSS
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryText hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryText hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryText hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter className="h-6 w-6" />
            </a>
            <a
              href="mailto:alex@cybersec.com"
              className="text-secondaryText hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-slate text-center">
          <p className="text-secondaryText font-mono text-sm">
            &copy; {new Date().getFullYear()} SecurePortfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

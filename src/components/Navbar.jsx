import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 h-20 ${
        scrolled
          ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <div className="bg-[#64ffda] w-3 h-3 rounded-full mr-2" />
            <span className="text-[#ccd6f6] font-mono text-sm">
              <span className="text-[#64ffda]">Portfolio</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -3 }}
                className={`relative font-mono text-sm transition-colors ${
                  activeSection === item
                    ? 'text-[#64ffda]'
                    : 'text-[#8892b0] hover:text-[#ccd6f6]'
                }`}
              >
                <span className="flex items-center justify-center">
                  <span className="mr-2 text-xs">0{i + 1}</span>
                  {item}
                </span>
                {activeSection === item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda]"
                    layoutId="navIndicator"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="YourName_Resume.pdf"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 font-mono text-sm text-[#64ffda] border border-[#64ffda] rounded px-4 py-2 hover:bg-[#64ffda]/10 transition-colors"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#64ffda] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#112240] rounded-lg mt-2 mb-4 overflow-hidden"
          >
            <div className="py-2">
              {navItems.map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 font-mono text-sm ${
                    activeSection === item
                      ? 'text-[#64ffda] bg-[#0a192f]'
                      : 'text-[#8892b0] hover:text-[#ccd6f6] hover:bg-[#0a192f]/50'
                  }`}
                >
                  <span className="flex items-center">
                    <span className="mr-3 text-xs w-6 h-6 flex items-center justify-center rounded-full border border-[#64ffda]">
                      0{i + 1}
                    </span>
                    {item}
                  </span>
                </a>
              ))}

              {/* Mobile Resume Button */}
              <a
                href="/resume.pdf"
                download="YourName_Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 font-mono text-sm text-[#64ffda] border border-[#64ffda] rounded mx-4 my-2 text-center hover:bg-[#64ffda]/10 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

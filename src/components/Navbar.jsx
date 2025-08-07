import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // You can use any icon library or SVGs

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`fixed w-full top-0 z-50 px-6 py-4 transition-all ${scrolled ? 'bg-[#0e1116]/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <span className="font-mono font-semibold text-cyan-400 text-lg">Janith.dev</span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-cyan-400">Certifications</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        <div className="hidden md:block">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-400 px-4 py-1 rounded hover:bg-cyan-400 hover:text-black text-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 bg-[#0e1116]/90 backdrop-blur-md shadow-md rounded px-6 py-4 space-y-4 text-sm font-medium text-white">
          <a href="#about" className="block hover:text-cyan-400" onClick={toggleMobileMenu}>About</a>
          <a href="#skills" className="block hover:text-cyan-400" onClick={toggleMobileMenu}>Skills</a>
          <a href="#projects" className="block hover:text-cyan-400" onClick={toggleMobileMenu}>Projects</a>
          <a href="#certifications" className="block hover:text-cyan-400" onClick={toggleMobileMenu}>Certifications</a>
          <a href="#contact" className="block hover:text-cyan-400" onClick={toggleMobileMenu}>Contact</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-cyan-400 px-4 py-1 rounded hover:bg-cyan-400 hover:text-black text-center"
            onClick={toggleMobileMenu}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

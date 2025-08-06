// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications'; // Add this import
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0a192f] text-[#ccd6f6]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications /> {/* Add this line */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const projects = [
  {
    title: "Network Vulnerability Scanner",
    description:
      "Automated tool for identifying security weaknesses in network infrastructure with comprehensive reporting",
    tags: ["Python", "Nmap", "Multithreading"],
    status: "SECURE",
    github: "#",
    demo: "#",
  },
  {
    title: "Firewall Rule Analyzer",
    description:
      "Tool for auditing and optimizing firewall rule sets with risk assessment scoring",
    tags: ["Bash", "iptables", "Regex"],
    status: "PENTEST",
    github: "#",
    demo: "#",
  },
  {
    title: "Encrypted Chat Application",
    description:
      "End-to-end encrypted messaging with perfect forward secrecy and key rotation",
    tags: ["Node.js", "WebSockets", "AES-256"],
    status: "AUDITED",
    github: "#",
    demo: "#",
  },
  {
    title: "Web Application Firewall",
    description:
      "Protects web applications from common exploits using machine learning and rule-based filtering.",
    tags: ["Python", "Flask", "ML"],
    status: "SECURE",
    github: "#",
    demo: "#",
  },
  {
    title: "Password Cracker",
    description:
      "Multithreaded tool for ethical password testing using dictionary attacks and brute force techniques.",
    tags: ["Python", "Hashlib", "Wordlists"],
    status: "PENTEST",
    github: "#",
    demo: "#",
  },
  {
    title: "SIEM Dashboard",
    description:
      "Security Information and Event Management dashboard for centralized log monitoring and alerting.",
    tags: ["React", "ElasticSearch", "Kibana"],
    status: "AUDITED",
    github: "#",
    demo: "#",
  },
];

const statusColors = {
  SECURE: "bg-green-500/20 text-green-400",
  PENTEST: "bg-yellow-500/20 text-yellow-400",
  AUDITED: "bg-blue-500/20 text-blue-400",
};

export default function ModernProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) setCardsToShow(1);
      else if (width < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projects.length - cardsToShow;

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="py-20 bg-[#112240] overflow-hidden select-none"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center font-mono">
          <span className="text-[#22d3ee]">cd</span> /projects/
        </h2>

        <div className="relative">
          {/* Carousel container */}
          <motion.div
            className="flex gap-8"
            style={{ width: `${(projects.length * 100) / cardsToShow}%` }}
            animate={{ x: `-${(currentIndex * 100) / projects.length}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="bg-[#0a192f] rounded-lg border border-[#112240] shadow-xl flex-shrink-0"
                style={{ width: `${100 / projects.length}%` }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-48 bg-gradient-to-tr from-[#0f172a] to-[#1e293b] flex items-center justify-center text-[#22d3ee] text-6xl rounded-t-lg">
                  {project.status === "SECURE" && "🔒"}
                  {project.status === "PENTEST" && "🔓"}
                  {project.status === "AUDITED" && "🔍"}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#ccd6f6]">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${statusColors[project.status]} font-mono`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-[#8892b0] mb-6 min-h-[72px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-[#112240] text-[#ccd6f6] rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#22d3ee] hover:underline font-mono text-sm flex items-center"
                    >
                      <FiGithub className="mr-2" /> source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#bd93f9] hover:underline font-mono text-sm flex items-center"
                    >
                      <FiExternalLink className="mr-2" /> live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            aria-label="Previous projects"
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-[#0a192f] p-3 rounded-full shadow-md text-[#22d3ee] hover:bg-[#22d3ee] hover:text-[#0a192f] transition"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Next projects"
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-[#0a192f] p-3 rounded-full shadow-md text-[#22d3ee] hover:bg-[#22d3ee] hover:text-[#0a192f] transition"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Shellshock (CVE-2014-6271) – Exploitation & Analysis",
    description:
      "Shellshock (CVE-2014-6271) exploitation and analysis using Metasploitable 2 and Kali Linux in a controlled lab environment.",
    tags: ["Kali Linux", "Nmap", "Metasploitable 2"],
    status: "SECURE",
    github: "github.com/RAJMadhusankha/Shellshock-CVE-2014-6271-Exploitation-and-Analysis#",
  },
    
  {
    title: "DVWA-Vulnerability-Assessment",
    description:
      "A complete step-by-step demonstration of Web Application Vulnerability Testing using DVWA on Kali Linux",
    tags: ["Vulnerable", "SQL Injection", "Command Injection"],
    status: "PENTEST",
    github: "https://github.com/RAJMadhusankha/DVWA-Vulnerability-Assessment",
    image: "/public/Dvwa.png",
  },
  
  {
    title: "Network Sniffer & Anomaly Detector",
    description:
      "Python tool using Scapy to capture live network traffic, detect suspicious high-packet IPs, and log possible attack alerts on Linux",
    tags: ["Ubuntu Linux", "Python 3.x", "Scapy"],
    status: "SECURE",
    github: "https://github.com/RAJMadhusankha/network_sniffer_project",
    //image: "/images/sniffer.png",
  },
  {
    title: "Secure Network Design",
    description:
      "This project demonstrates the design and implementation of a secure, segmented network using Cisco Packet Tracer",
    tags: ["Secure OSPFv2", "NTP Server", "VLAN segmentation"],
    status: "SECURE",
    github: "https://github.com/RAJMadhusankha/Secure-Network-Project",
    image: "/public/secure.png",
  },
  
];

const statusColors = {
  SECURE: "bg-green-500/20 text-green-400",
  PENTEST: "bg-yellow-500/20 text-yellow-400",
  AUDITED: "bg-blue-500/20 text-blue-400",
};

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-[#112240] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12 text-center font-mono">
          <span className="text-[#22d3ee]">cd</span> /projects/
        </h2>

        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#0a192f] rounded-xl border border-[#112240] shadow-xl flex flex-col overflow-hidden transition-all"
            >
              {/* Image OR Icon */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />
              ) : (
                <div className="h-44 bg-gradient-to-tr from-[#0f172a] to-[#1e293b] flex items-center justify-center text-6xl">
                  <span>
                    {project.status === "SECURE" && "🔒"}
                    {project.status === "PENTEST" && "🔓"}
                    {project.status === "AUDITED" && "🔍"}
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[#ccd6f6]">
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${statusColors[project.status]} font-mono`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-[#8892b0] mb-5 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-[#112240] text-[#ccd6f6] rounded-full font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22d3ee] hover:underline font-mono text-sm flex items-center"
                  >
                    <FiGithub className="mr-2" /> source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

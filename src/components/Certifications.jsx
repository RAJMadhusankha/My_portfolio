import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Industrial Networking Essentials",
      issuer: "Cisco",
      date: "June 2025",
      credentialUrl: "https://www.credly.com/badges/527e2d37-1f9d-49a5-ab6b-4b242dbc8f62/public_url",
      skills: ["Ethernet", "Industrial Protocols", "Industrial Reference Architecture"],
    },
    {
      id: 2,
      title: "Network Technician Career Path",
      issuer: "Cisco",
      date: "June 2025",
      credentialUrl: "https://www.credly.com/badges/6a007550-8466-40ac-bc68-025dbaf2ce81/linked_in_profile",
      skills: ["Network troubleshooting", "Network Hardware", "Network Configuration"],
    },
    {
      id: 3,
      title: "Junior Cybersecurity Analyst Career Path",
      issuer: "Cisco",
      date: "May 2025",
      credentialUrl: "https://www.credly.com/badges/c42ade1b-4872-4dd2-960d-7b7e1ef9b64c/public_url",
      skills: ["Access Control", "Application Security", "Linux"],
    },
    {
      id: 4,
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services (AWS)",
      date: "Apirl 2025",
      credentialUrl: "https://www.credly.com/badges/f80058f0-5515-4ab3-a530-e4421ce23d80/linked_in_profile",
      skills: ["Amazon Web Services (AWS)", "Aws cloud", "Cloud Computing Fundamentals"],
    },
    {
      id: 5,
      title: "Google UX Design",
      issuer: "Coursera",
      date: "Auguest 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/RS368AFCY5PN",
      skills: ["User Research & Testing", "Prototyping", "Figma (Software)"],
    },
    {
      id: 6,
      title: "Learn CCNA 200-301 Network Fundamentals Online",
      issuer: "Simplilearn",
      date: "May 2024",
      credentialUrl: "https://simpli-web.app.link/e/Q8fCIPAZVJb",
      skills: ["Event Loop", "Network Fundamentals", "Network Security"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="certifications"
      className="min-h-screen py-20 px-4 sm:px-8 bg-[#1f2937] text-gray-200 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-200">
            <span className="text-cyan-400">$</span> Certifications
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#111827] rounded-lg p-6 border border-cyan-400/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>

              <div className="flex items-center text-sm mb-4 text-cyan-400">
                <FaCalendarAlt className="mr-2" />
                <span>{cert.date}</span>
              </div>

              <div className="mt-4">
                <h4 className="text-gray-400 text-sm mb-2">
                  Skills Validated:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full border border-cyan-400/50 text-cyan-400 hover:border-cyan-400 transition-colors select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-cyan-400/20">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-cyan-400 hover:text-white transition-colors"
                >
                  Verify Credential
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

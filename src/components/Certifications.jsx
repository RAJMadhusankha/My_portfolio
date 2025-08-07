import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "May 2023",
      credentialUrl: "https://www.yourcredentialsite.com/aws-architect",
      skills: ["Cloud Architecture", "AWS Services", "Scalability"],
    },
    {
      id: 2,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "March 2023",
      credentialUrl: "https://www.yourcredentialsite.com/google-data-engineer",
      skills: ["BigQuery", "Dataflow", "Machine Learning"],
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "January 2023",
      credentialUrl: "https://www.yourcredentialsite.com/azure-developer",
      skills: ["Azure Functions", "Cosmos DB", "DevOps"],
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "November 2022",
      credentialUrl: "https://www.yourcredentialsite.com/cka",
      skills: ["Containerization", "K8s Orchestration", "Cluster Management"],
    },
    {
      id: 5,
      title: "React Advanced Concepts",
      issuer: "Frontend Masters",
      date: "September 2022",
      credentialUrl: "https://www.yourcredentialsite.com/react-advanced",
      skills: ["Hooks", "Context API", "Performance Optimization"],
    },
    {
      id: 6,
      title: "Node.js: Advanced Concepts",
      issuer: "Udemy",
      date: "July 2022",
      credentialUrl: "https://www.yourcredentialsite.com/nodejs-advanced",
      skills: ["Event Loop", "Cluster Module", "Security"],
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

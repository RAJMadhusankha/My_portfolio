// src/components/Certifications.jsx
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCalendarAlt } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "May 2023",
      credentialUrl: "#",
      skills: ["Cloud Architecture", "AWS Services", "Scalability"]
    },
    {
      id: 2,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "March 2023",
      credentialUrl: "#",
      skills: ["BigQuery", "Dataflow", "Machine Learning"]
    },
    {
      id: 3,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "January 2023",
      credentialUrl: "#",
      skills: ["Azure Functions", "Cosmos DB", "DevOps"]
    },
    {
      id: 4,
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "November 2022",
      credentialUrl: "#",
      skills: ["Containerization", "K8s Orchestration", "Cluster Management"]
    },
    {
      id: 5,
      title: "React Advanced Concepts",
      issuer: "Frontend Masters",
      date: "September 2022",
      credentialUrl: "#",
      skills: ["Hooks", "Context API", "Performance Optimization"]
    },
    {
      id: 6,
      title: "Node.js: Advanced Concepts",
      issuer: "Udemy",
      date: "July 2022",
      credentialUrl: "#",
      skills: ["Event Loop", "Cluster Module", "Security"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="min-h-screen py-20 px-4 sm:px-8 bg-[#0a192f] text-[#ccd6f6]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#64ffda]">03. </span>Certifications
          </h2>
          <div className="w-20 h-0.5 bg-[#64ffda] mx-auto"></div>
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
              className="bg-[#112240] rounded-lg p-6 border border-[#1e3a8a] shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#64ffda] group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-[#8892b0] text-sm">{cert.issuer}</p>
                </div>
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#64ffda] hover:text-white p-2 transition-colors"
                  aria-label={`View ${cert.title} credential`}
                >
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              </div>
              
              <div className="flex items-center text-sm text-[#64ffda] mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{cert.date}</span>
              </div>
              
              <div className="mt-4">
                <h4 className="text-[#8892b0] text-sm mb-2">Skills Validated:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[#0a192f] text-[#64ffda] text-xs rounded-full border border-[#64ffda]/30 group-hover:border-[#64ffda] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#1e3a8a]">
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#64ffda] font-mono text-sm hover:text-white transition-colors"
                >
                  Verify Credential
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
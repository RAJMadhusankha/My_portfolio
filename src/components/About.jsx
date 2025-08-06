import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#112240]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4 font-mono">
            <span className="text-[#64ffda]">$</span> whoami
          </h2>
          <div className="w-20 h-1 bg-[#64ffda] mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="/1pic.png"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-[#64ffda]/20 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-[#64ffda] text-[#0a192f] px-4 py-2 rounded-full shadow-lg font-mono text-sm">
                1+ Years Exp
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-[#ccd6f6] mb-4">Janith</h3>
            <p className="text-[#8892b0] mb-6">
              Cybersecurity specialist with expertise in network security, penetration testing, and secure system architecture. Certified Ethical Hacker (CEH) and Offensive Security Certified Professional (OSCP).
            </p>
            <p className="text-[#8892b0] mb-8">
              Currently working as a Security Consultant, helping organizations strengthen their defenses against evolving cyber threats.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-[#64ffda]" />
                <span className="text-[#ccd6f6]">janithm2000@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-[#64ffda]" />
                <span className="text-[#ccd6f6]">+94 (078) 742-9009</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="h-5 w-5 text-[#64ffda]" />
                <span className="text-[#ccd6f6]">GAMPAHA , SRI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

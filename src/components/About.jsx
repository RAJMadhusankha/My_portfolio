import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1f2937] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
            <span className="text-cyan-400">$</span> whoami
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Picture */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="/mypic.png"
                alt="Profile"
                className="rounded-full w-52 sm:w-64 h-52 sm:h-64 object-cover border-4 border-cyan-400/20 shadow-lg"
              />
              <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-gray-900 px-4 py-1.5 rounded-full shadow-lg text-sm font-semibold">
                1+ Years Exp
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Janith</h3>
            <p className="text-gray-400 mb-4">
              Motivated undergraduate specializing in Network and Security. Skilled in network simulation,
              cybersecurity labs, and system configuration. Proficient with Cisco Packet Tracer, Wireshark, and Kali Linux.
            </p>
            <p className="text-gray-400 mb-8">
              Passionate about cybersecurity and eager to apply technical skills in a real-world internship environment.
            </p>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiMail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200 text-sm break-all">janithm2000@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiPhone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200 text-sm">+94 (078) 742-9009</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <FiMapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200 text-sm">Gampaha, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

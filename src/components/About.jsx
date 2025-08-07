import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1f2937] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
            <span className="text-cyan-400">$</span> whoami
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <img
                src="/mypic.png"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-cyan-400/20 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-cyan-400 text-gray-900 px-4 py-2 rounded-full shadow-lg text-sm font-semibold">
                1+ Years Exp
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">Janith</h3>
            <p className="text-gray-400 mb-6">
              Motivated undergraduate specializing in Network and Security. Skilled in network simulation,
              cybersecurity labs, and system configuration. Proficient with Cisco Packet Tracer, Wireshark, and Kali Linux.
            </p>
            <p className="text-gray-400 mb-8">
              Passionate about cybersecurity and eager to apply technical skills in a real-world internship environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">janithm2000@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">+94 (078) 742-9009</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-200">Gampaha, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

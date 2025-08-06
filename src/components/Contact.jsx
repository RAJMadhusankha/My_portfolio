import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    alert('Message sent securely!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4 font-mono">
            <span className="text-[#64ffda]">$</span> contact_me
          </h2>
          <div className="w-20 h-1 bg-[#64ffda] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-[#112240] rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-[#64ffda] p-8 text-[#0a192f]">
              <h3 className="text-2xl font-bold mb-6">Secure Message</h3>
              <p className="mb-8">
                All messages are encrypted end-to-end. For sensitive information, use my PGP key.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FiMail className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p>alex@cybersec.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiMail className="mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">PGP Key</h4>
                    <p className="font-mono text-sm">0x1A2B3C4D5E6F7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#ccd6f6] mb-2 font-mono">
                    <span className="text-[#64ffda]">./</span>name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-[#8892b0]" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-2 border border-[#112240] rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] bg-[#0a192f] text-[#ccd6f6]"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#ccd6f6] mb-2 font-mono">
                    <span className="text-[#64ffda]">./</span>email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-[#8892b0]" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-2 border border-[#112240] rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] bg-[#0a192f] text-[#ccd6f6]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#ccd6f6] mb-2 font-mono">
                    <span className="text-[#64ffda]">./</span>message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="text-[#8892b0]" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="pl-10 w-full px-4 py-2 border border-[#112240] rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] bg-[#0a192f] text-[#ccd6f6]"
                      placeholder="Your secure message..."
                    ></textarea>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center px-6 py-3 bg-[#64ffda] hover:bg-[#64ffda]/90 text-[#0a192f] font-mono font-bold rounded-lg transition-all shadow-lg hover:shadow-[#64ffda]/30"
                >
                  <FiSend className="mr-2" />
                  encrypt_and_send
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
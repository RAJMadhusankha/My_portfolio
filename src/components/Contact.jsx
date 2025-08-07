import { motion } from 'framer-motion'
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      'service_ve5runo', // replace with your EmailJS service ID
      'template_9wruprp', // replace with your EmailJS template ID
      formData,
      'LQWjhJ2tIcsGHb7SQ' // replace with your EmailJS user ID (public key)
    ).then(() => {
      alert('Message sent securely!')
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)
    }).catch((error) => {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again later.')
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="py-20 bg-[#1f2937]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-4 font-sans">
            <span className="text-cyan-400">$</span> contact_me
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827] rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1 font-sans">
                <span className="text-cyan-400">./</span>name
              </label>
              <div className="relative">
                <FiUser className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-2 rounded-md bg-[#0a192f] border border-cyan-400/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1 font-sans">
                <span className="text-cyan-400">./</span>email
              </label>
              <div className="relative">
                <FiMail className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full px-4 py-2 rounded-md bg-[#0a192f] border border-cyan-400/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1 font-sans">
                <span className="text-cyan-400">./</span>message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute top-3 left-3 text-gray-500" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="pl-10 w-full px-4 py-2 rounded-md bg-[#0a192f] border border-cyan-400/20 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your secure message..."
                />
              </div>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.03 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className={`w-full flex items-center justify-center px-6 py-3 ${
                loading ? 'bg-cyan-700 cursor-not-allowed' : 'bg-cyan-400 hover:bg-cyan-300'
              } text-[#0a192f] font-bold font-sans rounded-md transition-all shadow-lg`}
            >
              <FiSend className="mr-2" />
              {loading ? 'sending...' : 'encrypt_and_send'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

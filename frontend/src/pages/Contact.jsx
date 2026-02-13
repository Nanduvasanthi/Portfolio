import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageSquare,
  Users,
  Globe,
  Sparkles,
  Download
} from 'lucide-react';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, loading: true, error: null, success: false });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${API_URL}/api/contact`, formData);
      
      if (response.data.success) {
        setStatus({
          submitted: true,
          loading: false,
          error: null,
          success: true
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      }
    } catch (error) {
      setStatus({
        ...status,
        loading: false,
        error: error.response?.data?.error || 'Failed to send message. Please try again.',
        success: false
      });
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'nvasanthi2005@gmail.com',
      link: 'mailto:nvasanthi2005@gmail.com',
      color: 'from-rose-500 to-pink-500',
      lightColor: 'from-rose-50 to-pink-50',
      darkColor: 'from-rose-500/10 to-pink-500/10'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'from-purple-500 to-indigo-500',
      lightColor: 'from-purple-50 to-indigo-50',
      darkColor: 'from-purple-500/10 to-indigo-500/10'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Guntur, Andhra Pradesh, India',
      link: null,
      color: 'from-emerald-500 to-teal-500',
      lightColor: 'from-emerald-50 to-teal-50',
      darkColor: 'from-emerald-500/10 to-teal-500/10'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      name: 'GitHub',
      username: '@nanduvasanthi',
      url: 'https://github.com/Nanduvasanthi',
      color: 'from-gray-700 to-gray-900',
      lightColor: 'from-gray-100 to-gray-200'
    },
    {
      icon: <Linkedin size={22} />,
      name: 'LinkedIn',
      username: 'miriyala-nandu-vasanthi',
      url: 'https://linkedin.com/in/miriyala-nandu-vasanthi/',
      color: 'from-blue-600 to-blue-800',
      lightColor: 'from-blue-100 to-blue-200'
    }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="contact" className="relative py-16 lg:py-10 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-dark-300 dark:to-dark-200">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-rose-200/20 dark:bg-rose-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-rose-100/10 to-purple-100/10 dark:from-rose-900/5 dark:to-purple-900/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container-custom relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Get In <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          
          <motion.div 
            variants={scaleIn} 
            className="w-20 h-1 bg-gradient-to-r from-rose-500 to-purple-500 mx-auto rounded-full mb-6"
          />
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light"
          >
            Have a question or want to work together? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Contact Info */}
          <motion.div 
            className="lg:col-span-1 space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInRight}
                whileHover={{ y: -4, boxShadow: "0 30px 45px -12px rgba(0,0,0,0.15)" }}
                className="bg-white dark:bg-dark-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-slate-200 dark:border-dark-100 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-lg font-semibold text-slate-900 dark:text-white hover:text-rose-600 dark:hover:text-rose-400 transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div 
              variants={fadeInRight}
              whileHover={{ y: -4, boxShadow: "0 30px 45px -12px rgba(0,0,0,0.15)" }}
              className="bg-white dark:bg-dark-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-slate-200 dark:border-dark-100"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                <Users size={18} className="mr-2 text-rose-600 dark:text-rose-400" />
                Social Profiles
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-dark-100 rounded-xl hover:bg-slate-100 dark:hover:bg-dark-100 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-gradient-to-r ${social.color} rounded-lg text-white shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        {social.icon}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                          {social.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {social.username}
                        </p>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              whileHover={{ y: -4, boxShadow: "0 30px 45px -12px rgba(0,0,0,0.15)" }}
              className="bg-white dark:bg-dark-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 p-6 md:p-8 border border-slate-200 dark:border-dark-100"
            >
              {/* Form Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    Send Me a Message
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Fill out the form below and I'll get back to you soon!
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-r from-rose-100 to-purple-100 dark:from-rose-900/30 dark:to-purple-900/30 rounded-xl">
                  <MessageSquare className="text-rose-600 dark:text-rose-400" size={24} />
                </div>
              </div>

              {/* Success Message */}
              {status.success && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start space-x-3"
                >
                  <CheckCircle className="text-green-600 dark:text-green-400 flex-shrink-0" size={18} />
                  <div className="flex-1">
                    <p className="text-green-800 dark:text-green-300 font-medium text-sm">Message sent successfully!</p>
                    <p className="text-green-600 dark:text-green-400 text-xs mt-1">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {status.error && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start space-x-3"
                >
                  <AlertCircle className="text-red-600 dark:text-red-400 flex-shrink-0" size={18} />
                  <div className="flex-1">
                    <p className="text-red-800 dark:text-red-300 font-medium text-sm">Error</p>
                    <p className="text-red-600 dark:text-red-400 text-xs mt-1">{status.error}</p>
                  </div>
                </motion.div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-dark-100 border border-slate-200 dark:border-dark-100 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-slate-50 dark:bg-dark-100 border border-slate-200 dark:border-dark-100 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-dark-100 border border-slate-200 dark:border-dark-100 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-dark-100 border border-slate-200 dark:border-dark-100 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all duration-300 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                    placeholder="Hello Nandu, I'd like to talk about..."
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles size={16} className="text-rose-600 dark:text-rose-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-500">
                      * Required fields
                    </span>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-6 py-2.5 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 group ${status.loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {status.loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span className="text-sm">Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="text-sm">Send Message</span>
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Additional Info Card */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ y: -2 }}
              className="mt-6 bg-gradient-to-r from-rose-50 to-purple-50 dark:from-rose-900/10 dark:to-purple-900/10 p-5 rounded-xl border border-slate-200 dark:border-dark-100"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 bg-white dark:bg-dark-200 rounded-lg shadow-sm">
                    <Globe className="text-rose-600 dark:text-rose-400" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Based in <span className="font-semibold text-slate-900 dark:text-white">Guntur, India</span>
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Open for opportunities</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500">Freelance • Full-time • Internship</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Nandu Vasanthi. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 mt-2">
            Designed & Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
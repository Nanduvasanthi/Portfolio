import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/images/profile.jpg'; // Make sure to add your photo here
import resumeFile from '../assets/documents/Nandu_Vasanthi_Resume.pdf';

const Home = () => {
  const { isDark } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'Python Developer',
    'MERN Stack Developer',
    'Backend Developer',
    'Frontend Developer'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      // Pause at full text
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const stats = [
    { label: 'Full-Stack Applications', value: '3+' },
    { label: 'Users Supported', value: '100+' },
    { label: 'Efficiency Improvement', value: '40-50%' },
    { label: 'CGPA', value: '8.44/10' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Nandu_Vasanthi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 lg:pb-15 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 dark:from-primary-900/10 dark:to-secondary-900/10 pointer-events-none"></div>
      
      {/* Animated Background Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Photo - Positioned Slightly Higher */}
          <motion.div
            className="relative order-2 lg:order-1 lg:mt-32"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Photo Container */}
            <div className="relative mx-auto max-w-md">
              {/* Background Gradient Circles */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-400/30 dark:bg-primary-600/20 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary-400/30 dark:bg-secondary-600/20 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              {/* Photo Frame - Circle Shape */}
              <div className="relative z-10">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
                  {/* Gradient Border */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 p-1 shadow-2xl">
                    {/* Inner Circle */}
                    <div className="w-full h-full rounded-full bg-white dark:bg-dark-200 overflow-hidden">
                      {/* Profile Image */}
                      <img 
                        src={profileImg} 
                        alt="Nandu Vasanthi" 
                        className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://ui-avatars.com/api/?name=Nandu+Vasanthi&size=400&background=8B5CF6&color=fff&bold=true';
                        }}
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open to Work Badge - Adjusted position */}
              <motion.div 
                className="absolute -bottom-4 right-4 lg:-right-8 bg-white dark:bg-dark-200 px-4 py-2 rounded-full shadow-lg flex items-center space-x-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Text Content - Positioned Slightly Lower */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-1 lg:order-2 lg:mt-16"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Nandu Vasanthi
                </span>
              </h1>
              
              {/* Typing Animation for Roles */}
              <div className="h-16 lg:h-20">
                <h2 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium flex items-center">
                  <span className="mr-2">I am a</span>
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-bold">
                    {displayText}
                  </span>
                  <span className="ml-1 w-1 h-8 bg-primary-600 dark:bg-primary-400 animate-pulse"></span>
                </h2>
              </div>
              
              <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                B.Tech CSE student at VVIT, Guntur (2022-2026) with hands-on experience 
                building full-stack applications using Python, Django, React, Node.js, and MongoDB. 
                Passionate about creating efficient, scalable solutions that make a difference.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary group"
              >
                Hire Me
                <ArrowRight size={18} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={handleDownloadResume}
                className="btn-secondary group inline-flex items-center cursor-pointer"
              >
                <Download size={18} className="mr-2 inline group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center space-x-6 pt-4">
              <a 
                href="https://github.com/Nanduvasanthi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/miriyala-nandu-vasanthi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin size={22} />
              </a>
              <a 
                href="mailto:nvasanthi2005@gmail.com" 
                className="social-icon"
              >
                <Mail size={22} />
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                100+ Users Supported
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 pt-6 lg:pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Role Tags */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap gap-2 pt-2"
            >
              {roles.map((role, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1.5 text-xs rounded-full font-medium border transition-all duration-300
                    ${index === roleIndex 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white border-transparent shadow-md scale-105' 
                      : 'bg-light-300 dark:bg-dark-100 text-gray-700 dark:text-gray-300 border-light-400 dark:border-dark-100 hover:border-primary-400 dark:hover:border-primary-600'
                    }`}
                >
                  {role}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          @apply text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 
                 transition-all duration-300 hover:-translate-y-1;
        }
      `}</style>
    </section>
  );
};

export default Home;
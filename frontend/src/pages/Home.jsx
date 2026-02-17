import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import profileImg from '../assets/images/profile.jpg';
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
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 100);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Nandu_Vasanthi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-transparent to-secondary-50/30 dark:from-primary-900/10 dark:to-secondary-900/10" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* PHOTO COLUMN */}
          <motion.div
            className="relative order-2 lg:order-1 lg:mt-32"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mx-auto max-w-md -translate-x-2">
              {/* Decorative blobs */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-400/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-secondary-400/30 rounded-full blur-2xl" />

              {/* Photo */}
              <div className="w-72 h-72 md:w-80 md:h-80 mx-auto">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-dark-200 overflow-hidden relative">
                    <img
                      src={profileImg}
                      alt="Nandu Vasanthi"
                      className="w-full h-full object-cover object-[45%_20%] rounded-full transition-transform duration-700 hover:scale-110"
                      onError={(e) => {
                        e.target.src =
                          'https://ui-avatars.com/api/?name=Nandu+Vasanthi&size=400&background=8B5CF6&color=fff&bold=true';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* Open to work badge */}
              <motion.div
                className="absolute -bottom-4 right-4 bg-white dark:bg-dark-200 px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Open to Work</span>
              </motion.div>
            </div>
          </motion.div>

          {/* TEXT COLUMN */}
          <motion.div
            className="space-y-8 order-1 lg:order-2 lg:mt-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Nandu Vasanthi
              </span>
            </h1>

            <h2 className="text-2xl font-medium text-gray-700 dark:text-gray-300">
              I am a{' '}
              <span className="font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {displayText}
              </span>
              <span className="ml-1 inline-block w-1 h-7 bg-primary-600 animate-pulse" />
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              B.Tech CSE student at VVIT, Guntur (2022–2026) with hands-on experience
              building full-stack applications using Python, Django, React, Node.js,
              and MongoDB.
            </p>

            <div className="flex gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Hire Me <ArrowRight size={18} />
              </a>

              <button onClick={handleDownloadResume} className="btn-secondary flex items-center gap-2">
                <Download size={18} /> Resume
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="https://github.com/Nanduvasanthi" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/miriyala-nandu-vasanthi/" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={22} />
              </a>
              <a href="mailto:nvasanthi2005@gmail.com" className="social-icon">
                <Mail size={22} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          @apply text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-transform hover:-translate-y-1;
        }
      `}</style>
    </section>
  );
};

export default Home;

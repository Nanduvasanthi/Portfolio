import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'education', 'tech-stack', 'projects', 'internships', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'education', name: 'Education' },
    { id: 'tech-stack', name: 'Tech Stack' },
    { id: 'projects', name: 'Projects' },
    { id: 'internships', name: 'Internships' },
    { id: 'contact', name: 'Contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-dark-200/90 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-3'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo/Name with Profile Circle */}
        <div className="flex items-center space-x-3">
          {/* Profile Symbol Circle */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 
                          flex items-center justify-center text-white shadow-lg cursor-pointer
                          hover:shadow-xl transition-all duration-300"
                 onClick={() => scrollToSection('home')}>
              {/* Initials or Icon */}
              <span className="text-base md:text-lg font-bold">NV</span>
              {/* Or use User icon instead of initials */}
              {/* <User size={24} /> */}
            </div>
            
            {/* Online Status Dot */}
            
          </motion.div>

          {/* Name */}
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 
                     bg-clip-text text-transparent hover:from-primary-500 hover:to-secondary-500 
                     transition-all duration-300"
          >
            Nandu Vasanthi
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`relative font-medium transition-all duration-300 px-1 py-2
                ${activeSection === link.id 
                  ? 'text-primary-600 dark:text-primary-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
            >
              {link.name}
              {/* Active Indicator */}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {/* Hover Indicator */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600 
                           transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          ))}

          {/* Theme Toggle Button */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-light-300 dark:bg-dark-100 text-gray-700 dark:text-gray-300 
                     hover:bg-light-400 dark:hover:bg-dark-100 transition-all duration-300
                     border border-light-400 dark:border-dark-100 ml-2"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="flex items-center space-x-3 md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-light-300 dark:bg-dark-100 text-gray-700 dark:text-gray-300"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          
          <button
            className="text-gray-700 dark:text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-dark-200 shadow-xl py-6 md:hidden
                       border-t border-light-400 dark:border-dark-100"
          >
            <div className="flex flex-col items-center space-y-5">
              {/* Mobile Profile Section */}
              <div className="flex items-center space-x-3 pb-4 mb-2 border-b border-light-400 dark:border-dark-100 w-full px-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 
                              flex items-center justify-center text-white">
                  <span className="text-lg font-bold">NV</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-900 dark:text-white">Nandu Vasanthi</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Full-Stack Developer</p>
                </div>
              </div>
              
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-all duration-300 px-4 py-2 w-full mx-6 rounded-lg
                    ${activeSection === link.id 
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-dark-100' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-light-200 dark:hover:bg-dark-100'
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
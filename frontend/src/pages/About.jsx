import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Sparkles,
  User,
  Globe,
  Clock,
  MapPin
} from 'lucide-react';

const About = () => {
  const { isDark } = useTheme();

  const quickFacts = [
    { label: 'Age', value: '21', icon: <User size={16} /> },
    { label: 'Languages', value: 'English, Telugu, Hindi', icon: <Globe size={16} /> },
    { label: 'Nationality', value: 'Indian', icon: <MapPin size={16} /> },
    { label: 'Freelance', value: 'Available', icon: <Clock size={16} />, highlight: true }
  ];

  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-dark-300 dark:to-dark-200">
      
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary-200/20 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/10 to-secondary-100/10 dark:from-primary-900/5 dark:to-secondary-900/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="section-title text-center mx-auto">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Passionate full-stack developer with a strong foundation in computer science 
            and a drive to build impactful solutions.
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Who am I? Card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white dark:bg-dark-200 rounded-3xl shadow-xl p-8 md:p-10 border border-slate-200 dark:border-dark-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-xl">
                <User className="text-primary-600 dark:text-primary-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Who am I?</h3>
            </div>
            
            <div className="space-y-4 text-slate-600 dark:text-slate-400">
              <p className="leading-relaxed text-lg">
                I'm a <span className="font-semibold text-primary-600 dark:text-primary-400">Full-Stack Developer</span> with a strong foundation in computer science 
                and a keen interest in building efficient, scalable web applications.
              </p>
              <p className="leading-relaxed">
                Currently in my final year of B.Tech at <span className="font-semibold text-slate-900 dark:text-white">VVIT, Guntur</span>, 
                I've gained practical experience through internships at <span className="font-semibold text-slate-900 dark:text-white">Infosys Springboard</span> 
                and personal projects that solve real-world problems.
              </p>
              <div className="flex items-center space-x-2 text-sm font-medium text-primary-600 dark:text-primary-400 pt-4">
               
              </div>
            </div>

            {/* Quick Facts - Moved inside Who am I? card */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-dark-100">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold mb-4">
                Quick Facts
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickFacts.map((fact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-dark-100 rounded-lg hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className={`p-1.5 rounded-lg ${fact.highlight ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' : 'bg-slate-200 dark:bg-dark-100 text-slate-600 dark:text-slate-400'}`}>
                      {fact.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{fact.label}</p>
                      <p className={`text-sm font-semibold ${fact.highlight ? 'text-green-600 dark:text-green-400' : 'text-slate-900 dark:text-white'}`}>
                        {fact.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500 group"
            >
              <span>Let's Work Together</span>
              <Sparkles size={18} className="ml-2 group-hover:rotate-12 transition-transform duration-500" />
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-4">
            Open for full-time opportunities • Internships • Freelance projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
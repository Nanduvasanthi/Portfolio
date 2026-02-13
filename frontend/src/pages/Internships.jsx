import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle, 
  Code,
  Sparkles,
  GraduationCap,
  Building2,
  Rocket
} from 'lucide-react';

const Internships = () => {
  const { isDark } = useTheme();

  const internships = [
    {
      company: 'Infosys Springboard',
      role: 'Python Full-Stack Developer Intern',
      duration: 'Sep 2025 - Nov 2025',
      location: 'Remote',
      type: 'Virtual Internship',
      description: 'Participated in a virtual internship program focused on full-stack development. Completed project-based learning and built a real-world application.',
      achievements: [
        'Developed StudyTrackAI - an AI-powered study tracking platform with smart notifications',
        'Implemented AI-powered email reminders and real-time progress tracking system',
        'Built multi-course support with individual progress analytics for students',
        'Created role-based access system for students and administrators'
      ],
      technologies: ['Python', 'Django', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'JWT'],
      project: 'StudyTrackAI',
      logo: '🏢',
      color: 'from-purple-500 to-indigo-500',
      lightColor: 'from-purple-50 to-indigo-50',
      darkColor: 'from-purple-500/10 to-indigo-500/10',
      stats: [
        { label: 'Duration', value: '2 Months' },
        { label: 'Project', value: '1' },
        { label: 'Technologies', value: '7+' }
      ]
    }
  ];

  // Animation Variants (matching all pages)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
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

  const cardHover = {
    rest: { y: 0, boxShadow: "0 20px 35px -10px rgba(0,0,0,0.05)" },
    hover: { 
      y: -6, 
      boxShadow: "0 30px 45px -12px rgba(0,0,0,0.15)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="internships" className="relative pt-8 lg:pt-8 pb-8 lg:pb-12 overflow-hidden bg-white dark:bg-dark-300">
      
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? '#ffffff' : '#0f172a'} 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="container-custom relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeInUp} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Internship
          </motion.h2>
          
          <motion.div 
            variants={scaleIn} 
            className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mb-6"
          />
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light"
          >
            Virtual internship experience in full-stack development
          </motion.p>
        </motion.div>

        {/* Internship Card */}
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className="relative"
            >
              
              
              {/* Main Card */}
              <motion.div 
                className="relative bg-white dark:bg-dark-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-slate-100 dark:border-dark-100 overflow-hidden md:ml-6"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${internship.color} p-6 md:p-8 text-white`}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-3.5 bg-white/20 backdrop-blur rounded-xl text-4xl">
                        {internship.logo}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-1.5">
                          {internship.company}
                        </h3>
                        <p className="text-white/90 flex items-center text-base">
                          <Briefcase size={16} className="mr-1.5" />
                          {internship.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                        <Calendar size={14} className="mr-1.5" />
                        {internship.duration}
                      </span>
                      <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
                        <MapPin size={14} className="mr-1.5" />
                        {internship.location}
                      </span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-6 mt-6 pt-4 border-t border-white/20">
                    {internship.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-white/80 text-sm">{stat.label}:</span>
                        <span className="text-sm font-semibold text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Description */}
                  <div className="mb-6">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {internship.description}
                    </p>
                  </div>

                  {/* Project Completed */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                      <Rocket size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                      Project Completed
                    </h4>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg">
                      <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                        {internship.project}
                      </span>
                    </div>
                  </div>

                  {/* Key Achievements - 4 points */}
                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                      <Award size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {internship.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle size={16} className="mr-2.5 flex-shrink-0 mt-0.5 text-purple-600 dark:text-purple-400" />
                          <span className="text-sm text-slate-600 dark:text-slate-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                      <Code size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 dark:bg-dark-100 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Summary */}
        <motion.div 
          className="mt-8 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-full">
            <GraduationCap size={18} className="mr-2 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              Virtual Internship • Project-Based Learning
            </span>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500"
            >
              <Building2 size={20} className="mr-2" />
              Open for Opportunities
            </a>
          </div>
          <p className="text-slate-500 dark:text-slate-500 text-sm mt-4">
            Virtual internship completed • Ready for next challenge
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;
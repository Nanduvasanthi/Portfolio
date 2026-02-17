import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen,
  CheckCircle,
  Sparkles,
  School,
  Clock
} from 'lucide-react';

const Education = () => {
  const { isDark } = useTheme();

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'VVIT, Guntur',
      fullInstitution: 'Visoredly Venkatadri Institute of Technology, Guntur',
      duration: '2022 - 2026',
      score: '8.44 CGPA',
      icon: <GraduationCap size={28} />,
      color: 'from-emerald-500 to-teal-500',
      lightColor: 'from-emerald-50 to-teal-50',
      darkColor: 'from-emerald-500/10 to-teal-500/10',
      subjects: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering'
      ],
      stats: [
        { label: 'Current Year', value: '4th Year' },
        { label: 'Projects', value: '3+' },
        { label: 'CGPA', value: '8.44' }
      ]
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Sri Chaitanya, Guntur',
      fullInstitution: 'Sri Chaitanya Junior College, Guntur',
      duration: '2020 - 2022',
      score: '96.2%',
      icon: <BookOpen size={28} />,
      color: 'from-orange-500 to-amber-500',
      lightColor: 'from-orange-50 to-amber-50',
      darkColor: 'from-orange-500/10 to-amber-500/10',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English'
      ],
      stats: [
        { label: 'Percentage', value: '96.2%' },
      
      ]
    },
    {
      degree: 'SSC',
      institution: 'Presidency High School, Guntur',
      fullInstitution: 'Presidency High School, Guntur',
      duration: '2019 - 2020',
      score: '87%',
      icon: <School size={28} />,
      color: 'from-blue-500 to-cyan-500',
      lightColor: 'from-blue-50 to-cyan-50',
      darkColor: 'from-blue-500/10 to-cyan-500/10',
      subjects: [
        'Mathematics',
        'Science',
        'Social Studies',
        'English',
        'Telugu',
        'Hindi'
      ],
      stats: [
        { label: 'Percentage', value: '87%' },
       
      ]
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
    <section id="education" className="relative pt-12 lg:pt-16 pb-8 lg:pb-12  overflow-hidden bg-white dark:bg-dark-300">
      
      {/* Minimalist Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-emerald-100/40 dark:bg-emerald-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-teal-100/40 dark:bg-teal-900/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? '#ffffff' : '#0f172a'} 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="container-custom relative z-10 max-w-6xl">
        
        {/* Section Header - Clean & Minimal */}
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
            Education
          </motion.h2>
          
          <motion.div 
            variants={scaleIn} 
            className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6"
          />
          
          <motion.p 
            variants={fadeInUp} 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light"
          >
            Academic foundation built on consistency and excellence
          </motion.p>
        </motion.div>

        {/* Education Cards - Clean Timeline */}
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInLeft}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-3 top-12 w-6 h-6 hidden md:block">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.color}`}></div>
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${edu.color} animate-ping opacity-30`} style={{ animationDuration: '3s' }}></div>
              </div>
              
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <div className="absolute left-0 top-20 bottom-0 w-0.5 hidden md:block">
                  <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900"></div>
                </div>
              )}
              
              {/* Main Card */}
              <motion.div 
                className="relative bg-white dark:bg-dark-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-slate-100 dark:border-dark-100 overflow-hidden md:ml-6"
                variants={cardHover}
                initial="rest"
                whileHover="hover"
              >
                {/* Header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3.5 bg-gradient-to-r ${edu.color} rounded-xl text-white shadow-md`}>
                        {edu.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                          {edu.degree}
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 flex items-center text-base">
                          <MapPin size={16} className="mr-1.5 flex-shrink-0" />
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-dark-100 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300">
                        <Calendar size={14} className="mr-1.5" />
                        {edu.duration}
                      </span>
                      <span className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${edu.lightColor} dark:${edu.darkColor} rounded-full text-sm font-medium text-slate-700 dark:text-slate-300`}>
                        <Award size={14} className="mr-1.5" />
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-slate-100 dark:border-dark-100">
                    {edu.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-xs text-slate-500 dark:text-slate-500">{stat.label}:</span>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subjects Only */}
                <div className="px-6 md:px-8 pb-8">
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <BookOpen size={18} className="mr-2 text-slate-500" />
                    Core Subjects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-dark-100 text-slate-600 dark:text-slate-400 rounded-lg text-xs font-medium"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Simple Academic Summary */}
        <motion.div 
          className="mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
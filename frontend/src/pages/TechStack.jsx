import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Globe, 
  Smartphone,
  Gauge,
  Shield,
  Cpu,
  Brain,
  Blocks,
  Sparkles
} from 'lucide-react';

const TechStack = () => {
  const { isDark } = useTheme();

  const skills = {
    frontend: {
      title: 'Frontend Development',
      icon: <Globe size={24} />,
      color: 'from-pink-500 to-rose-500',
      technologies: [
        'React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server size={24} />,
      color: 'from-purple-500 to-indigo-500',
      technologies: [
        'Python', 'Django', 'Node.js', 'Express.js', 'RESTful APIs', 'JWT'
      ]
    },
    database: {
      title: 'Database Management',
      icon: <Database size={24} />,
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        'MySQL', 'MongoDB', 'Mongoose', 'Database Design', 'Query Optimization'
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      color: 'from-amber-500 to-orange-500',
      technologies: [
        'Java', 'Git', 'Postman', 'VS Code', 'MongoDB Compass'
      ]
    }
  };

  const otherSkills = [
    { name: 'Problem Solving', icon: <Brain size={18} /> },
    { name: 'Team Collaboration', icon: <Blocks size={18} /> },
    { name: 'Communication', icon: <Globe size={18} /> },
    { name: 'Agile', icon: <Gauge size={18} /> },
    { name: 'Debugging', icon: <Shield size={18} /> },
    { name: 'Performance', icon: <Cpu size={18} /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="tech-stack" className="relative  pt-0 lg:pt-0 pb-4 lg:pb-8  overflow-hidden bg-white dark:bg-dark-300">
      
      {/* Minimal Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-pink-100/40 dark:bg-pink-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? '#ffffff' : '#0f172a'} 1px, transparent 0)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="container-custom relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-2 bg-slate-100 dark:bg-dark-100 text-slate-600 dark:text-slate-400 rounded-full text-sm font-medium inline-block mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Tech <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid - Just Icons and Lists */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.values(skills).map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 border border-slate-100 dark:border-dark-100 h-full">
                
                {/* Header */}
                <div className="flex items-center mb-5">
                  <div className={`p-2.5 bg-gradient-to-r ${category.color} rounded-lg text-white shadow-sm`}>
                    {category.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white ml-3">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List - Just Names */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-dark-100 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        {/* Learning Journey */}
        
      </div>
    </section>
  );
};

export default TechStack;
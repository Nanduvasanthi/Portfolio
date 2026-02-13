import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Code Translator & Compiler Platform',
      image: 'https://github.com/user-attachments/assets/8ad5f841-4ce5-4a42-8926-dac74078c71b',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'JDoodle API'],
      description: 'AST-based platform supporting code translation across Java, Python, and C with secure authentication.',
      demo: 'https://github.com/Nanduvasanthi/code-translator',
      github: 'https://github.com/Nanduvasanthi/code-translator'
    },
    {
      id: 2,
      title: 'Task Management Dashboard',
      image: 'https://github.com/user-attachments/assets/ad5a7029-86e2-41c3-a9b4-f09bc837f793',
      tech: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
      description: 'Full-stack task management with JWT authentication and complete CRUD functionality.',
      demo: 'https://task-manager-frontend-v8h1.onrender.com',
      github: 'https://github.com/Nanduvasanthi/task-management'
    },
    {
      id: 3,
      title: 'Fullstack Admin Dashboard',
      image: 'https://github.com/user-attachments/assets/c568dfcc-af56-4c03-9470-394fc607256d',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Multer', 'Hook Form'],
      description: 'Admin panel for managing projects, client testimonials, and contact submissions.',
      demo: 'https://github.com/Nanduvasanthi/fullstack-admin-dashboard',
      github: 'https://github.com/Nanduvasanthi/fullstack-admin-dashboard'
    }
  ];

  // Animation Variants (same as About page)
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
    <section id="projects" className="relative py-20 bg-gradient-to-b from-slate-50 to-white dark:from-dark-300 dark:to-dark-200 overflow-hidden">
      
      {/* Sophisticated Background Elements (same as About) */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary-200/20 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-100/10 to-secondary-100/10 dark:from-primary-900/5 dark:to-secondary-900/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle Grid Pattern (same as About) */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container-custom max-w-6xl mx-auto relative z-10">
        
        {/* Section Header (same as About) */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Featured <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.div variants={fadeIn} className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full mb-4"></motion.div>
          
          <motion.p variants={fadeIn} className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Here are some of my recent works
          </motion.p>
        </motion.div>

        {/* Projects Grid - 2 per row with larger cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInRight}
              whileHover={{ 
                y: -6,
                boxShadow: "0 30px 45px -12px rgba(0,0,0,0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white dark:bg-dark-200 rounded-xl overflow-hidden border border-slate-200 dark:border-dark-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Image with subtle zoom */}
              <div className="relative h-56 overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech tags with hover effect (same as quick facts) */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 5).map((tech, idx) => (
                    <motion.span 
                      key={idx}
                      whileHover={{ y: -2 }}
                      className="px-3 py-1 bg-slate-100 dark:bg-dark-100 text-slate-600 dark:text-slate-400 rounded-md text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-3 py-1 bg-slate-100 dark:bg-dark-100 text-slate-600 dark:text-slate-400 rounded-md text-sm">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-dark-100">
                  <span className="text-sm text-slate-500 dark:text-slate-500">
                    <Code2 size={16} className="inline mr-1" />
                    {project.tech.length} technologies
                  </span>
                  <div className="flex gap-3">
                    <motion.a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
                      title="Source Code"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub link (same as CTA in About) */}
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
              href="https://github.com/Nanduvasanthi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500"
            >
              <Github size={20} className="mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Papersave Implementation',
    description:
      'Led the implementation of Papersave Cloud Document Management, acting as the primary liaison between the AP team and IT Manager. Translated AP requirements into system configurations for improved document organization.',
    technologies: ['Papersave', 'System Implementation', 'Project Management'],
  },
  {
    title: 'Reporting Automation',
    description:
      'Implemented reporting automation using Microsoft Dynamics GP and Power BI. Reduced manual data entry and improved the accuracy of financial reporting for budgeting and forecasting.',
    technologies: ['Power BI', 'Dynamics GP', 'SQL', 'Automation'],
  },
  {
    title: 'Dynamics GP Customization',
    description:
      'Collaborated with the AR team to develop and customize invoice templates within Microsoft Dynamics GP. Improved formatting and delivery efficiency for customer invoices.',
    technologies: ['Dynamics GP', 'Report Writer', 'Template Design'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden hover:shadow-xl transition-shadow p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
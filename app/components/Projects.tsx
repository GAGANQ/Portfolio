'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Multi-Company Financial Management',
    description:
      'Successfully managed accounts payable operations for multiple companies within Friesen Group, implementing efficient processes and ensuring accurate financial reporting.',
    technologies: ['Microsoft Dynamics 365', 'Payroll Systems', 'Document Management'],
  },
  {
    title: 'Financial Process Automation',
    description:
      'Led the implementation of automated financial processes, including payroll stub customization and invoice report generation, resulting in improved efficiency.',
    technologies: ['Process Automation', 'Financial Reporting', 'System Integration'],
  },
  {
    title: 'Accounts Receivable Optimization',
    description:
      'Streamlined accounts receivable processes at Triple Eight Transport, implementing efficient payment processing and reconciliation systems.',
    technologies: ['Moneris', 'PeopleNet', 'Financial Analysis'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
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
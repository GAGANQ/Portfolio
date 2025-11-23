'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Accounts Payable & Receivable', level: 95, category: 'Financial' },
  { name: 'Payroll Processing', level: 90, category: 'Financial' },
  { name: 'Financial Reporting', level: 90, category: 'Financial' },
  { name: 'Tax Compliance', level: 85, category: 'Financial' },
  { name: 'Bank Reconciliation', level: 90, category: 'Financial' },
  { name: 'Microsoft Dynamics 365', level: 90, category: 'Technical' },
  { name: 'SAP', level: 85, category: 'Technical' },
  { name: 'QuickBooks', level: 90, category: 'Technical' },
  { name: 'Power BI & SQL', level: 85, category: 'Technical' },
  { name: 'Process Automation', level: 85, category: 'Technical' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Financial Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">Financial Skills</h3>
            {skills
              .filter((skill) => skill.category === 'Financial')
              .map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
            {skills
              .filter((skill) => skill.category === 'Technical')
              .map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-blue-600 h-2.5 rounded-full"
                    />
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
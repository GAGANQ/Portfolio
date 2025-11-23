'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'University of the Fraser Valley',
    position: 'Officer, Accounts Payable',
    period: 'May 2025 - Present',
    location: 'Abbotsford, BC',
    description: [
      'Manage full-cycle accounts payable, processing high-volume invoices and reconciling vendor statements',
      'Ensure accurate coding of expenses to proper cost accounts in compliance with GAAP',
      'Administer EFT and cheque disbursements; reconcile AP sub-ledger to general ledger',
      'Leverage Banner ERP and CentreSuite for invoice processing and expense reporting',
      'Collaborate with IT and finance to implement process improvements',
    ],
  },
  {
    company: 'Friesen Group of Companies',
    position: 'Senior Accounts Payable & Payroll Administrator',
    period: 'Oct 2023 - May 2025',
    location: 'Abbotsford, BC',
    description: [
      'Processed 60+ invoices daily and managed payroll for 80+ employees across 10+ entities',
      'Led budgeting, forecasting, and GST audit preparation',
      'Implemented reporting automation using Papersave, Dynamics GP, and Power BI',
      'Acted as liaison between AP team and IT Manager during Papersave implementation',
      'Collaborated with AR team to customize Dynamics GP invoice templates',
    ],
  },
  {
    company: 'Triple Eight Transport',
    position: 'Senior Accounts Receivable Officer',
    period: 'Jun 2023 - Oct 2023',
    location: 'Abbotsford, BC',
    description: [
      'Managed end-to-end AR processing, credit control, and collections',
      'Maintained AR aging reports, reconciliations, and month-end journal entries',
      'Provided cross-functional support to AP and payroll',
    ],
  },
  {
    company: 'EPro Consultants Ltd',
    position: 'Accounts Payable & Receivable Specialist',
    period: 'Jun 2022 - Oct 2022',
    location: 'Abbotsford, BC',
    description: [
      'Managed AP/AR workflows, bank reconciliations, and GL entries',
      'Assisted with GST/HST remittance and financial documentation for compliance',
    ],
  },
  {
    company: "McDonald's Canada",
    position: 'Manager',
    period: 'May 2018 - Sep 2022',
    location: 'Abbotsford, BC',
    description: [
      'Promoted through multiple roles to lead shift operations and team training',
      'Ensured customer service excellence and operational efficiency',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gray-700 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
            >
              <div className="md:w-5/12">
                <div className="glass-card p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{experience.position}</h3>
                    <span className="text-sm text-gray-400">{experience.period}</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-2">{experience.company}</h4>
                  <p className="text-sm text-gray-400 mb-4">{experience.location}</p>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-400 mt-1 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
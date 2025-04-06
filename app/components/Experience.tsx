'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Friesen Group of Companies',
    position: 'Senior Accounts Payable & Payroll Administrator',
    period: 'Oct 2023 - Present',
    location: 'Abbotsford, BC',
    description: [
      'Manage accounts payable operations for multiple companies, ensuring invoice processing and vendor reconciliations',
      'Conduct bank reconciliations, budgeting, and financial forecasting',
      'Oversee payroll processing using TimeClock Plus & ADP systems',
      'Lead new software implementations and serve as liaison between IT and accounting',
      'Develop customized payroll stubs and invoice reports in Microsoft Dynamics GP',
      'Utilize Papersave Cloud Document Management for document organization and approvals',
    ],
  },
  {
    company: 'Triple Eight Transport',
    position: 'Senior Accounts Receivable Officer',
    period: 'Jun 2023 - Oct 2023',
    location: 'Abbotsford, BC',
    description: [
      'Led AR transactions, invoicing, and financial reporting',
      'Managed credit card payments and bank deposits',
      'Processed Moneris payments and reconciled PeopleNet transactions',
      'Assisted with financial statement preparation and aging reports',
      'Provided cross-functional support in payroll processing',
    ],
  },
  {
    company: 'EPro Consultants Ltd',
    position: 'Accounts Payable & Receivable Specialist',
    period: 'Jun 2022 - Oct 2022',
    location: 'Abbotsford, BC',
    description: [
      'Managed AP & AR functions, ensuring timely payments and collections',
      'Handled cash flow records and prepared bank reconciliations',
      'Generated detailed financial reports',
      'Assisted in payroll processing and tax compliance',
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gray-200 md:left-1/2 md:transform md:-translate-x-1/2"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:flex ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <div className="md:w-5/12">
                <div className="glass-card p-6 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{experience.position}</h3>
                    <span className="text-sm text-gray-500">{experience.period}</span>
                  </div>
                  <h4 className="text-lg text-blue-600 mb-2">{experience.company}</h4>
                  <p className="text-sm text-gray-500 mb-4">{experience.location}</p>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-1 mr-2"
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
                        <span className="text-gray-600">{item}</span>
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
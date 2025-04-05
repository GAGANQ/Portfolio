'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Gagandeep Dhaliwal
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Accounts Payable & Receivable Specialist | Payroll Administrator
          </p>
          <p className="text-lg text-gray-500 max-w-2xl">
            Results-driven professional with 4+ years of experience in financial management, 
            accounting operations, and ERP system optimization. Expert in Microsoft Dynamics 365, 
            SAP, QuickBooks, and Power BI, with a strong background in process automation and 
            financial reporting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid md:grid-cols-2 gap-8 w-full max-w-4xl"
        >
          {/* Financial Expertise Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Financial Expertise
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• Accounts Payable & Receivable</li>
              <li>• Payroll Processing & Administration</li>
              <li>• Financial Reporting & Analysis</li>
              <li>• Tax Compliance & Audit Preparation</li>
            </ul>
          </div>

          {/* Technical Expertise Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Technical Expertise
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li>• ERP Systems (Dynamics 365, SAP)</li>
              <li>• Financial Software (QuickBooks, Sage 50)</li>
              <li>• Data Analysis (Power BI, Crystal Reports)</li>
              <li>• Process Automation & Optimization</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex space-x-4"
        >
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
          >
            View Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
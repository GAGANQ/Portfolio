'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center dot-pattern">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/profile.jpg"
          alt="Gagandeep Dhaliwal"
          fill
          className="object-cover opacity-50"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 max-w-3xl"
        >
          <h2 className="gradient-text text-xl md:text-2xl font-medium mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Gagandeep Dhaliwal
          </h1>
          <div className="gradient-border mb-8">
            <p className="text-xl md:text-2xl text-gray-300 p-4">
              Accounts Payable & Receivable Specialist | Payroll Administrator
            </p>
          </div>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            Results-driven professional with 4+ years of experience in financial management, 
            accounting operations, and ERP system optimization. Expert in Microsoft Dynamics 365, 
            SAP, QuickBooks, and Power BI.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 flex items-center hover-lift"
            >
              Contact Me
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="#projects"
              className="glass-card px-8 py-3 text-white hover-lift"
            >
              View Projects
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white">
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="glass-card w-6 h-10 flex justify-center p-2">
                <motion.div
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-1 h-1 bg-white rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
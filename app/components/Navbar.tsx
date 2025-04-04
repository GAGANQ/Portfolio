'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Gagandeep Dhaliwal
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
            <Link href="#experience" className="text-gray-600 hover:text-gray-900">Experience</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</Link>
            <Link href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Skills</Link>
            <Link href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Experience</Link>
            <Link href="#projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Projects</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 
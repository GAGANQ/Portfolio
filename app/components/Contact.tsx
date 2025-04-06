'use client';

import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Add this to verify EmailJS is loaded
  const [isEmailJSLoaded, setIsEmailJSLoaded] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      emailjs.init(emailjsConfig.publicKey);
      setIsEmailJSLoaded(true);
      console.log('EmailJS initialized with config:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        publicKey: emailjsConfig.publicKey.substring(0, 4) + '...'
      });
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to initialize email service. Please try again later.',
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');
    
    if (!formRef.current) {
      console.error('Form reference is not available');
      return;
    }

    if (!isEmailJSLoaded) {
      console.error('EmailJS not initialized');
      setSubmitStatus({
        type: 'error',
        message: 'Email service not initialized. Please refresh the page and try again.',
      });
      return;
    }
    
    // Clear previous status and set submitting state
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: 'Starting submission...' });

    try {
      // Get form data
      const form = formRef.current;
      const name = form.user_name.value;
      const email = form.user_email.value;
      const subject = form.subject.value;
      const message = form.message.value;

      // Log the actual values being sent
      console.log('Form values:', { name, email, subject, message });

      // Create template parameters object
      const templateParams = {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message
      };

      console.log('Attempting to send email with params:', templateParams);
      console.log('Using EmailJS config:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId
      });

      // Update UI to show sending state
      setSubmitStatus({
        type: null,
        message: 'Sending your message...'
      });

      // Send the email
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('EmailJS Response:', result);

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });
        form.reset();
      } else {
        throw new Error(`Failed to send message: ${result.text}`);
      }
    } catch (error: any) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        type: 'error',
        message: `Failed to send message: ${error.message || 'Unknown error'}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <p className="text-gray-600 text-center mb-12">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  autoComplete="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Subject of your message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={6}
                autoComplete="off"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                disabled={isSubmitting || !isEmailJSLoaded}
                className={`relative w-full md:w-auto min-w-[200px] px-8 py-3 text-white rounded-lg font-medium transition-all
                  ${(isSubmitting || !isEmailJSLoaded)
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                <span className="flex items-center justify-center">
                  {isSubmitting && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </button>

              {/* Status message */}
              {(submitStatus.message || !isEmailJSLoaded) && (
                <div
                  className={`w-full p-4 rounded-lg text-center ${
                    submitStatus.type === 'success'
                      ? 'bg-green-100 text-green-700 border-2 border-green-500'
                      : submitStatus.type === 'error'
                      ? 'bg-red-100 text-red-700 border-2 border-red-500'
                      : 'bg-blue-100 text-blue-700 border-2 border-blue-500'
                  }`}
                >
                  <div className="flex items-center justify-center">
                    {submitStatus.type === 'success' && (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                    {submitStatus.type === 'error' && (
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                    <span className="font-medium">
                      {!isEmailJSLoaded 
                        ? 'Initializing email service...' 
                        : submitStatus.message}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
            <a
              href="mailto:gagandhaliwal1997@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              gagandhaliwal1997@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
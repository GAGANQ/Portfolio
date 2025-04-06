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

  useEffect(() => {
    // Initialize EmailJS with your public key
    try {
      emailjs.init(emailjsConfig.publicKey);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Error initializing EmailJS:', error);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error('Form reference is not available');
      return;
    }
    
    // Clear previous status and set submitting state
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Get form data
      const form = formRef.current;
      const name = form.user_name.value;
      const email = form.user_email.value;
      const subject = form.subject.value;
      const message = form.message.value;

      // Log the actual values being sent
      console.log('Sending form with values:', {
        name,
        email,
        subject,
        message
      });

      const templateParams = {
        user_name: name,
        user_email: email,
        subject: subject,
        message: message,
      };

      // Show sending state
      setSubmitStatus({
        type: null,
        message: 'Sending your message...'
      });

      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('EmailJS response:', result);

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        form.reset();
      } else {
        throw new Error(`Failed to send message: ${result.text}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.',
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all
                  ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {(isSubmitting || submitStatus.message) && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`w-full md:w-96 text-center p-4 rounded-lg shadow-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-700 border border-green-300' 
                      : submitStatus.type === 'error'
                      ? 'bg-red-100 text-red-700 border border-red-300'
                      : 'bg-blue-100 text-blue-700 border border-blue-300'
                  }`}
                >
                  {isSubmitting ? 'Sending your message...' : submitStatus.message}
                </motion.div>
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
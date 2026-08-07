import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '../../context/ContactContext';
import { X, Github, Linkedin, Twitter } from 'lucide-react';

const ContactModal: React.FC = () => {
  const { isOpen, closeModal } = useContactModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white dark:bg-[#111111] rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
                Contact Us
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Please reach out to us and we will get back to you at the speed of light.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Manu Arora"
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="hello@johndoe.com"
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label htmlFor="company" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Aceternity Labs, LLC"
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message here"
                  className="w-full px-3 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-800 rounded-lg text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg text-sm hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white dark:focus:ring-offset-[#111111]"
              >
                Submit
              </button>
            </form>

            {/* Social Icons Footer */}
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors" aria-label="Twitter/X">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

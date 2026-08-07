import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContactModal } from '../../context/ContactContext';
import { X } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

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
            className="relative w-full max-w-3xl bg-white dark:bg-[#09090b] rounded-[1.5rem] p-8 md:p-10 shadow-2xl border border-gray-200 dark:border-white/5 flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-900 dark:text-zinc-500 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-8 max-w-xl">
              <h2 className="text-[32px] font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                Contact Us
              </h2>
              <p className="text-[16px] text-gray-600 dark:text-zinc-400 leading-relaxed">
                Please reach out to us and we will get back to you at the speed of light.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); closeModal(); }}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[14px] font-medium text-gray-700 dark:text-zinc-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Manu Arora"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-[#18181b] border-none rounded-xl text-gray-900 dark:text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/20 transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[14px] font-medium text-gray-700 dark:text-zinc-300">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="hello@johndoe.com"
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-[#18181b] border-none rounded-xl text-gray-900 dark:text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/20 transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="text-[14px] font-medium text-gray-700 dark:text-zinc-300">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Aceternity Labs, LLC"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-[#18181b] border-none rounded-xl text-gray-900 dark:text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/20 transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[14px] font-medium text-gray-700 dark:text-zinc-300">
                  message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message here"
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-[#18181b] border-none rounded-xl text-gray-900 dark:text-white text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-300 dark:focus:ring-white/20 transition-all placeholder:text-gray-400 dark:placeholder:text-zinc-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 mt-2 bg-gray-900 text-white dark:bg-white dark:text-black font-semibold rounded-full text-[15px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-[#09090b] focus:ring-gray-900 dark:focus:ring-white"
              >
                Submit
              </button>
            </form>

            {/* Social Icons Footer */}
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-zinc-500 dark:hover:text-white transition-colors" aria-label="Twitter/X">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-zinc-500 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:text-zinc-500 dark:hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

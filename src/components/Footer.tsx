import React from 'react';
import { ShinyButton } from './ui/shiny-button';
import { useContactModal } from '../context/ContactContext';

const Footer: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <footer className="bg-[#0f1136] text-white py-20 px-8 relative z-10" id="contact">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Brand and CTA */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <div className="navbar-logo inline-block mb-4">
            <a href="#" className="flex items-center">
              <img src="/logo-dark.png" alt="ajtrix" className="h-10 object-contain" />
            </a>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to bring your <br className="hidden md:block"/> ideas to life?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0">
            Let's collaborate to build something extraordinary. Our team is ready to tackle your next big challenge.
          </p>
        </div>

        {/* Right Side: The Shiny Button CTA */}
        <div className="flex-shrink-0">
          <ShinyButton onClick={openModal} className="py-4 px-8 text-lg shadow-2xl">
            Start a Project Today
          </ShinyButton>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ajtrix Technologies. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

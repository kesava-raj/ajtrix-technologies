import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { ShinyButton } from './ui/shiny-button';
import { useContactModal } from '../context/ContactContext';

const Footer: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <footer className="bg-[#0f1136] text-white py-12 md:py-16 px-8 relative z-10" id="contact">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Brand and CTA */}
        <div className="text-center md:text-left space-y-6 flex-1">
          <div className="navbar-logo inline-block mb-4">
            <a href="#" className="flex items-center">
              <img src="/logo-dark.png" alt="ajtrix" className="h-10 object-contain" />
            </a>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your <br className="hidden md:block"/> Digital Presence?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed">
            Whether you need a custom website built from scratch or want to launch quickly with one of our industry templates, we're here to make it happen.
          </p>
        </div>

        {/* Right Side: The Shiny Button CTA */}
        <div className="flex-shrink-0">
          <ShinyButton onClick={openModal} className="py-4 px-8 text-lg shadow-2xl">
            Let's Start a Conversation
          </ShinyButton>
        </div>
      </div>
      
      {/* Middle Grid: Links and Contact */}
      <div className="max-w-5xl mx-auto mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-left">
        {/* Location & Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Location & Contact</h4>
          <p className="text-gray-400 leading-relaxed">
            Ajtrix Technologies<br />
            Chennai, Tamil Nadu, India
          </p>
          <div className="space-y-2 pt-2">
            <a href="mailto:hello@ajtrix.com" className="text-indigo-400 hover:text-indigo-300 transition-colors block font-medium">hello@ajtrix.com</a>
          </div>
        </div>

        {/* Core Services */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Core Services</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/services" className="hover:text-white transition-colors block">AI Voice Agents</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">Enterprise Portals</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">B2B Automation</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors block">Custom Web Apps</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><button onClick={openModal} className="hover:text-white transition-colors text-left block">Book a Demo</button></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors block">Our Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors block">About Us</Link></li>
            <li><Link to="/team" className="hover:text-white transition-colors block">Our Team</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-5xl mx-auto mt-12 md:mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ajtrix Technologies. All rights reserved.</p>
        
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
            <span className="sr-only">X (Twitter)</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:hello@ajtrix.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="flex space-x-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

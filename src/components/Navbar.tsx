import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useContactModal } from '../context/ContactContext';
import { ShinyButton } from './ui/shiny-button';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { openModal } = useContactModal();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo Placeholder */}
          <div className="navbar-logo">
            <Link to="/">
              <span className="logo-text">ajtrix</span>
              <span className="logo-asterisk">*</span>
            </Link>
          </div>

          {/* Desktop Navigation Pill */}
          <div className="navbar-links-desktop">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side - Contact Button & Mobile Toggle */}
          <div className="navbar-right">
            <ShinyButton onClick={openModal} className="desktop-only">
              CONTACT US
            </ShinyButton>
            
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="navbar-logo">
            <Link to="/" onClick={toggleMenu}>
              <span className="logo-text">ajtrix</span>
              <span className="logo-asterisk">*</span>
            </Link>
          </div>
          <button className="mobile-close-btn" onClick={toggleMenu} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="mobile-menu-links">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="mobile-nav-link" onClick={toggleMenu}>
              {link.name}
              <span className="link-arrow">⌝</span>
            </Link>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <ShinyButton onClick={() => { toggleMenu(); openModal(); }} className="mobile-contact-btn w-full">
            CONTACT US
          </ShinyButton>
        </div>
      </div>

      {/* Floating Theme Toggle */}
      <button className="floating-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'dark' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        )}
      </button>
    </>
  );
};

export default Navbar;

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import MoltenMetal from './components/MoltenMetal';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';
import AboutSummary from './components/AboutSummary';
import ServicesSummary from './components/ServicesSummary';
import PortfolioSummary from './components/PortfolioSummary';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import CookieConsent from './components/CookieConsent';
import { SeoHead } from './components/SeoHead';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import PortfolioPage from './pages/PortfolioPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import { useTheme } from './context/ThemeContext';
import { ContactProvider } from './context/ContactContext';
import { trackPageView } from './lib/analytics';
import './App.css';

const PageTracker = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
};

const HomePage = () => (
  <>
    <SeoHead
      title="Ajtrix Technologies | Web Design, Custom Software & Digital Growth in Chennai & Chicago"
      description="Ajtrix Technologies builds custom websites, brand identities, digital marketing campaigns, custom software, digital transformation roadmaps, and business presentations from Chennai, Tamil Nadu and Chicago, Illinois."
      path="/"
      keywords="Web Design Chennai, Web Development Tamil Nadu, Custom Software Chicago, Digital Marketing Illinois, Branding Agency Chennai, Ajtrix Technologies"
    />

    {/* Hero Section */}
    <HeroSection />

    {/* About Summary Section */}
    <AboutSummary />

    {/* Services Summary Section */}
    <ServicesSummary />

    {/* Portfolio Summary Section */}
    <PortfolioSummary />

    {/* Testimonials */}
    <TestimonialSection />

    {/* FAQ Section (AEO / GEO) */}
    <FaqSection />

    {/* Contact Section */}
    <ContactSection />
  </>
);

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <PageTracker />
      <ContactProvider>
        <div className="app-container">
          <div className="background-canvas">
            <MoltenMetal 
              color1={theme === 'dark' ? "#050512" : "#ffffff"} 
              color2={theme === 'dark' ? "#4B51C3" : "#818cf8"} 
              color3={theme === 'dark' ? "#ffffff" : "#121543"} 
            />
          </div>
          
          <div className="content-overlay flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/services/:slug" element={<ServiceDetailPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
          <CookieConsent />
        </div>
      </ContactProvider>
    </Router>
  );
}

export default App;

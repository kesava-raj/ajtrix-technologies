import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoltenMetal from './components/MoltenMetal';
import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import ServicesSummary from './components/ServicesSummary';
import ServicesPage from './pages/ServicesPage';
import { useTheme } from './context/ThemeContext';
import { ContactModalProvider } from './context/ContactContext';
import ContactModal from './components/ui/contact-modal';
import './App.css';

const HomePage = () => (
  <>
    {/* Hero Section Placeholder */}
    <section className="hero-section" id="home">
      {/* Empty for now, takes up 100vh so MoltenMetal shows through */}
    </section>

    {/* Services Summary Section */}
    <ServicesSummary />

    {/* Team Section */}
    <TeamSection />
  </>
);

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <ContactModalProvider>
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
                <Route path="/services" element={<ServicesPage />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
          
          <ContactModal />
        </div>
      </ContactModalProvider>
    </Router>
  );
}

export default App;

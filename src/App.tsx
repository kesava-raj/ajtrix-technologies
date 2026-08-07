import MoltenMetal from './components/MoltenMetal';
import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import { useTheme } from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';
import { ContactModalProvider } from './context/ContactContext';
import ContactModal from './components/ui/contact-modal';
import './App.css';
function App() {
  const { theme } = useTheme();

  return (
    <ContactModalProvider>
      <div className="app-container">
        <div className="background-canvas">
          <MoltenMetal 
          color1={theme === 'dark' ? "#050512" : "#ffffff"} 
          color2={theme === 'dark' ? "#4B51C3" : "#818cf8"} 
          color3={theme === 'dark' ? "#ffffff" : "#121543"} 
        />
      </div>
      
      <div className="content-overlay">
        <Navbar />
        
        {/* Hero Section Placeholder */}
        <section className="hero-section" id="home">
          {/* Empty for now, takes up 100vh so MoltenMetal shows through */}
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Footer */}
        <Footer />
      </div>
      
      <ContactModal />
    </div>
    </ContactModalProvider>
  );
}

export default App;

import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface ContactContextType {
  initialService: string | null;
  scrollToContact: (service?: string) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [initialService, setInitialService] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (service?: string) => {
    setInitialService(service ?? null);

    if (location.pathname === '/') {
      const el = document.getElementById('get-in-touch');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (location.hash !== '#get-in-touch') {
        navigate('/#get-in-touch', { replace: true });
      }
      return;
    }

    navigate('/#get-in-touch');
  };

  return (
    <ContactContext.Provider value={{ initialService, scrollToContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = (): ContactContextType => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};

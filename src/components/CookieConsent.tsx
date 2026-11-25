import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';
import {
  getConsentStatus,
  initGoogleAnalytics,
  OPEN_COOKIE_BANNER_EVENT,
  setConsentStatus,
} from '../lib/analytics';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const existing = getConsentStatus();
    if (existing === 'accepted') {
      initGoogleAnalytics();
    } else if (existing === null) {
      setIsVisible(true);
    }

    const handleOpen = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, handleOpen);
  }, []);

  const handleAccept = () => {
    setConsentStatus('accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setConsentStatus('declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:bottom-6 sm:left-6 sm:max-w-md z-[90] rounded-2xl border border-gray-200 dark:border-white/10 bg-white/95 dark:bg-[#0c0e2b]/95 backdrop-blur-xl p-5 shadow-2xl"
    >
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Dismiss cookie banner"
        className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="flex items-start gap-3 pr-6">
        <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
          <Cookie className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
              Cookies &amp; Analytics
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              We use analytics cookies to see which pages visitors find helpful and improve the site. Read our{' '}
              <Link
                to="/privacy-policy"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-[#121543] text-white dark:bg-white dark:text-[#121543] hover:opacity-90 transition-opacity cursor-pointer"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={handleDecline}
              className="px-4 py-2 rounded-full text-xs font-semibold border border-gray-300 dark:border-white/15 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

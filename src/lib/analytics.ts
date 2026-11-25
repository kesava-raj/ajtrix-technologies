export type ConsentStatus = 'accepted' | 'declined' | null;

export const OPEN_COOKIE_BANNER_EVENT = 'ajtrix:open-cookie-banner';

export const openCookiePreferences = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event(OPEN_COOKIE_BANNER_EVENT));
  }
};

const CONSENT_STORAGE_KEY = 'ajtrix_cookie_consent';
const CONSENT_COOKIE_NAME = 'ajtrix_cookie_consent';
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // 180 days

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const getMeasurementId = (): string | undefined => {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  return id && id.trim().length > 0 ? id.trim() : undefined;
};

const readCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const prefix = `${name}=`;
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(prefix));
  return match ? decodeURIComponent(match.slice(prefix.length)) : null;
};

const writeConsentCookie = (value: 'accepted' | 'declined') => {
  if (typeof document === 'undefined') return;
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(value)}; Max-Age=${CONSENT_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
};

export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === 'undefined') return null;
  const fromCookie = readCookie(CONSENT_COOKIE_NAME);
  if (fromCookie === 'accepted' || fromCookie === 'declined') return fromCookie;

  try {
    const fromStorage = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (fromStorage === 'accepted' || fromStorage === 'declined') return fromStorage;
  } catch {
    // Ignore storage access errors in private browsing
  }
  return null;
};

export const setConsentStatus = (status: 'accepted' | 'declined') => {
  if (typeof window === 'undefined') return;
  writeConsentCookie(status);
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, status);
  } catch {
    // Ignore storage errors
  }

  if (status === 'accepted') {
    initGoogleAnalytics();
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      });
    }
    trackPageView(window.location.pathname + window.location.search);
  } else if (window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
};

let gaInitialized = false;

export const initGoogleAnalytics = () => {
  if (typeof window === 'undefined' || gaInitialized) return;
  const measurementId = getMeasurementId();
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  const consentGranted = getConsentStatus() === 'accepted';
  if (!consentGranted) return;

  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });

  if (!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
    anonymize_ip: true,
  });

  gaInitialized = true;
};

export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || getConsentStatus() !== 'accepted') return;
  const measurementId = getMeasurementId();
  if (!measurementId || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => {
  if (typeof window === 'undefined' || getConsentStatus() !== 'accepted') return;
  const measurementId = getMeasurementId();
  if (!measurementId || !window.gtag) return;

  window.gtag('event', eventName, params);
};

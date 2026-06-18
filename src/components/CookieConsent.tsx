import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const CONSENT_KEY = 'auden-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-dark-brown/95 backdrop-blur-md border-t border-light-beige/10 px-6 py-5"
        >
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-light-beige/80 leading-relaxed max-w-2xl">
              This site uses cookies for analytics and to improve your experience. By continuing,
              you agree to our{' '}
              <a
                href="/terms"
                className="text-golden-brown hover:text-darker-brown underline transition-colors"
              >
                Terms & Conditions
              </a>
              .
            </p>
            <button
              onClick={accept}
              className="shrink-0 rounded-full bg-golden-brown px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all cursor-pointer"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

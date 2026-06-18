import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../utils/scroll';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          id="back-to-top-floating-btn"
          className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-golden-brown text-brand-white shadow-xl hover:bg-darker-brown transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-golden-brown/50 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { scrollToElement } from '../utils/scroll';

interface NavbarProps {
  onOpenQuote: () => void;
}

const NAV_LINKS = [
  { name: 'Home', sectionId: 'home' },
  { name: 'Services', sectionId: 'services' },
  { name: 'Our Work', sectionId: 'projects' },
  { name: 'Testimonials', sectionId: 'testimonials' },
  { name: 'About', sectionId: 'about' },
];

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          const current = NAV_LINKS.find(({ sectionId }) => {
            const el = document.getElementById(sectionId);
            if (el) {
              const rect = el.getBoundingClientRect();
              return rect.top <= 120 && rect.bottom >= 120;
            }
            return false;
          });
          if (current) {
            setActiveSection(current.sectionId);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      scrollToElement(sectionId);
      setActiveSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-brown/85 backdrop-blur-md border-b border-light-beige/10 py-4 shadow-lg'
            : 'bg-black/15 backdrop-blur-sm py-6'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-brand-white">
              AUDEN
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-light-beige group-hover:text-golden-brown transition-colors">
              Landscape Architecture
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <div className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={(e) => handleLinkClick(e, link.sectionId)}
                  className={`text-sm tracking-wide relative py-1 ${
                    activeSection === link.sectionId
                      ? 'text-light-beige'
                      : 'text-brand-white hover:text-light-beige'
                  }`}
                >
                  {link.name}
                  {activeSection === link.sectionId && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-golden-brown transition-all duration-300 ease-in-out" />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-brand-white/10 pl-8">
              <button
                onClick={onOpenQuote}
                id="nav-cta-desktop"
                className="rounded-full bg-golden-brown px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all duration-300 focus:outline-none cursor-pointer"
              >
                Get a Quote
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              id="mobile-hamburger-btn"
              className="relative z-50 rounded-full p-3 text-brand-white focus:outline-none hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-brand-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-brand-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-dark-brown/95 backdrop-blur-lg flex flex-col justify-center px-10 md:hidden"
          >
            <div className="flex flex-col space-y-6 text-left">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={(e) => handleLinkClick(e, link.sectionId)}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.08, type: 'spring', stiffness: 100 }}
                  className={`font-serif text-3xl tracking-wide ${
                    activeSection === link.sectionId ? 'text-light-beige' : 'text-brand-white'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.08, type: 'spring' }}
                className="pt-8 border-t border-brand-white/10 flex flex-col space-y-4"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuote();
                  }}
                  id="mobile-nav-cta-quote"
                  className="w-full text-center rounded-lg bg-golden-brown py-4 text-sm font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all cursor-pointer"
                >
                  Request A Quote
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

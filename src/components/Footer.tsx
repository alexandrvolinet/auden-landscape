import React from 'react';
import { Link } from 'react-router-dom';
import { Pin } from 'lucide-react';
import { scrollToElement } from '../utils/scroll';

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };

  return (
    <footer className="bg-dark-brown text-light-beige py-16 font-sans border-t border-light-beige/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Brand + social */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex flex-col focus:outline-none"
          >
            <span className="font-serif text-2xl font-bold tracking-widest text-brand-white">
              AUDEN
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-light-beige/70">
              Landscape Architecture
            </span>
          </a>
          <p className="max-w-sm text-sm font-light text-light-beige/70 leading-relaxed">
            Crafting dialogues between structural form and organic flora. We design residential
            sanctuaries, public plazas, and botanical masterplans tailored to merge seamlessly with
            structure.
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-2">
            <a
              href="https://instagram.com/audenlandscape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-11 w-11 text-light-beige hover:text-golden-brown transition-colors duration-200 rounded-full"
              aria-label="Instagram Account"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://pinterest.com/audenlandscape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-11 w-11 text-light-beige hover:text-golden-brown transition-colors duration-200 rounded-full"
              aria-label="Pinterest Board"
            >
              <Pin className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/audenlandscape"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-11 w-11 text-light-beige hover:text-golden-brown transition-colors duration-200 rounded-full"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav links */}
        <div className="lg:col-span-2 space-y-4 text-left">
          <h3 className="font-serif text-sm font-semibold tracking-wider text-brand-white uppercase">
            Navigation
          </h3>
          <ul className="space-y-2.5 text-sm font-light">
            <li>
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="text-light-beige/70 hover:text-golden-brown transition-colors focus:outline-none"
              >
                Home Overview
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="text-light-beige/70 hover:text-golden-brown transition-colors focus:outline-none"
              >
                Our Studio
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, 'services')}
                className="text-light-beige/70 hover:text-golden-brown transition-colors focus:outline-none"
              >
                Services Focus
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleLinkClick(e, 'projects')}
                className="text-light-beige/70 hover:text-golden-brown transition-colors focus:outline-none"
              >
                Featured Archive
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => handleLinkClick(e, 'testimonials')}
                className="text-light-beige/70 hover:text-golden-brown transition-colors focus:outline-none"
              >
                Studio Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Service list */}
        <div className="lg:col-span-2 space-y-4 text-left">
          <h3 className="font-serif text-sm font-semibold tracking-wider text-brand-white uppercase">
            Services
          </h3>
          <ul className="space-y-2.5 text-sm font-light text-light-beige/70">
            <li>Residential Estates</li>
            <li>Civic Water Plazas</li>
            <li>Structural Mapping</li>
            <li>Botanical Masterplans</li>
            <li>Atrium & Courtyards</li>
          </ul>
        </div>

        {/* Address + quote CTA */}
        <div className="lg:col-span-3 space-y-4 text-left">
          <h3 className="font-serif text-sm font-semibold tracking-wider text-brand-white uppercase">
            Coordinates
          </h3>
          <p className="text-sm font-light text-light-beige/70 leading-relaxed">
            Main Architect Studio:
            <br />
            123 Garden Lane, Suite 100
            <br />
            San Francisco, CA 94107
          </p>
          <p className="text-sm font-light text-light-beige/70 leading-relaxed pt-2">
            Inquiries:{' '}
            <a
              href="mailto:studio@example.com"
              className="hover:text-golden-brown text-light-beige transition-colors"
            >
              studio@example.com
            </a>
          </p>
          <button
            onClick={onOpenQuote}
            className="rounded-full bg-golden-brown px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-white hover:bg-darker-brown transition-all cursor-pointer"
          >
            Request a Quote
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-12 pt-8 border-t border-light-beige/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-light text-light-beige/70">
          © {currentYear} Auden Landscape Architecture. All architectural standards preserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/terms"
            className="text-[10px] uppercase font-light tracking-[0.2em] text-light-beige/60 hover:text-golden-brown transition-colors"
          >
            Terms & Conditions
          </Link>
          <span className="text-[10px] uppercase font-light tracking-[0.2em] text-light-beige/60">
            Crafted with pure spatial integrity
          </span>
        </div>
      </div>
    </footer>
  );
}

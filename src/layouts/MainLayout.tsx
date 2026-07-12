import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import QuoteModal from '../components/QuoteModal';
import CookieConsent from '../components/CookieConsent';

interface MainLayoutProps {
  isQuoteOpen: boolean;
  onOpenQuote: () => void;
  onCloseQuote: () => void;
}

export default function MainLayout({ isQuoteOpen, onOpenQuote, onCloseQuote }: MainLayoutProps) {
  return (
    <div className="min-h-screen font-sans antialiased text-[#5C4033] bg-[#FFFFFF]">
      <Navbar onOpenQuote={onOpenQuote} />
      <main className="relative overflow-x-hidden">
        <Outlet />
      </main>
      <Footer onOpenQuote={onOpenQuote} />
      <QuoteModal isOpen={isQuoteOpen} onClose={onCloseQuote} />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}

import { Suspense } from 'react';
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

function LoadingFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-golden-brown border-t-transparent" />
        <span className="text-xs uppercase tracking-widest text-warm-brown">Loading</span>
      </div>
    </div>
  );
}

export default function MainLayout({ isQuoteOpen, onOpenQuote, onCloseQuote }: MainLayoutProps) {
  return (
    <div className="min-h-screen font-sans antialiased text-[#5C4033] bg-[#FFFFFF]">
      <Navbar onOpenQuote={onOpenQuote} />
      <main className="relative overflow-x-hidden">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer onOpenQuote={onOpenQuote} />
      <QuoteModal isOpen={isQuoteOpen} onClose={onCloseQuote} />
      <CookieConsent />
      <BackToTop />
    </div>
  );
}

import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '../utils/scroll';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';

const Carousel = lazy(() => import('../components/Carousel'));
const CTA = lazy(() => import('../components/CTA'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const About = lazy(() => import('../components/About'));
const Team = lazy(() => import('../components/Team'));
const FAQ = lazy(() => import('../components/FAQ'));

interface HomeProps {
  onOpenQuote: () => void;
}

export default function Home({ onOpenQuote }: HomeProps) {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const sectionId = hash.replace('#', '');
      setTimeout(() => scrollToElement(sectionId), 100);
    }
  }, [hash]);

  return (
    <>
      <Hero onOpenQuote={onOpenQuote} />
      <Services />
      <Process />
      <Suspense>
        <Carousel />
        <CTA onOpenQuote={onOpenQuote} />
        <Testimonials />
        <About />
        <Team />
        <FAQ />
      </Suspense>
    </>
  );
}

import React from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '../utils/scroll';
import Hero from '../components/Hero';
import About from '../components/About';
import Team from '../components/Team';
import Services from '../components/Services';
import Process from '../components/Process';
import Carousel from '../components/Carousel';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

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
      <Carousel />
      <CTA onOpenQuote={onOpenQuote} />
      <Testimonials />
      <About />
      <Team />
      <FAQ />
    </>
  );
}

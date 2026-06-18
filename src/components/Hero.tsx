import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { LANDSCAPE_HERO_IMAGE } from '../data';
import { scrollToElement } from '../utils/scroll';
import { buildSrcSet, buildSizes } from '../utils/images';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const handleScrollToAbout = () => {
    scrollToElement('about');
  };

  const handleScrollToProjects = () => {
    scrollToElement('projects');
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={LANDSCAPE_HERO_IMAGE}
          srcSet={buildSrcSet(LANDSCAPE_HERO_IMAGE)}
          sizes={buildSizes()}
          alt="Premium Architecture integrated with Landscape Gardens"
          referrerPolicy="no-referrer"
          width={1920}
          height={1280}
          className="h-full w-full object-cover scale-105 select-none"
          fetchPriority="high"
        />
        {/* Overlay + decorative edge */}
        <div className="absolute inset-0 z-10 bg-dark-brown/70" />
        <div
          className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 border-l border-white/10 z-10 hidden md:block"
          aria-hidden="true"
        />
      </div>

      {/* Hero text and CTA */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 text-center flex flex-col items-center">
        {/* "ESTABLISHED IN 2014" with gold lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex items-center gap-2"
        >
          <span className="h-px w-8 bg-golden-brown" />
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#E8DDD0]">
            ESTABLISHED IN 2014
          </span>
          <span className="h-px w-8 bg-golden-brown" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="max-w-4xl font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-white tracking-tight leading-[1.1]"
        >
          Where Nature Meets <span className="italic font-normal text-[#E8DDD0]">Architecture</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 max-w-2xl text-base md:text-xl text-[#E8DDD0] font-light leading-relaxed tracking-wide"
        >
          Specializing in residential gardens, structured public plazas, and organic architectural
          landscaping crafted to evolve gracefully through generations.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <button
            onClick={handleScrollToProjects}
            id="hero-view-work-btn"
            className="group flex items-center gap-2 rounded-full bg-golden-brown px-8 py-4 text-sm font-semibold tracking-wider uppercase text-brand-white shadow-xl hover:bg-darker-brown transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
          >
            View Our Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenQuote}
            id="hero-get-quote-btn"
            className="rounded-full border border-brand-white bg-transparent px-8 py-4 text-sm font-semibold tracking-wider uppercase text-brand-white hover:bg-brand-white hover:text-dark-brown transition-all duration-300 w-full sm:w-auto justify-center cursor-pointer"
          >
            Get a Quote
          </button>
        </motion.div>
      </div>

      {/* "Explore Studio" scroll prompt */}
      <motion.button
        onClick={handleScrollToAbout}
        id="hero-scroll-trigger"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 z-10 flex flex-col items-center gap-2 text-[#E8DDD0] hover:text-golden-brown transition-colors focus:outline-none cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-light">Explore Studio</span>
        <ChevronDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}

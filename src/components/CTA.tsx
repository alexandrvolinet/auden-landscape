import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LANDSCAPE_CTA_IMAGE } from '../data';
import { scrollToElement } from '../utils/scroll';
import { buildSrcSet, buildSizes } from '../utils/images';

interface CTAProps {
  onOpenQuote: () => void;
}

export default function CTA({ onOpenQuote }: CTAProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

  const handleScrollToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToElement('home');
  };

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative py-28 md:py-36 w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 z-0 scale-110 will-change-transform"
      >
        <img
          src={LANDSCAPE_CTA_IMAGE}
          srcSet={buildSrcSet(LANDSCAPE_CTA_IMAGE)}
          sizes={buildSizes()}
          alt="Glowing sun rays hitting modern landscape garden structures"
          referrerPolicy="no-referrer"
          width={1920}
          height={1280}
          className="h-full w-full object-cover select-none"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-dark-brown/75" />

      <div className="relative z-20 mx-auto max-w-4xl px-6 md:px-12 text-center flex flex-col items-center space-y-6">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-[#E8DDD0]"
        >
          WORK WITH US
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-3xl md:text-5xl font-bold text-brand-white tracking-tight leading-tight max-w-3xl"
        >
          Let’s Create Something{' '}
          <span className="italic font-normal text-[#E8DDD0]">Beautiful</span> Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl text-sm md:text-base text-[#E8DDD0] font-light leading-relaxed pb-4"
        >
          Whether you are building a modern residential garden sanctuary or proposing a civic plaza
          integration, our architects are ready to draw your layout blueprints.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button
            onClick={onOpenQuote}
            id="cta-primary-quote-btn"
            className="rounded-full bg-brand-white px-12 py-5 text-sm font-semibold uppercase tracking-wider text-[#2C1810] hover:bg-golden-brown hover:text-brand-white transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Request Landscape Blueprint
          </button>

          <a
            href="#home"
            onClick={handleScrollToHome}
            className="text-[#E8DDD0] hover:text-golden-brown underline hover:no-underline font-medium text-xs uppercase tracking-widest transition-all focus:outline-none"
          >
            Back to Overview
          </a>
        </motion.div>
      </div>
    </section>
  );
}

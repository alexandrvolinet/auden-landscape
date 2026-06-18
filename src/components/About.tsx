import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { STATS } from '../data';

function AnimatedCounter({ value, duration = 1800 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutQuad — starts fast, decelerates toward the target
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(value); // land exactly on the final number
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className="font-serif">
      {count}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-warm-beige py-24 md:py-32 border-b border-light-beige">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-darker-brown">
              ABOUT US
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-brown leading-tight">
              Crafting Spaces That Inspire
            </h2>

            <div className="h-0.5 w-16 bg-golden-brown rounded-full" />

            <div className="space-y-4 max-w-2xl text-base md:text-lg text-warm-brown leading-relaxed font-light">
              <p>
                At Auden, we view landscaping not as a decoration, but as an architectural
                extension. We craft dialogues between massive, silent structural beams and the
                delicate, rustling organic details of our carefully curated flora.
              </p>
              <p>
                Every sandstone paving slab we lay, every cedar board we anchor, and every ancient
                maple tree we position is carefully calibrated to respond to localized site
                conditions. Our gardens are designed not to be frozen in time, but to grow into
                timeless landmarks that look superior with season and century.
              </p>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 bg-brand-white border border-light-beige rounded-2xl p-8 md:p-12 shadow-md w-full"
          >
            <div className="flex flex-col space-y-10">
              {STATS.map((stat, idx) => (
                <div
                  key={stat.id}
                  className={`flex flex-col space-y-2 ${
                    idx !== STATS.length - 1 ? 'border-b border-light-beige/50 pb-8' : ''
                  }`}
                >
                  <span className="font-serif text-5xl md:text-6xl font-bold text-golden-brown flex items-baseline">
                    <AnimatedCounter value={stat.value} />
                    <span className="font-serif">{stat.suffix}</span>
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-warm-brown">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

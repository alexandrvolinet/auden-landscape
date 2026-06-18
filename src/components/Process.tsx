import React from 'react';
import { motion } from 'motion/react';
import { Compass, Leaf, Sprout } from 'lucide-react';
import { PROCESS_STEPS } from '../data';

const stepIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass: Compass,
  Leaf: Leaf,
  Sprout: Sprout,
};

export default function Process() {
  return (
    <section id="process" className="bg-brand-white py-24 md:py-32 border-b border-light-beige">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-darker-brown"
          >
            OUR PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-dark-brown"
          >
            How We Work
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-12 bg-golden-brown"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {PROCESS_STEPS.map((step, index) => {
            const IconComponent = stepIconMap[step.iconName];

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-warm-beige text-golden-brown transition-colors group-hover:bg-golden-brown group-hover:text-brand-white">
                  <IconComponent className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-golden-brown mb-3">
                  Step {step.step}
                </span>
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">{step.title}</h3>
                <p className="text-sm font-light leading-relaxed text-warm-brown max-w-sm">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

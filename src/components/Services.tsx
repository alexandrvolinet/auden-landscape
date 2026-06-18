import React from 'react';
import { motion } from 'motion/react';
import { Trees, Building, PenTool, Layers } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Trees: Trees,
  Building: Building,
  PenTool: PenTool,
  Layers: Layers,
};

export default function Services() {
  return (
    <section id="services" className="bg-brand-white py-24 md:py-32 border-b border-light-beige">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-golden-brown"
          >
            OUR EXPERTISE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-dark-brown"
          >
            Symmetry & Organic Form
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-12 bg-golden-brown"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.iconName];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative rounded-2xl border border-light-beige bg-brand-white p-8 transition-all duration-300 hover:scale-[1.02] hover:border-golden-brown hover:shadow-[0_12px_40px_rgba(92,64,51,0.12)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-beige text-golden-brown transition-colors group-hover:bg-golden-brown group-hover:text-brand-white">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="mb-3 font-serif text-xl font-bold text-dark-brown">
                  {service.title}
                </h3>

                <p className="text-sm font-light leading-relaxed text-warm-brown">
                  {service.description}
                </p>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 scale-x-0 bg-golden-brown transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

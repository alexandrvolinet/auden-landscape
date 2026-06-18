import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-brand-white py-24 md:py-32 border-b border-light-beige"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-darker-brown">
            STUDIO TRUST
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-dark-brown">
            Client Testimonials
          </h2>
          <div className="h-0.5-12 bg-golden-brown" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((col, index) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col justify-between rounded-2xl border border-light-beige bg-warm-beige p-8 md:p-10 shadow-sm"
            >
              <div className="space-y-6">
              <div className="text-golden-brown">
                  <Quote className="h-10 w-10 fill-golden-brown/10" />
                </div>

                <p className="text-base md:text-lg italic font-light leading-relaxed text-warm-brown">
                  "{col.quote}"
                </p>
              </div>

              {/* Avatar + name */}
              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-light-beige/40">
                <img
                  src={col.avatarUrl}
                  alt={`${col.name} client avatar`}
                  referrerPolicy="no-referrer"
                  width={150}
                  height={150}
                  className="h-12 w-12 rounded-full object-cover border-2 border-golden-brown select-none"
                  loading="lazy"
                />
                <div className="text-left">
                  <h3 className="font-serif text-base font-semibold text-dark-brown">{col.name}</h3>
                  <p className="text-xs text-warm-brown">{col.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-brand-white py-24 md:py-32 border-b border-light-beige">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-darker-brown"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-dark-brown"
          >
            Common Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-12 bg-golden-brown"
          />
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="border border-light-beige rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium text-dark-brown hover:bg-warm-beige/50 transition-colors cursor-pointer"
                aria-expanded={openId === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-golden-brown transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm font-light leading-relaxed text-warm-brown">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

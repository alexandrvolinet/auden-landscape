import { motion } from 'motion/react';
import { TEAM_MEMBERS } from '../data';

export default function Team() {
  return (
    <section id="team" className="bg-warm-beige py-24 md:py-32 border-b border-light-beige">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-darker-brown"
          >
            OUR STUDIO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-dark-brown"
          >
            Meet the Team
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-0.5 w-12 bg-golden-brown"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center text-center bg-brand-white border border-light-beige rounded-2xl p-8 shadow-sm"
            >
              <img
                src={member.avatarUrl}
                alt={`${member.name} portrait`}
                referrerPolicy="no-referrer"
                width={200}
                height={200}
                className="h-24 w-24 rounded-full object-cover border-2 border-golden-brown mb-5"
                loading="lazy"
                decoding="async"
              />
              <h3 className="font-serif text-xl font-bold text-dark-brown">{member.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-golden-brown mt-1 mb-3">
                {member.role}
              </span>
              <p className="text-sm font-light leading-relaxed text-warm-brown">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

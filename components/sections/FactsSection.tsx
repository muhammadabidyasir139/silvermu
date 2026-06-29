'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { facts, timeline } from '@/lib/silverData';

function FactCard({ fact, index }: { fact: { number: string; label: string; context: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-silver-200 p-7"
    >
      <div className="text-4xl sm:text-5xl font-bold text-silver-900 mb-1 leading-none">
        {fact.number}
      </div>
      <div className="text-sm font-semibold text-silver-500 uppercase tracking-wide mb-3">
        {fact.label}
      </div>
      <p className="text-sm text-silver-500 leading-relaxed">{fact.context}</p>
    </motion.div>
  );
}

export default function FactsSection() {
  return (
    <SectionWrapper
      id="fakta"
      className="bg-silver-50"
      ariaLabel="Fakta dan sejarah perak"
    >
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-silver-900 mb-4"
        >
          Mengenal Perak Lebih Dalam
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-silver-500 max-w-xl mx-auto"
        >
          Data dan fakta yang membentuk fondasi kepercayaan terhadap perak sebagai aset investasi.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {facts.map((fact, i) => (
          <FactCard key={fact.label} fact={fact} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
      >
        <h3 className="text-center font-semibold text-silver-700 text-sm uppercase tracking-wider mb-8">
          Perjalanan Perak Sepanjang Sejarah
        </h3>

        <div className="relative overflow-x-auto pb-2">
          <div className="flex min-w-max mx-auto w-full justify-between items-start gap-0">
            {timeline.map((event, i) => (
              <div key={event.period} className="flex flex-col items-center flex-1 relative">
                {i < timeline.length - 1 && (
                  <div className="absolute top-[18px] left-1/2 w-full h-px bg-silver-200" />
                )}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="relative z-10 w-9 h-9 rounded-full bg-white border-2 border-silver-300 flex items-center justify-center mb-3"
                >
                  <span className="w-3 h-3 rounded-full bg-silver-400" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
                  className="text-center px-2"
                >
                  <div className="text-xs font-bold text-silver-800 mb-0.5">{event.period}</div>
                  <div className="text-xs text-silver-500 leading-tight">{event.event}</div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

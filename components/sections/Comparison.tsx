'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import React from 'react';

const COMPARISON_FEATURES = [
  {
    label: 'Harga Entry',
    silver: 'Sangat Terjangkau — Mulai dari puluhan ribu rupiah.',
    gold: 'Premium — Membutuhkan modal awal yang lebih besar.',
  },
  {
    label: 'Profil Risiko',
    silver: 'Volatilitas Tinggi — Pergerakan harga aktif, potensi keuntungan jangka pendek besar.',
    gold: 'Stabil & Aman — Pergerakan tenang, sangat baik untuk jangka panjang.',
  },
  {
    label: 'Fungsi Utama',
    silver: 'Komoditas Industri & Investasi — Permintaan tinggi di sektor panel surya & EV.',
    gold: 'Pelindung Nilai (Safe Haven) — Menjaga kekayaan dari inflasi global.',
  },
  {
    label: 'Likuiditas',
    silver: 'Tinggi — Mudah dicairkan di pasar lokal maupun global.',
    gold: 'Sangat Tinggi — Diterima dan diakui secara universal di seluruh dunia.',
  },
];

export default function Comparison() {
  return (
    <SectionWrapper id="perbandingan" ariaLabel="Perbandingan perak dan emas">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-silver-900 mb-4"
        >
          Mana yang Lebih Tepat untuk Anda?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-silver-500 max-w-xl mx-auto"
        >
          Setiap logam mulia punya karakteristik uniknya. Kenali perbedaannya secara objektif sebelum memutuskan.
        </motion.p>
      </div>

      {/* Desktop View: 3 Column Table */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.55 }}
        className="hidden md:grid grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-silver-200 bg-white shadow-xl max-w-5xl mx-auto"
      >
        {/* Header Row */}
        <div className="p-8 bg-white flex items-center justify-center">
          
        </div>
        <div className="p-8 bg-gradient-to-b from-silver-100 to-silver-50 border-l border-silver-200 relative text-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-silver-900 text-white text-xs font-bold px-4 py-1 rounded-b-lg uppercase tracking-wider shadow-sm">
            DIREKOMENDASIKAN
          </div>
          <h3 className="text-2xl font-bold text-silver-900 mt-4 mb-2">Perak</h3>
          <p className="text-silver-600 text-sm">Aksesibilitas tinggi & potensi pertumbuhan dinamis.</p>
        </div>
        <div className="p-8 bg-white border-l border-silver-200 text-center">
          <h3 className="text-2xl font-bold text-silver-900 mb-2">Emas</h3>
          <p className="text-silver-500 text-sm">Klasik, stabil, dan pengaman kekayaan jangka panjang.</p>
        </div>
        
        {/* Data Rows */}
        {COMPARISON_FEATURES.map((feature, idx) => (
          <React.Fragment key={idx}>
            <div className="p-6 border-t border-silver-200 bg-white flex items-center justify-start">
              <span className="font-semibold text-silver-900">{feature.label}</span>
            </div>
            <div className="p-6 border-t border-l border-silver-200 bg-silver-50 flex items-start">
              <Check size={18} className="text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-silver-800 leading-relaxed">{feature.silver}</span>
            </div>
            <div className="p-6 border-t border-l border-silver-200 bg-white flex items-start">
              <Check size={18} className="text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-silver-600 leading-relaxed">{feature.gold}</span>
            </div>
          </React.Fragment>
        ))}

        {/* CTA Row */}
        <div className="p-6 border-t border-silver-200 bg-white"></div>
        <div className="p-6 border-t border-l border-silver-200 bg-silver-50 flex justify-center">
           <button className="w-full bg-silver-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-silver-800 transition shadow-md">
             Mulai Investasi Perak
           </button>
        </div>
        <div className="p-6 border-t border-l border-silver-200 bg-white flex justify-center">
           <a href="https://emasmu.co.id" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-silver-200 text-silver-700 px-6 py-3 rounded-xl font-semibold hover:bg-silver-50 hover:border-silver-300 transition block">
             Pelajari Emas
           </a>
        </div>
      </motion.div>

      {/* Mobile View: Cards */}
      <div className="md:hidden space-y-8 max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl border border-silver-200 bg-gradient-to-br from-silver-100 to-silver-50 p-6 shadow-xl relative mt-4"
        >
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-silver-900 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
              DIREKOMENDASIKAN
            </span>
          </div>
          <div className="text-center mb-8 mt-4">
            <h3 className="text-2xl font-bold text-silver-900 mb-2">Perak</h3>
            <p className="text-silver-600 text-sm">Aksesibilitas tinggi & potensi pertumbuhan dinamis.</p>
          </div>
          <ul className="space-y-5">
            {COMPARISON_FEATURES.map((f) => (
              <li key={f.label}>
                <span className="text-xs font-bold text-silver-500 uppercase tracking-wide block mb-1">
                  {f.label}
                </span>
                <div className="flex gap-2 items-start">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-silver-800 leading-relaxed">{f.silver}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <button className="w-full bg-silver-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-silver-800 transition shadow-md">
              Mulai Investasi Perak
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="rounded-2xl border border-silver-200 bg-white p-6 shadow-md"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-silver-900 mb-2">Emas</h3>
            <p className="text-silver-500 text-sm">Klasik, stabil, dan pengaman kekayaan jangka panjang.</p>
          </div>
          <ul className="space-y-5">
            {COMPARISON_FEATURES.map((f) => (
              <li key={f.label}>
                <span className="text-xs font-bold text-silver-400 uppercase tracking-wide block mb-1">
                  {f.label}
                </span>
                <div className="flex gap-2 items-start">
                  <Check size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-silver-600 leading-relaxed">{f.gold}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="https://emasmu.co.id" target="_blank" rel="noopener noreferrer" className="w-full text-center border-2 border-silver-200 text-silver-700 px-6 py-3 rounded-xl font-semibold hover:bg-silver-50 transition block">
              Pelajari Emas
            </a>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-silver-400 text-sm mt-10 max-w-lg mx-auto italic"
      >
        Bukan soal mana yang lebih baik, tapi mana yang sesuai dengan tujuan dan kemampuan Anda.
      </motion.p>
    </SectionWrapper>
  );
}

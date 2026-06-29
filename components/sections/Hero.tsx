'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const slides = [
  {
    src: '/src/produk_silvermu1.png',
    alt: 'Produk Silvermu 1',
  },
  {
    src: '/src/produk_sulvermu2.png',
    alt: 'Produk Silvermu 2',
  },
  {
    src: '/src/produk_silvermu3.png',
    alt: 'Produk Silvermu 3',
  },
  {
    src: '/src/logo_fullbackground.jpeg',
    alt: 'Silvermu Logo',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Beranda"
    >
      {/* Background Hero Image */}
      <div
        className="absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/src/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Gradient Overlay: kiri ke kanan — menutup halus dari solid ke transparan */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.70) 55%, rgba(255,255,255,0.25) 75%, rgba(255,255,255,0.04) 100%)',
        }}
      />

      {/* Dot grid subtle overlay */}
      <div
        className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none z-[2]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-12 flex flex-col md:flex-row items-center gap-12">
        {/* Kolom Teks (Kiri) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-7"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 bg-silver-100 text-silver-700 text-sm px-4 py-2 rounded-full font-medium border border-silver-200">
              <TrendingUp size={14} className="text-silver-500" />
              PT. Putra Surya Yogyakarta
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-silver-900 leading-[1.12] tracking-tight"
          >
            Perak bukan sekadar logam.{' '}
            <span className="text-silver-400">Ia adalah nilai yang tahan waktu.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-silver-500 max-w-xl leading-relaxed"
          >
            SILVERMU menyediakan logam mulia 24 karat dengan kemurnian 999. Investasi perak fisik yang aman dan terjangkau untuk generasi Indonesia.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mt-1">
            <button
              onClick={() => scrollTo('perbandingan')}
              className="px-8 py-3.5 bg-silver-900 text-white rounded-xl font-medium hover:bg-silver-800 active:bg-silver-900 transition-colors focus-visible:ring-2 focus-visible:ring-silver-400 focus-visible:ring-offset-2"
            >
              Pelajari Lebih Lanjut
            </button>
            <button
              onClick={() => scrollTo('harga')}
              className="px-8 py-3.5 border border-silver-300 text-silver-700 rounded-xl font-medium hover:border-silver-500 hover:text-silver-900 hover:bg-silver-50 active:bg-silver-100 transition-all focus-visible:ring-2 focus-visible:ring-silver-400 focus-visible:ring-offset-2"
            >
              Lihat Harga Hari Ini
            </button>
          </motion.div>

          <motion.button
            variants={item}
            onClick={() => scrollTo('perbandingan')}
            className="mt-6 flex flex-col items-center md:items-start gap-2 text-silver-300 hover:text-silver-500 transition-colors focus-visible:outline-none focus-visible:text-silver-500"
            aria-label="Gulir ke seksi berikutnya"
          >
            <span className="text-xs tracking-wide uppercase">Gulir ke bawah</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Kolom Visual (Kanan) — Auto Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none mt-10 md:mt-0"
        >
          {/* Efek Glow di belakang slider */}
          <div
            className="absolute inset-0 bg-zinc-300 blur-3xl opacity-30 rounded-full animate-pulse"
            style={{ animationDuration: '6s' }}
          />

          <div className="relative p-6 sm:p-8 bg-gradient-to-tr from-zinc-300 via-slate-50 to-zinc-400 rounded-[2rem] shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),_0_25px_60px_-15px_rgba(0,0,0,0.15)] border border-white/80 overflow-hidden">
            {/* Slider Images */}
            <div className="relative w-full" style={{ minHeight: '280px' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current].src}
                  alt={slides[current].alt}
                  initial={{ opacity: 0, x: 40, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -40, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-auto object-contain z-10 relative rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-zinc-200/50 filter brightness-105 contrast-105"
                  style={{ maxHeight: '380px' }}
                />
              </AnimatePresence>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className="transition-all duration-300 focus-visible:outline-none"
                  style={{
                    width: current === idx ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '9999px',
                    background: current === idx
                      ? 'linear-gradient(90deg, #71717a, #27272a)'
                      : '#d4d4d8',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

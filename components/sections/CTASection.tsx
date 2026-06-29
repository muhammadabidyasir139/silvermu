'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, BookOpen, ArrowRight } from 'lucide-react';

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

function NewsletterCard() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-10 h-10 rounded-xl bg-silver-700 flex items-center justify-center mb-4">
        <Mail size={18} className="text-silver-200" />
      </div>
      <h3 className="font-semibold text-white mb-2">Update Harga & Analisis</h3>
      <p className="text-sm text-silver-400 mb-5 flex-grow">
        Terima rangkuman mingguan harga perak dan insight investasi langsung di inbox Anda.
      </p>
      {submitted ? (
        <div className="text-sm text-silver-300 bg-silver-700 rounded-xl px-4 py-3">
          Terima kasih! Anda akan menerima update kami segera.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alamat@email.com"
            required
            className="w-full px-4 py-3 rounded-xl bg-silver-700 border border-silver-600 text-white placeholder:text-silver-500 focus:outline-none focus:ring-2 focus:ring-silver-400 text-sm"
          />
          <button
            type="submit"
            className="w-full py-3 bg-white text-silver-900 rounded-xl font-semibold text-sm hover:bg-silver-100 active:bg-silver-200 transition-colors focus-visible:ring-2 focus-visible:ring-silver-400"
          >
            Langganan Update
          </button>
        </form>
      )}
    </div>
  );
}

export default function CTASection() {
  return (
    <>
      <section
        id="mulai"
        className="bg-silver-900 py-20 px-4"
        aria-label="Mulai perjalanan investasi"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Siap Memulai Perjalanan Investasi Anda?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-silver-400 max-w-xl mx-auto"
            >
              Tidak perlu terburu-buru. Mulai dengan langkah kecil, dan biarkan waktu
              yang bekerja untuk Anda.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            <motion.div
              custom={0}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="bg-silver-800 rounded-2xl p-7 flex flex-col"
            >
              <NewsletterCard />
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="bg-silver-800 rounded-2xl p-7 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-silver-700 flex items-center justify-center mb-4">
                <MessageCircle size={18} className="text-silver-200" />
              </div>
              <h3 className="font-semibold text-white mb-2">Konsultasi Gratis</h3>
              <p className="text-sm text-silver-400 mb-5 flex-grow">
                Punya pertanyaan tentang investasi perak? Tim kami siap membantu melalui
                WhatsApp, tanpa biaya apa pun.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 border border-silver-600 text-silver-200 rounded-xl font-semibold text-sm hover:bg-silver-700 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-silver-400"
              >
                <MessageCircle size={15} />
                Hubungi via WhatsApp
              </a>
            </motion.div>

            <motion.div
              custom={2}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="bg-silver-800 rounded-2xl p-7 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-silver-700 flex items-center justify-center mb-4">
                <BookOpen size={18} className="text-silver-200" />
              </div>
              <h3 className="font-semibold text-white mb-2">Koleksi Perak Kami</h3>
              <p className="text-sm text-silver-400 mb-5 flex-grow">
                Jelajahi pilihan batangan dan koin perak yang tersedia, mulai dari 1 gram
                hingga koleksi premium bersertifikat.
              </p>
              <button
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-white text-silver-900 rounded-xl font-semibold text-sm hover:bg-silver-100 active:bg-silver-200 transition-colors focus-visible:ring-2 focus-visible:ring-silver-400"
                onClick={() => alert('Segera hadir — katalog produk sedang disiapkan.')}
              >
                Lihat Koleksi
                <ArrowRight size={15} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-silver-900 border-t border-silver-800 py-8 px-4" aria-label="Footer">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="font-bold text-white text-lg">Silvermu</span>
              <span className="text-silver-600 hidden sm:inline">·</span>
              <span className="text-sm text-silver-500">Nilai yang tahan waktu.</span>
            </div>
            <div className="flex items-center gap-5">
              <a href="#" className="text-xs text-silver-500 hover:text-silver-300 transition-colors">
                Tentang Kami
              </a>
              <a href="#" className="text-xs text-silver-500 hover:text-silver-300 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-xs text-silver-500 hover:text-silver-300 transition-colors">
                Kontak
              </a>
            </div>
          </div>
          <div className="mt-5 text-center sm:text-left">
            <p className="text-xs text-silver-600">© 2025 Silvermu. Seluruh hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Check, TrendingUp, Users, BookOpen, Megaphone, MessageCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function DealerSection() {
  const handleJoinWhatsApp = () => {
    const text = 'Halo Admin Silvermu, saya ingin join menjadi dealer. Mohon informasi lebih lanjut mengenai syarat dan ketentuannya. Terima kasih.';
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281804166008?text=${encodedText}`, '_blank');
  };

  return (
    <SectionWrapper id="dealer" ariaLabel="Join Dealer Silvermu" className="bg-silver-50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-900 mb-4 uppercase"
        >
          JOIN <span className="text-amber-500">DEALER SILVERMU</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-silver-500 max-w-2xl mx-auto text-lg"
        >
          Ayo daftarkan sekarang! Bergabunglah dengan jaringan dealer terpercaya dan raih peluang bisnis perak yang menguntungkan
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8 relative">
            {/* Syarat & Ketentuan */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm relative pt-12"
            >
              <div className="absolute -top-5 left-8 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md">
                SYARAT & KETENTUAN DEALER
              </div>
              <ul className="space-y-4 mt-2">
                {[
                  'Memiliki toko fisik atau online shop',
                  'Komitmen untuk menjual produk perak SILVERMU',
                  'Modal awal sesuai ketentuan dealer',
                  'Bersedia mengikuti training & sertifikasi'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-emerald-100 p-0.5">
                      <Check size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-silver-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fasilitas Kiri */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm relative pt-12"
            >
              <div className="absolute -top-5 left-8 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md">
                FASILITAS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-2">
                {[
                  'Sertifikat Dealer Silvermu',
                  'Dapat 2 keping silvermu + 1 keping merk lain',
                  'Kaos Silvermu',
                  'Konsultasi & pendampingan',
                  'Logo Dealer Silvermu',
                  'Stempel',
                  'Nota',
                  'Join grup eksklusif',
                  'CV perusahaan toko resmi',
                  'Perizinan + NPWP',
                  'Garansi untung'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 list-none">
                    <div className="mt-0.5 rounded-full bg-emerald-100 p-0.5 flex-shrink-0">
                      <Check size={16} className="text-emerald-600" />
                    </div>
                    <span className="text-silver-700 text-sm leading-tight">{item}</span>
                  </li>
                ))}
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.5, bounce: 0.5 }}
              className="absolute top-1/2 right-4 lg:-right-8 transform -translate-y-1/2 bg-amber-500 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center font-bold text-center shadow-[0_0_30px_rgba(245,158,11,0.5)] border-4 border-white z-10"
            >
              <span className="text-lg leading-none">HANYA</span>
              <span className="text-3xl leading-none mt-1">25 JT!*</span>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm relative pt-12 h-fit"
          >
            <div className="absolute -top-5 left-8 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md">
              FASILITAS
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="bg-blue-50/50 rounded-xl p-5 flex items-start gap-4 border border-blue-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 border border-blue-100">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-silver-900 mb-1">Margin Menarik</h4>
                  <p className="text-sm text-silver-500 leading-relaxed">Dapatkan margin keuntungan yang kompetitif untuk setiap transaksi</p>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-5 flex items-start gap-4 border border-blue-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 border border-blue-100">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-silver-900 mb-1">Support Penuh</h4>
                  <p className="text-sm text-silver-500 leading-relaxed">Tim support dedicated siap membantu mengembangkan bisnis Anda</p>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-5 flex items-start gap-4 border border-blue-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 border border-blue-100">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-silver-900 mb-1">Training Gratis</h4>
                  <p className="text-sm text-silver-500 leading-relaxed">Pelatihan lengkap tentang produk & strategi penjualan perak</p>
                </div>
              </div>

              <div className="bg-blue-50/50 rounded-xl p-5 flex items-start gap-4 border border-blue-100">
                <div className="bg-white p-2 rounded-lg shadow-sm text-blue-500 border border-blue-100">
                  <Megaphone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-silver-900 mb-1">Marketing Kit</h4>
                  <p className="text-sm text-silver-500 leading-relaxed">Materi promosi & marketing tools untuk mendukung penjualan</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={handleJoinWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-emerald-600/40 transform hover:-translate-y-1"
          >
            <MessageCircle size={24} />
            Saya Ingin Join Menjadi Dealer
          </button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

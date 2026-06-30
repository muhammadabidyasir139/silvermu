'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Check, MessageCircle, Play, X } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { useState, useEffect } from 'react';

export default function DealerSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringCTA, setIsHoveringCTA] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovering) {
      window.addEventListener('mousemove', updateMousePosition);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [isHovering]);

  const handleJoinWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = 'Halo Admin Silvermu, saya ingin mendaftar menjadi dealer dengan biaya pendaftaran Rp 3.500.000. Mohon informasi lebih lanjut mengenai syarat dan ketentuannya. Terima kasih.';
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281233675533?text=${encodedText}`, '_blank');
  };

  return (
    <>
      <div 
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsVideoOpen(true)}
        className="relative cursor-pointer group"
      >
        <SectionWrapper id="dealer" ariaLabel="Join Dealer Silvermu" className="bg-silver-50 pointer-events-none group-hover:pointer-events-auto">
          <div className="pointer-events-none md:pointer-events-auto">
            <div className="text-center mb-16 relative z-10">
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

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                
                {/* LEFT SIDE */}
                <div className="flex flex-col gap-8 relative">
                  {/* Kenapa Harus Join */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm relative pt-12"
                  >
                    <div className="absolute -top-5 left-8 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md text-sm sm:text-base">
                      KENAPA HARUS JOIN JADI DEALER SILVERMU
                    </div>
                    <ul className="space-y-4 mt-2">
                      {[
                        'Dapat harga beli lebih rendah',
                        'Informasi dan promo lebih awal',
                        'Edukasi seputar silver',
                        'Tanya jawab langsung dengan pusat'
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

                  {/* Syarat Pendaftaran */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm relative pt-12"
                  >
                    <div className="absolute -top-5 left-8 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md text-sm sm:text-base">
                      SYARAT PENDAFTARAN DEALER SILVERMU
                    </div>
                    <ul className="space-y-4 mt-2">
                      {[
                        'Foto scan KTP',
                        'Mengisi data diri',
                        'Nomor Whatsapp aktif',
                        'Menyetujui syarat & ketentuan'
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

                  {/* Floating Badge */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.5, bounce: 0.5 }}
                    className="absolute top-1/2 right-4 lg:-right-8 transform -translate-y-1/2 bg-amber-500 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center font-bold text-center shadow-[0_0_30px_rgba(245,158,11,0.5)] border-4 border-white z-10"
                  >
                    <span className="text-sm leading-none mb-1">HANYA</span>
                    <span className="text-2xl leading-none font-black tracking-tighter">3.500.000</span>
                  </motion.div>
                </div>

                {/* RIGHT SIDE */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 border border-silver-200 shadow-sm relative pt-12 h-fit"
                >
                  <div className="absolute -top-5 left-8 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md text-sm sm:text-base">
                    FASILITAS JOIN JADI DEALER SILVERMU
                  </div>
                  
                  <ul className="space-y-5 mt-2">
                    {[
                      'Dapat 10 keping SILVERMU pecahan 1gram',
                      'Dapat sertifikat dealer SILVERMU',
                      'Gabung grup Eksklusif',
                      'Konsultasi dan pendampingan',
                      'Kaos SILVERMU',
                      'Desain logo toko SILVER',
                      'Nota Toko'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-0.5 rounded-full bg-emerald-100 p-0.5 flex-shrink-0">
                          <Check size={16} className="text-emerald-600" />
                        </div>
                        <span className="text-silver-700 font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

              </div>

              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-16 text-center relative z-[100]"
              >
                <button 
                  onClick={handleJoinWhatsApp}
                  onMouseEnter={() => setIsHoveringCTA(true)}
                  onMouseLeave={() => setIsHoveringCTA(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-emerald-600/40 transform hover:-translate-y-1 cursor-pointer"
                >
                  <MessageCircle size={24} />
                  Saya Ingin Join Menjadi Dealer
                </button>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Custom Cursor */}
      <AnimatePresence>
        {isHovering && !isHoveringCTA && !isVideoOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed pointer-events-none z-[100] hidden md:flex items-center justify-center w-20 h-20 bg-blue-500/80 backdrop-blur-md rounded-full text-white shadow-xl"
            style={{
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
            }}
          >
            <Play fill="currentColor" size={32} className="ml-1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setIsVideoOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-silver-300 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[210] cursor-pointer"
              onClick={() => setIsVideoOpen(false)}
            >
              <X size={32} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src="/src/joindealer.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

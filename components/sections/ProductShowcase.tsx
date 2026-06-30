'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Link from 'next/link';
import { PRODUCTS, Product } from '@/lib/products';
import { useRef } from 'react';

export default function ProductShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleOrderWhatsApp = (e: React.MouseEvent, prod: Product) => {
    e.preventDefault();
    e.stopPropagation();
    const text = `Halo Admin Silvermu, saya ingin memesan:\n\nProduk: ${prod.name}\nHarga: Rp ${prod.price.toLocaleString('id-ID')}\n\nMohon informasi ketersediaan dan cara pembayarannya. Terima kasih.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281804166008?text=${encodedText}`, '_blank');
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="produk" ariaLabel="Produk Silvermu">
      <div className="text-center mb-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-900 mb-4"
        >
          Koleksi Logam Mulia Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-silver-500 max-w-xl mx-auto text-lg mb-8"
        >
          Temukan ukuran yang paling sesuai dengan tujuan investasi dan anggaran Anda.
        </motion.p>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button onClick={scrollLeft} aria-label="Previous products" className="w-12 h-12 rounded-full border border-silver-200 bg-white flex items-center justify-center text-silver-600 hover:bg-silver-50 hover:text-emerald-600 transition-colors shadow-sm">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollRight} aria-label="Next products" className="w-12 h-12 rounded-full border border-silver-200 bg-white flex items-center justify-center text-silver-600 hover:bg-silver-50 hover:text-emerald-600 transition-colors shadow-sm">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PRODUCTS.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="min-w-[280px] w-[85vw] sm:w-[320px] lg:w-[350px] flex-shrink-0 snap-center rounded-2xl bg-white border border-silver-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all flex flex-col overflow-hidden group"
            >
              <Link href={`/produk/${prod.id}`} className="flex flex-col flex-grow">
                {/* Image Section */}
                <div className="aspect-[4/3] bg-gradient-to-b from-silver-50 to-silver-100 p-8 relative flex items-center justify-center border-b border-silver-100 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10 tracking-wider">
                    Rp {prod.price.toLocaleString('id-ID')}
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-silver-200 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <img 
                    src={prod.image} 
                    alt={prod.name} 
                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl transition-transform duration-500 group-hover:scale-110 relative z-10"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-xl font-bold text-silver-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-sm text-silver-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {prod.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex flex-col gap-3 mt-auto relative z-20">
                    <button 
                      onClick={(e) => handleOrderWhatsApp(e, prod)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-emerald-600/30 transform hover:-translate-y-0.5"
                    >
                      <MessageCircle size={18} />
                      Order Sekarang
                    </button>
                    <div className="w-full bg-silver-50 text-silver-700 px-4 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 group-hover:bg-silver-100 transition-colors">
                      Lihat Detail <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

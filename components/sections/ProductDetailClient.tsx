'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, ShoppingCart, MessageCircle, ShieldCheck, Award, Zap, Check, ArrowLeft } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { PRODUCTS, Product } from '@/lib/products';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Props {
  initialIdx: number;
}

export default function ProductDetailClient({ initialIdx }: Props) {
  const router = useRouter();
  const [activeProductIdx, setActiveProductIdx] = useState(initialIdx);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(PRODUCTS[initialIdx].image);

  // Update when initialIdx changes from props (navigation)
  useEffect(() => {
    setActiveProductIdx(initialIdx);
    setMainImage(PRODUCTS[initialIdx].image);
    setQuantity(1);
  }, [initialIdx]);

  const activeProduct = PRODUCTS[activeProductIdx];

  const handleSelectProduct = (idx: number) => {
    // Instead of just changing state, let's navigate to the right product page
    // This keeps the URL in sync
    router.push(`/produk/${PRODUCTS[idx].id}`, { scroll: false });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < activeProduct.stock) setQuantity(quantity + 1);
  };

  const handleOrderWhatsApp = () => {
    const text = `Halo Admin Silvermu, saya ingin memesan:\n\nProduk: ${activeProduct.name}\nHarga: Rp ${activeProduct.price.toLocaleString('id-ID')}\nJumlah: ${quantity} pcs\nTotal: Rp ${(activeProduct.price * quantity).toLocaleString('id-ID')}\n\nMohon informasi ketersediaan dan cara pembayarannya. Terima kasih.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281804166008?text=${encodedText}`, '_blank');
  };

  return (
    <SectionWrapper id="product-detail" ariaLabel="Detail Produk" className="pt-24 lg:pt-32">
      <div className="max-w-6xl mx-auto">
        <Link href="/#produk" className="inline-flex items-center text-sm font-medium text-silver-500 hover:text-silver-900 mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Kembali ke Beranda
        </Link>
        
        {/* 50:50 Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          
          {/* LEFT SIDE: Media & Visual (Sticky) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              {/* Main Image */}
              <div className="w-full aspect-square bg-silver-50 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-silver-100 shadow-sm relative group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={mainImage}
                    src={mainImage}
                    alt={activeProduct.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-contain mix-blend-multiply drop-shadow-xl"
                  />
                </AnimatePresence>
                
                {/* Promo Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                  {Math.round(((activeProduct.originalPrice - activeProduct.price) / activeProduct.originalPrice) * 100)}% OFF
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => setMainImage(prod.image)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden flex items-center justify-center bg-silver-50 p-1 transition-all ${
                      mainImage === prod.image ? 'border-silver-900 shadow-md ring-2 ring-silver-100 ring-offset-1' : 'border-silver-200 hover:border-silver-400 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={prod.image} alt={prod.label} className="w-full h-full object-contain mix-blend-multiply" />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Information & Checkout */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Title & Name */}
              <h1 className="text-3xl lg:text-4xl font-bold text-silver-900 leading-tight mb-2">
                {activeProduct.name}
              </h1>
              <div className="flex items-center gap-4 text-sm mb-6">
                <div className="flex items-center text-amber-500 font-medium">
                  ★ 4.9 <span className="text-silver-400 ml-1 font-normal">(128 Ulasan)</span>
                </div>
                <div className="w-1 h-1 bg-silver-300 rounded-full"></div>
                <div className="text-silver-500">
                  Terjual {activeProduct.stock * 5}+
                </div>
              </div>

              {/* Shopee-style Price Box */}
              <div className="bg-gradient-to-r from-silver-50 to-white border border-silver-100 rounded-2xl p-6 mb-6 shadow-sm">
                <div className="flex items-end gap-3 flex-wrap">
                  <span className="text-silver-400 line-through text-lg mb-1">
                    Rp {activeProduct.originalPrice.toLocaleString('id-ID')}
                  </span>
                  <span className="text-4xl font-bold text-emerald-600 tracking-tight">
                    Rp {activeProduct.price.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="mt-2 text-sm text-emerald-600 font-medium flex items-center gap-1">
                  <Zap size={14} className="fill-emerald-600" /> Harga Spesial Hari Ini
                </div>
              </div>

              {/* Size Variations (Gramasi) */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-silver-900 uppercase tracking-wider mb-3">
                  Pilih Ukuran (Gramasi)
                </h3>
                <div className="flex flex-wrap gap-3">
                  {PRODUCTS.map((prod, idx) => (
                    <button
                      key={prod.id}
                      onClick={() => handleSelectProduct(idx)}
                      className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                        activeProductIdx === idx
                          ? 'border-silver-900 bg-silver-900 text-white shadow-md'
                          : 'border-silver-200 text-silver-600 hover:border-silver-400 hover:bg-silver-50'
                      }`}
                    >
                      {prod.label}
                      {activeProductIdx === idx && (
                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description & Specs */}
              <div className="mb-8 border-t border-b border-silver-100 py-6">
                <p className="text-silver-700 leading-relaxed mb-6 text-base">
                  {activeProduct.description}
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-silver-900 text-sm">Spesifikasi Produk:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProduct.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-silver-600">
                        <Check size={14} className="text-emerald-500 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8 flex items-center gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-silver-900 uppercase tracking-wider mb-3">
                    Kuantitas
                  </h3>
                  <div className="flex items-center border border-silver-300 rounded-xl overflow-hidden h-12 w-32">
                    <button 
                      onClick={decreaseQuantity}
                      className="w-10 h-full flex items-center justify-center text-silver-500 hover:bg-silver-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <div className="flex-1 h-full flex items-center justify-center font-semibold text-silver-900 border-x border-silver-300">
                      {quantity}
                    </div>
                    <button 
                      onClick={increaseQuantity}
                      className="w-10 h-full flex items-center justify-center text-silver-500 hover:bg-silver-100 transition-colors"
                      disabled={quantity >= activeProduct.stock}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="pt-8">
                  <p className="text-sm text-silver-500">
                    Tersisa <span className="font-bold text-amber-600">{activeProduct.stock} pcs</span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleOrderWhatsApp}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-600/30 transform hover:-translate-y-1"
                >
                  <MessageCircle size={22} />
                  Order Sekarang (WA)
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-silver-100 pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-silver-50 flex items-center justify-center text-silver-700">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs text-silver-500 font-medium">100% Asli</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-silver-50 flex items-center justify-center text-silver-700">
                    <Award size={20} />
                  </div>
                  <span className="text-xs text-silver-500 font-medium">Bersertifikat</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-silver-50 flex items-center justify-center text-silver-700">
                    <Check size={20} />
                  </div>
                  <span className="text-xs text-silver-500 font-medium">Buyback Mudah</span>
                </div>
              </div>
              
            </motion.div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nama: '',
    whatsapp: '',
    kota: '',
    pesan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Validasi hanya angka untuk field whatsapp
    if (name === 'whatsapp') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Admin Silvermu, saya ingin bertanya:\n\nNama: ${formData.nama}\nKota: ${formData.kota}\n\nPesan: ${formData.pesan}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281804166008?text=${encodedText}`, '_blank');
  };

  const infoCards = [
    {
      icon: <MapPin className="text-emerald-500" size={28} />,
      title: 'Alamat Kantor',
      lines: [
        'JALAN SULAMEGA',
        'Desa/Kelurahan Cibeunying',
        'Kec. Majenang, Kab. Cilacap',
        'Provinsi Jawa Tengah'
      ]
    },
    {
      icon: <Phone className="text-emerald-500" size={28} />,
      title: 'Telepon',
      lines: [
        '+62 818-041-66008'
      ]
    },
    {
      icon: <Mail className="text-emerald-500" size={28} />,
      title: 'Email',
      lines: [
        'info@silvermu.id'
      ]
    },
    {
      icon: <Clock className="text-emerald-500" size={28} />,
      title: 'Jam Operasional',
      lines: [
        'Senin - Jumat: 09:00 - 17:00',
        'Sabtu: 09:00 - 15:00',
        'Minggu: Tutup'
      ]
    }
  ];

  return (
    <SectionWrapper id="kontak" ariaLabel="Kontak Silvermu" className="bg-white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-900 mb-4"
        >
          Hubungi Kami
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-silver-500 max-w-2xl mx-auto text-lg"
        >
          Kami siap membantu Anda. Jangan ragu untuk menghubungi tim kami melalui kontak di bawah ini.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Info Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {infoCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-silver-200 p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="font-bold text-silver-900 mb-3 text-lg">{card.title}</h3>
              <div className="text-silver-500 text-sm flex flex-col gap-1">
                {card.lines.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-white rounded-2xl border border-silver-200 p-8 shadow-sm"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-silver-900 mb-2">Kirim Pesan</h3>
              <p className="text-sm text-silver-500">Isi form di bawah ini dan kami akan menghubungi Anda dalam 24 jam</p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-silver-700 mb-1.5">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-silver-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-silver-900"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-silver-700 mb-1.5">Nomor WhatsApp</label>
                <input 
                  type="text" 
                  inputMode="numeric"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-silver-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-silver-900"
                  placeholder="Contoh: 08123456789"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-silver-700 mb-1.5">Kota/Kabupaten</label>
                <input 
                  type="text" 
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-silver-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-silver-900"
                  placeholder="Asal kota Anda"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-silver-700 mb-1.5">Isi Pesan</label>
                <textarea 
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-silver-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none text-silver-900"
                  placeholder="Tuliskan pesan Anda di sini..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </motion.div>

          {/* Map and Socials Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-silver-200 p-8 shadow-sm flex-grow flex flex-col"
            >
              <h3 className="text-xl font-bold text-silver-900 mb-6">Lokasi Kami</h3>
              <div className="w-full flex-grow rounded-xl overflow-hidden border border-silver-200 min-h-[300px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.54658792294!2d108.7440457!3d-7.292314299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f7900526371f9%3A0xb060af96405769bf!2sTOKO%20LOGAM%20MULIA!5e0!3m2!1sen!2sid!4v1782692763534!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '300px' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Toko Logam Mulia"
                ></iframe>
              </div>
            </motion.div>

            {/* Socials Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl border border-silver-200 p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-silver-900 mb-2">Ikuti Kami</h3>
              <p className="text-sm text-silver-500 mb-6">Dapatkan update terbaru tentang harga perak dan promo menarik</p>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-3 border border-silver-200 rounded-xl py-3 text-silver-700 font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors bg-silver-50 hover:bg-white"
                >
                  <Facebook size={20} className="text-blue-600" />
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="flex items-center justify-center gap-3 border border-silver-200 rounded-xl py-3 text-silver-700 font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-colors bg-silver-50 hover:bg-white"
                >
                  <Instagram size={20} className="text-pink-600" />
                  Instagram
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </SectionWrapper>
  );
}

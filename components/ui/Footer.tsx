import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-silver-300 py-16 border-t border-silver-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <img src="/src/logo_no_background.png" alt="Silvermu Logo" className="w-12 h-12 object-contain filter brightness-0 invert" />
              <div>
                <h2 className="text-white font-bold text-xl tracking-tight">SILVERMU</h2>
                <p className="text-xs text-silver-400">PT. Putra Surya Yogyakarta</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-silver-400">
              Penyedia logam mulia 24 karat terpercaya dengan sertifikasi resmi. Investasi perak yang aman dan menguntungkan untuk masa depan yang lebih cerah.
            </p>
            <div className="flex flex-col gap-3 text-sm text-silver-400 mt-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Yogyakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 flex-shrink-0" />
                <span>+62 818-041-66008</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 flex-shrink-0" />
                <span>info@silvermu.id</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Senin - Jumat: 08:00 - 17:00</span>
              </div>
            </div>
          </div>

          {/* Column 2: Tautan Cepat */}
          <div>
            <h3 className="text-white font-bold mb-6">Tautan Cepat</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Tentang Kami</Link></li>
              <li><Link href="/#produk" className="hover:text-emerald-400 transition-colors">Produk Perak</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Cara Investasi</Link></li>
              <li><Link href="/#berita" className="hover:text-emerald-400 transition-colors">Blog & Tips</Link></li>
              <li><Link href="/#kontak" className="hover:text-emerald-400 transition-colors">Kontak</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Akses</Link></li>
            </ul>
          </div>

          {/* Column 3: Produk */}
          <div>
            <h3 className="text-white font-bold mb-6">Produk</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="/produk/1g" className="hover:text-emerald-400 transition-colors">Perak 1 Gram</Link></li>
              <li><Link href="/produk/5g" className="hover:text-emerald-400 transition-colors">Perak 5 Gram</Link></li>
              <li><Link href="/produk/10g" className="hover:text-emerald-400 transition-colors">Perak 10 Gram</Link></li>
              <li><Link href="/produk/0.5g" className="hover:text-emerald-400 transition-colors">Perak 0.5 Gram</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Custom Design</Link></li>
            </ul>
          </div>

          {/* Column 4: Layanan */}
          <div>
            <h3 className="text-white font-bold mb-6">Layanan</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Konsultasi Investasi</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Buyback Program</Link></li>
              <li><Link href="/#dealer" className="hover:text-emerald-400 transition-colors">Dealer Partnership</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Sertifikasi Perak</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Storage Service</Link></li>
              <li><Link href="#" className="hover:text-emerald-400 transition-colors">Market Analysis</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-silver-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-silver-500">
          <p>© 2026 SILVERMU - PT. Putra Surya Yogyakarta. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
            <Link href="#" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

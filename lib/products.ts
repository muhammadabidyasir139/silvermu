export interface Product {
  id: string;
  label: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  stock: number;
  description: string;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '10g',
    label: '10 Gram',
    name: 'Perak Batangan 10g Premium',
    price: 200000,
    originalPrice: 220000,
    image: '/src/produk10gr.jpeg',
    stock: 12,
    description: 'Pilihan terbaik untuk pertumbuhan aset maksimal. Gramasi besar dengan nilai investasi paling optimal dan spread harga terendah untuk jangka panjang.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 10 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan pelindung eksklusif']
  },
  {
    id: '5g',
    label: '5 Gram',
    name: 'Perak Batangan 5g Ekonomis',
    price: 110000,
    originalPrice: 125000,
    image: '/src/produk5gr.jpeg',
    stock: 25,
    description: 'Keseimbangan sempurna antara modal harian dan nilai aset. Cocok bagi Anda yang ingin rutin mengamankan kekayaan dengan target menengah.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 5 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan pelindung standar']
  },
  {
    id: '1g',
    label: '1 Gram',
    name: 'Perak Batangan 1g Starter Pack',
    price: 25000,
    originalPrice: 30000,
    image: '/src/produk1gr.jpeg',
    stock: 45,
    description: 'Langkah awal memulai portofolio investasi Anda. Sangat terjangkau, mudah dikoleksi, dan memberikan fleksibilitas tinggi saat ingin dicairkan.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 1 gram', 'Termasuk Sertifikat Keaslian', 'Praktis dan mudah disimpan']
  },
  {
    id: '0.5g',
    label: '0.5 Gram',
    name: 'Perak Mikro 0.5g Mikro-Investment',
    price: 15000,
    originalPrice: 18000,
    image: '/src/produksetenaghgr.jpeg',
    stock: 80,
    description: 'Investasi tanpa beban mulai dari puluhan ribu rupiah. Solusi cerdas bagi pemula untuk membangun kebiasaan menabung logam mulia sejak dini.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 0.5 gram', 'Termasuk Sertifikat Keaslian', 'Cocok untuk hadiah/souvenir']
  }
];

export interface Product {
  id: string;
  label: string;
  name: string;
  price: number;
  priceRetro?: number;
  pricePVC?: number;
  originalPrice: number;
  image: string;
  stock: number;
  description: string;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '10g-retro',
    label: '10 Gram (Retro)',
    name: 'Perak Batangan 10g Retro',
    price: 820000,
    priceRetro: 820000,
    pricePVC: 840000,
    originalPrice: 830000,
    image: '/src/retro10gr.jpeg',
    stock: 15,
    description: 'Kemasan klasik retro yang autentik. Pilihan terbaik untuk pertumbuhan aset maksimal. Gramasi besar dengan nilai investasi paling optimal untuk jangka panjang.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 10 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan Retro (Klasik)']
  },
  {
    id: '10g-pvc',
    label: '10 Gram (PVC)',
    name: 'Perak Batangan 10g PVC Premium',
    price: 840000,
    priceRetro: 820000,
    pricePVC: 840000,
    originalPrice: 850000,
    image: '/src/produk10gr.jpeg',
    stock: 12,
    description: 'Kemasan PVC modern yang kokoh dan elegan. Pilihan premium untuk pertumbuhan aset maksimal dan perlindungan optimal dari cuaca dan debu.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 10 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan pelindung eksklusif PVC']
  },
  {
    id: '5g-retro',
    label: '5 Gram (Retro)',
    name: 'Perak Batangan 5g Retro',
    price: 415000,
    priceRetro: 415000,
    pricePVC: 417500,
    originalPrice: 420000,
    image: '/src/retro5gr.jpeg',
    stock: 20,
    description: 'Kemasan klasik retro yang sangat pas untuk modal harian menengah. Cocok bagi Anda yang ingin rutin mengamankan kekayaan dengan tampilan autentik.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 5 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan Retro (Klasik)']
  },
  {
    id: '5g-pvc',
    label: '5 Gram (PVC)',
    name: 'Perak Batangan 5g PVC',
    price: 417500,
    priceRetro: 415000,
    pricePVC: 417500,
    originalPrice: 425000,
    image: '/src/produk5gr.jpeg',
    stock: 25,
    description: 'Kemasan PVC pelindung standar, keseimbangan sempurna antara keamanan dan portabilitas. Cocok untuk Anda yang rutin menabung logam mulia.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 5 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan pelindung standar PVC']
  },
  {
    id: '1g-pvc',
    label: '1 Gram (PVC)',
    name: 'Perak Batangan 1g PVC Starter Pack',
    price: 86000,
    priceRetro: 84000,
    pricePVC: 86000,
    originalPrice: 90000,
    image: '/src/produk1gr.jpeg',
    stock: 45,
    description: 'Langkah awal memulai portofolio investasi Anda. Sangat terjangkau, mudah dikoleksi dengan perlindungan PVC yang tahan lama.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 1 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan pelindung standar PVC']
  },
  {
    id: '0.5g-pvc',
    label: '0.5 Gram (PVC)',
    name: 'Perak Mikro 0.5g PVC Mikro-Investment',
    price: 59000,
    priceRetro: 57000,
    pricePVC: 59000,
    originalPrice: 65000,
    image: '/src/produksetenaghgr.jpeg',
    stock: 80,
    description: 'Investasi tanpa beban dengan perlindungan optimal. Solusi cerdas bagi pemula untuk membangun kebiasaan menabung dengan perlindungan PVC standar.',
    specs: ['Kemurnian 99.9% (Fine Silver)', 'Berat bersih 0.5 gram', 'Termasuk Sertifikat Keaslian', 'Kemasan pelindung standar PVC']
  }
];

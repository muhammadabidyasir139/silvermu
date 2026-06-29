import type { PriceData, Benefit, Fact, TimelineEvent } from '@/types';

function seededRand(n: number): number {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453123;
  return x - Math.floor(x);
}

const ID_MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];

function formatDate(date: Date): string {
  return `${date.getDate()} ${ID_MONTHS[date.getMonth()]}`;
}

function generatePriceHistory(totalDays: number): PriceData[] {
  const data: PriceData[] = [];
  const today = new Date(2026, 5, 23); // June 23, 2026
  let price = 14600;

  for (let i = totalDays - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const rand = seededRand(i);
    const trendFactor = ((totalDays - 1 - i) / (totalDays - 1)) * 2000;
    const noise = (rand - 0.46) * 320;
    price = Math.max(14000, Math.min(18000, 14600 + trendFactor + noise));

    data.push({
      date: formatDate(date),
      price: Math.round(price / 50) * 50,
    });
  }

  return data;
}

const allData365 = generatePriceHistory(365);

export const priceData30 = allData365.slice(-30);
export const priceData180 = allData365.filter((_, i) => i % 3 === 0);
export const priceData365 = allData365.filter((_, i) => i % 7 === 0);

export const currentPrice = 16500;
export const change24h = 0.8;
export const monthlyHigh = 17200;

export const benefits: Benefit[] = [
  {
    iconName: 'Shield',
    title: 'Lindung Nilai Inflasi',
    description:
      'Perak mempertahankan daya beli saat nilai mata uang melemah. Selama ribuan tahun, logam mulia ini terbukti sebagai penyimpan nilai yang andal.',
  },
  {
    iconName: 'Wallet',
    title: 'Modal Awal Terjangkau',
    description:
      'Bisa mulai dari puluhan ribu rupiah, cocok untuk investor pemula. Harga per gram yang jauh lebih rendah dari emas membuat perak sangat aksesibel.',
  },
  {
    iconName: 'TrendingUp',
    title: 'Likuiditas Tinggi',
    description:
      'Dapat dijual kapan saja di pasar global maupun lokal. Perak adalah salah satu komoditas paling diperdagangkan di dunia dengan volume transaksi harian yang besar.',
  },
  {
    iconName: 'Globe',
    title: 'Nilai Historis Global',
    description:
      'Digunakan sebagai alat tukar selama ribuan tahun di berbagai peradaban. Dari Yunani kuno hingga Tiongkok, perak adalah fondasi ekonomi dunia.',
  },
  {
    iconName: 'Zap',
    title: 'Permintaan Industri Tumbuh',
    description:
      'Panel surya, kendaraan listrik, dan elektronik membutuhkan perak dalam skala besar. Transisi energi global memastikan permintaan industri terus meningkat.',
  },
  {
    iconName: 'Package',
    title: 'Aset Nyata & Tangible',
    description:
      'Berbeda dengan saham atau kripto, perak bisa dipegang secara fisik. Keberadaan fisiknya memberi ketenangan pikiran yang tidak dimiliki aset digital.',
  },
];

export const facts: Fact[] = [
  {
    number: '5.000+',
    label: 'Tahun Sejarah',
    context: 'Perak telah digunakan sebagai alat tukar dan penyimpan nilai oleh manusia selama lebih dari 5.000 tahun.',
  },
  {
    number: '25.000',
    label: 'Ton Produksi/Tahun',
    context: 'Produksi perak dunia mencapai sekitar 25.000 ton per tahun, dengan Mexico, Peru, dan Cina sebagai produsen utama.',
  },
  {
    number: '50%',
    label: 'Diserap Industri',
    context: 'Setengah dari permintaan perak dunia berasal dari sektor industri — elektronik, medis, dan energi terbarukan.',
  },
  {
    number: '.999',
    label: 'Kemurnian Fine Silver',
    context: 'Standar kemurnian fine silver tertinggi adalah .999 (99,9%), digunakan dalam koin investasi dan batangan premium.',
  },
];

export const timeline: TimelineEvent[] = [
  { period: '3000 SM', event: 'Peradaban Kuno' },
  { period: '600 SM', event: 'Koin Pertama' },
  { period: 'Abad 16', event: 'Era Perdagangan Global' },
  { period: 'Abad 19', event: 'Standar Moneter Perak' },
  { period: 'Abad 20', event: 'Era Industri Modern' },
  { period: 'Kini', event: 'Energi Terbarukan' },
];

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { TrendingUp, TrendingDown, BarChart2, Loader2 } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Calculator from '@/components/ui/Calculator';
import type { PriceData } from '@/types';

function formatRp(val: number): string {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val);
}

function MetricCard({
  label,
  value,
  sub,
  positive,
  icon: Icon,
  isLoading
}: {
  label: string;
  value: string;
  sub?: string;
  positive?: boolean;
  icon: React.ElementType;
  isLoading?: boolean;
}) {
  return (
    <div className="bg-white rounded-2xl border border-silver-200 p-5">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold text-silver-400 uppercase tracking-wide">{label}</span>
        <Icon size={16} className="text-silver-300" />
      </div>
      
      {isLoading ? (
        <div className="h-8 w-32 bg-silver-100 rounded-md animate-pulse mb-1"></div>
      ) : (
        <div className="text-2xl font-bold text-silver-900 mb-1">{value}</div>
      )}

      {isLoading ? (
        <div className="h-4 w-24 bg-silver-100 rounded-md animate-pulse mt-2"></div>
      ) : sub ? (
        <div
          className={`text-sm font-medium ${
            positive === true ? 'text-emerald-600' : positive === false ? 'text-rose-500' : 'text-silver-400'
          }`}
        >
          {sub}
        </div>
      ) : null}
    </div>
  );
}

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-silver-200 rounded-xl px-4 py-3 shadow-md">
      <p className="text-xs text-silver-500 mb-1">{label}</p>
      <p className="text-sm font-semibold text-silver-900">{formatRp(payload[0].value)}</p>
    </div>
  );
}

const TABS_KEYS = ['1mo', '6mo', '1y'] as const;
const TABS_LABELS = ['1 Bulan', '6 Bulan', '1 Tahun'];

export default function PriceSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState<{
    currentPrice: number;
    change24h: number;
    monthlyHigh: number;
    tabs: { '1mo': PriceData[], '6mo': PriceData[], '1y': PriceData[] }
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchSilverData() {
      try {
        const res = await fetch('/api/silver');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error('Failed to fetch silver data:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchSilverData();
  }, []);

  const activeKey = TABS_KEYS[activeTab];
  const chartData = data?.tabs[activeKey] || [];

  const maxTicks = 6;
  const step = Math.max(1, Math.floor(chartData.length / maxTicks));
  const ticks = chartData.filter((_, i) => i % step === 0).map((d) => d.date);

  return (
    <SectionWrapper id="harga" ariaLabel="Informasi harga perak">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-silver-900 mb-4"
        >
          Harga Perak Hari Ini
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-silver-500 max-w-xl mx-auto"
        >
          Pantau pergerakan harga perak secara live dan hitung potensi investasi Anda.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="grid sm:grid-cols-3 gap-4 mb-8"
      >
        <MetricCard
          label="Harga Spot Saat Ini"
          value={data ? formatRp(data.currentPrice) : ''}
          sub="per gram"
          icon={BarChart2}
          isLoading={loading}
        />
        <MetricCard
          label="Perubahan 24 Jam"
          value={data ? `${data.change24h > 0 ? '+' : ''}${data.change24h}%` : ''}
          sub={data ? (data.change24h >= 0 ? "↑ Naik dari kemarin" : "↓ Turun dari kemarin") : ''}
          positive={data ? data.change24h >= 0 : undefined}
          icon={data && data.change24h < 0 ? TrendingDown : TrendingUp}
          isLoading={loading}
        />
        <MetricCard
          label="Tertinggi Bulan Ini"
          value={data ? formatRp(data.monthlyHigh) : ''}
          sub="per gram"
          icon={TrendingUp}
          isLoading={loading}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="bg-white rounded-2xl border border-silver-200 p-6 mb-8 relative min-h-[350px]"
        aria-description="Grafik tren harga perak"
      >
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <h3 className="font-semibold text-silver-900">Tren Harga Perak (Live)</h3>
          <div className="flex gap-1 bg-silver-50 rounded-lg p-1">
            {TABS_LABELS.map((label, i) => (
              <button
                key={label}
                onClick={() => setActiveTab(i)}
                className={`text-sm px-3 py-1.5 rounded-md font-medium transition-all ${
                  activeTab === i
                    ? 'bg-white text-silver-900 shadow-sm border border-silver-200'
                    : 'text-silver-500 hover:text-silver-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 z-10 pt-10">
            <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mb-4" />
            <p className="text-silver-500 text-sm font-medium">Memuat data live...</p>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 z-10 pt-10">
            <p className="text-rose-500 text-sm font-medium">Gagal memuat grafik harga. Coba muat ulang.</p>
          </div>
        ) : null}

        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={chartData} margin={{ top: 4, right: 4, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="silverGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F4F4C" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#4F4F4C" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E8E8" vertical={false} />
            <XAxis
              dataKey="date"
              ticks={ticks}
              tick={{ fill: '#888780', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={['auto', 'auto']}
              tick={{ fill: '#888780', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`}
              width={38}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#4F4F4C"
              strokeWidth={2}
              fill="url(#silverGrad)"
              dot={false}
              activeDot={{ r: 4, fill: '#4F4F4C', strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, delay: 0.15 }}
      >
        <Calculator />
      </motion.div>

      <p className="text-center text-xs text-silver-300 mt-6 max-w-lg mx-auto">
        Harga sudah disesuaikan dengan nilai tukar IDR dan premium retail. Selalu cek harga aktual dengan admin sebelum bertransaksi.
      </p>
    </SectionWrapper>
  );
}

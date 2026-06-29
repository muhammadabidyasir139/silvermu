'use client';

import { useState } from 'react';
import { currentPrice } from '@/lib/silverData';

function formatRupiah(val: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(val);
}

export default function Calculator() {
  const [grams, setGrams] = useState('');

  const num = parseFloat(grams) || 0;
  const value = num * currentPrice;
  const projected = value * 1.05;
  const gain = projected - value;

  return (
    <div
      className="bg-white rounded-2xl border border-silver-200 p-6 shadow-sm"
      aria-label="Kalkulator investasi perak"
    >
      <h3 className="text-lg font-semibold text-silver-900 mb-1">Kalkulator Investasi</h3>
      <p className="text-sm text-silver-500 mb-5">
        Hitung estimasi nilai investasi Anda berdasarkan harga saat ini.
      </p>

      <div className="mb-5">
        <label htmlFor="calc-grams" className="block text-sm font-medium text-silver-700 mb-2">
          Jumlah gram yang ingin dibeli
        </label>
        <div className="relative">
          <input
            id="calc-grams"
            type="number"
            min="0"
            step="0.1"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
            placeholder="cth: 10"
            className="w-full px-4 py-3 pr-14 border border-silver-200 rounded-xl text-silver-900 placeholder:text-silver-300 bg-silver-50 focus:outline-none focus:ring-2 focus:ring-silver-400 focus:bg-white transition-colors"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-silver-400 font-medium">
            gram
          </span>
        </div>
        <p className="mt-1.5 text-xs text-silver-400">
          Harga referensi: {formatRupiah(currentPrice)} / gram
        </p>
      </div>

      <div className="space-y-0 rounded-xl overflow-hidden border border-silver-100">
        <div className="flex justify-between items-center px-4 py-3.5 bg-silver-50">
          <span className="text-sm text-silver-600">Nilai saat ini</span>
          <span className="font-semibold text-silver-900">
            {num > 0 ? formatRupiah(value) : '—'}
          </span>
        </div>
        <div className="flex justify-between items-center px-4 py-3.5 bg-white border-t border-silver-100">
          <span className="text-sm text-silver-600">Proyeksi +5% (1 tahun)</span>
          <span className="font-semibold text-silver-800">
            {num > 0 ? formatRupiah(projected) : '—'}
          </span>
        </div>
        <div className="flex justify-between items-center px-4 py-3.5 bg-silver-50 border-t border-silver-100">
          <span className="text-sm text-silver-600">Estimasi keuntungan</span>
          <span className="font-semibold text-silver-700">
            {num > 0 ? `+ ${formatRupiah(gain)}` : '—'}
          </span>
        </div>
      </div>
    </div>
  );
}

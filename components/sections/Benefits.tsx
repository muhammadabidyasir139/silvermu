'use client';

import { motion } from 'framer-motion';
import { Shield, Wallet, TrendingUp, Globe, Zap, Package } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { benefits } from '@/lib/silverData';
import type { Benefit } from '@/types';

const ICON_MAP: Record<string, React.ElementType> = {
  Shield,
  Wallet,
  TrendingUp,
  Globe,
  Zap,
  Package,
};

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  const Icon = ICON_MAP[benefit.iconName] ?? Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl border border-silver-200 p-6 hover:border-silver-400 transition-all duration-200 group"
    >
      <div className="w-11 h-11 rounded-xl bg-silver-100 flex items-center justify-center mb-4 group-hover:bg-silver-200 transition-colors">
        <Icon size={20} className="text-silver-700" />
      </div>
      <h3 className="font-semibold text-silver-900 mb-2">{benefit.title}</h3>
      <p className="text-sm text-silver-500 leading-relaxed">{benefit.description}</p>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <SectionWrapper
      id="keunggulan"
      className="bg-silver-50"
      ariaLabel="Keunggulan investasi perak"
    >
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-silver-900 mb-4"
        >
          Mengapa Perak Layak Dipertimbangkan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-silver-500 max-w-xl mx-auto"
        >
          Dari perlindungan inflasi hingga permintaan industri yang terus tumbuh, perak
          menawarkan kombinasi keunggulan yang sulit diabaikan.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((benefit, i) => (
          <BenefitCard key={benefit.title} benefit={benefit} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

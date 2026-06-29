'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Link from 'next/link';
import { NEWS } from '@/lib/news';

export default function NewsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <SectionWrapper id="berita" ariaLabel="Berita dan Artikel Silvermu" className="bg-silver-50">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-silver-900 mb-4"
        >
          Berita & Wawasan
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1 }}
          className="text-silver-500 max-w-2xl mx-auto text-lg"
        >
          Temukan informasi terbaru seputar industri, tren pasar, dan strategi investasi logam mulia.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {NEWS.map((article) => (
            <motion.div
              key={article.slug}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-2xl bg-white border border-silver-200 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden group"
            >
              <Link href={`/berita/${article.slug}`} className="flex flex-col flex-grow">
                {/* Image Section */}
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute inset-0 bg-silver-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-silver-800 text-xs font-semibold px-3 py-1.5 rounded-full z-20">
                    {article.date}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-silver-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-silver-600 mb-6 leading-relaxed flex-grow">
                    {article.snippet}
                  </p>
                  
                  {/* Action */}
                  <div className="mt-auto inline-flex items-center text-emerald-600 font-semibold text-sm group-hover:text-emerald-700 transition-colors">
                    Baca Selengkapnya <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

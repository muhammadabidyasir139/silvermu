import { NEWS } from '@/lib/news';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return NEWS.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = NEWS.find((p) => p.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <SectionWrapper id="article" ariaLabel="Detail Artikel Berita" className="pt-24 lg:pt-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/#berita" className="inline-flex items-center text-sm font-medium text-silver-500 hover:text-silver-900 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Kembali ke Berita
          </Link>
          
          <article>
            {/* Header */}
            <header className="mb-10 text-center">
              <div className="flex items-center justify-center text-sm text-silver-500 mb-4 font-medium">
                <Calendar size={16} className="mr-2" />
                {article.date}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-silver-900 leading-tight mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-silver-600 leading-relaxed max-w-3xl mx-auto">
                {article.snippet}
              </p>
            </header>

            {/* Featured Image */}
            <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-lg">
              <img 
                src={article.imageUrl} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content (Markdown styling) */}
            <div className="prose prose-lg prose-silver mx-auto text-silver-700 leading-relaxed">
               {article.content.split('\n\n').map((paragraph, idx) => {
                 // Bold headers check
                 if (paragraph.startsWith('**') && paragraph.endsWith('**') && paragraph.length < 100) {
                   return <h3 key={idx} className="text-2xl font-bold text-silver-900 mt-10 mb-4">{paragraph.replace(/\*\*/g, '')}</h3>;
                 }
                 // List items
                 if (paragraph.includes('* **')) {
                   const lines = paragraph.split('\n');
                   return (
                     <ul key={idx} className="list-disc pl-6 mb-6 space-y-2">
                       {lines.map((line, lidx) => {
                         if (line.startsWith('* ')) {
                           // Extract **bold** from '* **Bold:** text'
                           const parts = line.substring(2).split('**');
                           if (parts.length > 2) {
                             return <li key={lidx}><strong>{parts[1]}</strong>{parts[2]}</li>;
                           }
                           return <li key={lidx}>{line.substring(2)}</li>;
                         }
                         return null;
                       })}
                     </ul>
                   );
                 }
                 // Normal paragraph
                 // handle inline bolds
                 const renderText = (text: string) => {
                   const parts = text.split('**');
                   return parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="font-semibold text-silver-900">{part}</strong> : part);
                 };
                 
                 return <p key={idx} className="mb-6">{renderText(paragraph)}</p>;
               })}
            </div>

          </article>
        </div>
      </SectionWrapper>
    </main>
  );
}

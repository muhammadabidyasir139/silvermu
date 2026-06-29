import Hero from '@/components/sections/Hero';
import Comparison from '@/components/sections/Comparison';
import ProductShowcase from '@/components/sections/ProductShowcase';
import Benefits from '@/components/sections/Benefits';
import DealerSection from '@/components/sections/DealerSection';
import PriceSection from '@/components/sections/PriceSection';
import NewsSection from '@/components/sections/NewsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Comparison />
      <ProductShowcase />
      <Benefits />
      <DealerSection />
      <PriceSection />
      <NewsSection />
      <ContactSection />
    </>
  );
}

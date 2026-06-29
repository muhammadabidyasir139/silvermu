import { PRODUCTS } from '@/lib/products';
import ProductDetailClient from '@/components/sections/ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map((prod) => ({
    id: prod.id,
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const productIdx = PRODUCTS.findIndex((p) => p.id === params.id);
  
  // Default to first product if not found, though Next.js will likely handle 404
  const initialIdx = productIdx !== -1 ? productIdx : 0;

  return (
    <main className="min-h-screen bg-white">
      <ProductDetailClient initialIdx={initialIdx} />
    </main>
  );
}

import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Stats from '../components/Stats/Stats';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import FAQ from '../components/FAQ/FAQ';
import { products } from '../data/mockData';
import { useState } from 'react';
import { Product } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Stats />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              产品中心
            </h2>
            <p className="text-lg text-gray-600">
              专业的洗车设备，满足不同场景需求
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
            >
              查看全部产品
            </button>
          </div>
        </div>
      </section>

      <FAQ />

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
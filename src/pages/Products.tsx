import { useState } from 'react';
import { Droplets, Bot, Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard/ProductCard';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import { products, Product } from '../data/mockData';

type Category = 'all' | 'self-service' | 'automatic';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const categories: { value: Category; label: string; icon: typeof Droplets }[] = [
    { value: 'all', label: '全部产品', icon: Filter },
    { value: 'self-service', label: '自助洗车机', icon: Droplets },
    { value: 'automatic', label: '全自动洗车机', icon: Bot },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            产品中心
          </h1>
          <p className="text-xl text-blue-100">
            专业的洗车设备，满足不同场景需求
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.value
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">暂无该分类下的产品</p>
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
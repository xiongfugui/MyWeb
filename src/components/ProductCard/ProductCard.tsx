import { ArrowRight, Droplets, Bot } from 'lucide-react';
import { Product } from '../../data/mockData';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const CategoryIcon = product.category === 'self-service' ? Droplets : Bot;
  const categoryLabel = product.category === 'self-service' ? '自助洗车机' : '全自动洗车机';
  const categoryColor = product.category === 'self-service' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600';

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-500 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColor}`}>
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-2">
          <CategoryIcon className="w-4 h-4 mr-2 text-gray-400" />
          <span className="text-sm text-gray-500">{categoryLabel}</span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-600">{product.priceRange}</span>
          <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
            了解详情
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
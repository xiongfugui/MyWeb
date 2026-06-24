import { X, Check, Droplets, Bot } from 'lucide-react';
import { Product } from '../../data/mockData';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  if (!product) return null;

  const CategoryIcon = product.category === 'self-service' ? Droplets : Bot;
  const categoryLabel = product.category === 'self-service' ? '自助洗车机' : '全自动洗车机';
  const categoryColor = product.category === 'self-service' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${categoryColor}`}>
                {categoryLabel}
              </span>
            </div>
          </div>

          <div className="p-8 overflow-y-auto max-h-[90vh] md:max-h-none">
            <div className="flex items-center mb-4">
              <CategoryIcon className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-sm text-gray-500">{categoryLabel}</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">产品特点</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">技术参数</h3>
              <div className="bg-gray-50 rounded-xl p-4">
                {product.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex justify-between py-2 ${index < product.specifications.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <span className="text-gray-500">{spec.label}</span>
                    <span className="font-medium text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <span className="text-gray-500 text-sm">价格区间</span>
                <p className="text-2xl font-bold text-blue-600">{product.priceRange}</p>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors">
                获取报价
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
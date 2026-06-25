import { ChevronDown } from 'lucide-react';
import { companyInfo } from '../../data/mockData';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt="新海洋生活馆"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-start justify-end pt-30 md:pt-40 px-4 md:px-16">
        <div className="w-full max-w-xl md:max-w-2xl text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg whitespace-nowrap">
            {companyInfo.slogan}
          </h1>

          <p className="text-sm md:text-base text-white/85 leading-relaxed font-light mb-8">
            {companyInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-base hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              查看产品
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-semibold text-base hover:bg-white/30 hover:border-white/50 transition-all duration-300"
            >
              联系我们
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
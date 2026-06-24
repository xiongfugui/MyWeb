import { ChevronDown, Sparkles } from 'lucide-react';
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="flex items-center space-x-2 mb-8">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-amber-200 text-sm font-medium tracking-widest uppercase">
            Smart Car Wash Leader
          </span>
          <Sparkles className="w-5 h-5 text-amber-400" />
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          <span className="block">{companyInfo.name}</span>
          <span className="text-amber-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 block">
            {companyInfo.slogan}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mb-12 leading-relaxed font-light drop-shadow-lg">
          {companyInfo.description}
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
          <button
            onClick={() => navigate('/products')}
            className="px-10 py-4 bg-amber-500 text-white rounded-full font-bold text-lg hover:bg-amber-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            查看产品
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white rounded-full font-bold text-lg hover:bg-white/20 hover:border-white transition-all duration-300"
          >
            联系我们
          </button>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce drop-shadow-lg"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
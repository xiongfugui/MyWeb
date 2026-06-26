import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: '首页' },
  { path: '/products', label: '产品中心' },
  { path: '/machine-start', label: '扫码洗车' },
  { path: '/about', label: '关于我们' },
  { path: '/services', label: '服务支持' },
  { path: '/contact', label: '联系我们' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            <Droplets
              className={`w-8 h-8 mr-2 ${
                isScrolled ? 'text-cyan-600' : 'text-cyan-400'
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              新海洋生活馆
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? isScrolled
                      ? 'text-cyan-600'
                      : 'text-white'
                    : isScrolled
                    ? 'text-gray-600 hover:text-cyan-600'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className={`hidden md:block px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-md ${
              isScrolled
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
            }`}
            onClick={() => handleNavClick('/contact')}
          >
            获取报价
          </button>

          <button
            className={`md:hidden p-2 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left px-4 py-2.5 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-cyan-50 text-cyan-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium mx-4 hover:from-cyan-600 hover:to-blue-700 transition-all"
                onClick={() => handleNavClick('/contact')}
              >
                获取报价
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
import { Droplets, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { companyInfo, contactInfo } from '../../data/mockData';

const footerLinks = {
  products: [
    { label: '标准型自助洗车机', path: '/products' },
    { label: '豪华型自助洗车机', path: '/products' },
    { label: '隧道式全自动洗车机', path: '/products' },
    { label: '往复式全自动洗车机', path: '/products' },
  ],
  services: [
    { label: '售后服务', path: '/services' },
    { label: '技术支持', path: '/services' },
    { label: '配件供应', path: '/services' },
    { label: '运营指导', path: '/services' },
  ],
  about: [
    { label: '公司介绍', path: '/about' },
    { label: '发展历程', path: '/about' },
    { label: '企业文化', path: '/about' },
    { label: '联系我们', path: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <Droplets className="w-8 h-8 mr-2 text-blue-400" />
              <span className="text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {companyInfo.slogan}
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                <span>{contactInfo.workingHours}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">产品中心</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">服务支持</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
              </p>
              <span className="text-gray-500 text-sm">|</span>
              <a href="https://beian.miit.gov.cn/" className="text-gray-400 text-sm hover:text-white transition-colors">
                粤ICP备2026081936号-1
              </a>
              <span className="text-gray-500 text-sm">|</span>
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44010502004149" rel="noreferrer" target="_blank" className="text-gray-400 text-sm hover:text-white transition-colors">
                粤公网安备44010502004149号
              </a>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                服务条款
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
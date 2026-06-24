import { Wrench, Headphones, Package, ChartLine, Clock, Shield, Truck, Users } from 'lucide-react';
import { services } from '../data/mockData';
import FAQ from '../components/FAQ/FAQ';

const iconMap: Record<string, typeof Wrench> = {
  Wrench,
  Headphones,
  Package,
  ChartLine,
};

const serviceFeatures = [
  { icon: Clock, title: '24小时响应', description: '全天候技术支持，随时为您解决问题' },
  { icon: Shield, title: '品质保障', description: '原厂配件，质量保证' },
  { icon: Truck, title: '快速配送', description: '全国物流网络，配件快速送达' },
  { icon: Users, title: '专业团队', description: '经验丰富的工程师团队' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            服务支持
          </h1>
          <p className="text-xl text-blue-100">
            专业的服务团队，为您提供全方位支持
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              服务项目
            </h2>
            <p className="text-lg text-gray-600">
              完善的服务体系，让您无后顾之忧
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Wrench;
              return (
                <div
                  key={service.id}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                为什么选择我们的服务
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                我们深知售后服务的重要性，因此建立了完善的服务体系，确保每一位客户都能享受到优质的服务体验。
              </p>
              <div className="space-y-6">
                {serviceFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20technical%20support%20team%20service%20car%20wash%20equipment%20repair%20friendly%20staff&image_size=landscape_4_3"
                alt="技术支持"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
}
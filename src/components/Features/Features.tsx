import { Zap, Shield, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '高效清洗',
    description: '高压水枪配合专业清洗剂，快速去除污渍，让您的爱车焕然一新。',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '采用优质材料和先进工艺，设备稳定耐用，保障用户使用安全。',
  },
  {
    icon: Leaf,
    title: '节能环保',
    description: '智能节水系统，比传统洗车节省50%水资源，践行绿色环保理念。',
  },
  {
    icon: Clock,
    title: '24小时服务',
    description: '全年无休，随时可用，让您在任何时间都能享受便捷的洗车服务。',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-600 text-sm font-medium tracking-wider uppercase mb-4 block">
            核心优势
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们致力于为客户提供最优质的洗车设备和服务，让洗车变得简单、便捷、环保。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-cyan-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
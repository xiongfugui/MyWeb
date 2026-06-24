import { Zap, Shield, Leaf, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '高效清洗',
    description: '高压水枪配合专业清洗剂，快速去除污渍，让您的爱车焕然一新。',
    color: 'blue',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '采用优质材料和先进工艺，设备稳定耐用，保障用户使用安全。',
    color: 'green',
  },
  {
    icon: Leaf,
    title: '节能环保',
    description: '智能节水系统，比传统洗车节省50%水资源，践行绿色环保理念。',
    color: 'emerald',
  },
  {
    icon: Clock,
    title: '24小时服务',
    description: '全年无休，随时可用，让您在任何时间都能享受便捷的洗车服务。',
    color: 'orange',
  },
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    border: 'group-hover:border-blue-500',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'text-green-600',
    border: 'group-hover:border-green-500',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    border: 'group-hover:border-emerald-500',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    border: 'group-hover:border-orange-500',
  },
};

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            为什么选择我们
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们致力于为客户提供最优质的洗车设备和服务，让洗车变得简单、便捷、环保。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border-2 border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${colors.border}`}
              >
                <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
import { Lightbulb, Heart, Shield, Leaf, Award, Users, Globe } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import Timeline from '../components/Timeline/Timeline';

const iconMap: Record<string, typeof Lightbulb> = {
  Lightbulb,
  Heart,
  Shield,
  Leaf,
};

const achievements = [
  { icon: Award, value: '50+', label: '专利技术' },
  { icon: Users, value: '5000+', label: '服务客户' },
  { icon: Globe, value: '30+', label: '覆盖省市' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            关于我们
          </h1>
          <p className="text-xl text-blue-100">
            {companyInfo.slogan}
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                公司简介
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                我们始终坚持以客户需求为导向，不断创新和改进产品。凭借专业的技术团队、完善的售后服务体系和良好的品牌口碑，新海洋生活馆已成为行业内最值得信赖的品牌之一。
              </p>
            </div>
            <div className="relative">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20factory%20production%20line%20car%20wash%20equipment%20manufacturing%20professional%20clean%20environment&image_size=landscape_4_3"
                alt="公司工厂"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <span className="text-4xl font-bold">8+</span>
                <p className="text-blue-100">年行业经验</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              企业文化
            </h2>
            <p className="text-lg text-gray-600">
              我们的价值观，指引着每一步前行
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.values.map((value, index) => {
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Timeline />

      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              企业荣誉
            </h2>
            <p className="text-blue-100 text-lg">
              品质铸就信赖，荣誉见证实力
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                >
                  <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                  <span className="text-4xl font-bold text-white">
                    {achievement.value}
                  </span>
                  <p className="text-blue-100 text-lg mt-2">
                    {achievement.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
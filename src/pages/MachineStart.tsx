import { Power, Settings, Timer, Droplets, Thermometer, Wind } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MachineStart() {
  const navigate = useNavigate();
  const steps = [
    {
      icon: <Power className="w-12 h-12" />,
      step: '01',
      title: '扫码启动',
      description: '扫描洗车机二维码，选择服务并完成支付',
    },
    {
      icon: <Settings className="w-12 h-12" />,
      step: '02',
      title: '参数设置',
      description: '根据车型和脏污程度调整洗车参数',
    },
    {
      icon: <Timer className="w-12 h-12" />,
      step: '03',
      title: '开始清洗',
      description: '确认设置后，设备自动开始洗车流程',
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      step: '04',
      title: '完成洗车',
      description: '清洗完成后，设备自动停机，可进行吹干',
    },
  ];

  const services = [
    {
      name: '标准洗车',
      duration: '5分钟',
      price: '¥15',
      description: '基础清洗，适合日常维护',
      features: ['高压冲洗', '泡沫清洗', '清水冲洗', '车身擦拭', '轮胎清洗', '基础风干'],
    },
    {
      name: '精致洗车',
      duration: '8分钟',
      price: '¥25',
      description: '深度清洗，去除顽固污渍',
      features: ['高压冲洗', '泡沫清洗', '精细擦拭', '轮毂清洗', '玻璃清洁', '快速风干'],
    },
    {
      name: '豪华洗车',
      duration: '12分钟',
      price: '¥35',
      description: '全面护理，爱车焕然一新',
      features: ['高压冲洗', '泡沫清洗', '精细擦拭', '打蜡护理', '清水冲洗', '强力风干'],
    },
  ];

  const settings = [
    {
      icon: <Droplets className="w-6 h-6" />,
      name: '水压调节',
      description: '根据车身状况调整水压强度',
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      name: '水温控制',
      description: '支持常温/温水清洗模式',
    },
    {
      icon: <Wind className="w-6 h-6" />,
      name: '风干速度',
      description: '可调节风干风速和时间',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl mb-6">
            <Power className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            扫码洗车
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            扫码启动，智能洗车。新海洋生活馆设备操作简单，轻松完成洗车流程
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{step.icon}</div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            服务选择
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-transparent hover:border-orange-400 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-600 mb-1">
                    {service.price}
                  </div>
                  <div className="text-sm text-gray-500">{service.duration}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate('/wechat-pay')} className="w-full mt-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-amber-700 transition-all duration-300">
                  选择此服务
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              智能调节
            </h2>
            <div className="space-y-6">
              {settings.map((setting, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mr-4">
                    <div className="text-orange-600">{setting.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{setting.name}</h4>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-8 text-white">
            <div className="flex items-center mb-6">
              <Settings className="w-10 h-10 mr-4" />
              <h2 className="text-2xl font-bold">操作指南</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <p>将车辆停放在指定区域，确保车轮位于感应区内</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <p>关闭车窗，收起后视镜，确保车内无人</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <p>扫码选择服务，确认支付后等待设备启动</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <p>洗车过程中请勿靠近设备，保持安全距离</p>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold">5</span>
                </div>
                <p>清洗完成后，检查车身，如有需要可进行二次清洗</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
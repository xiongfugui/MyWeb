import { QrCode, Smartphone, Shield, Clock, UserCheck } from 'lucide-react';

export default function MembershipScan() {
  const steps = [
    {
      icon: <QrCode className="w-10 h-10 text-cyan-600" />,
      title: '扫码注册',
      description: '使用微信扫描洗车机上的二维码，快速注册成为会员',
    },
    {
      icon: <UserCheck className="w-10 h-10 text-cyan-600" />,
      title: '登录账号',
      description: '注册成功后自动登录，享受会员专属优惠和便捷服务',
    },
    {
      icon: <Smartphone className="w-10 h-10 text-cyan-600" />,
      title: '选择服务',
      description: '在手机上选择洗车模式、清洗时间和附加服务',
    },
    {
      icon: <Shield className="w-10 h-10 text-cyan-600" />,
      title: '扫码启动',
      description: '确认订单后扫码启动设备，开始洗车流程',
    },
  ];

  const benefits = [
    { title: '便捷支付', desc: '扫码即可支付，无需现金和刷卡' },
    { title: '会员折扣', desc: '享受专属会员价，充值更优惠' },
    { title: '消费记录', desc: '随时查看洗车记录和余额信息' },
    { title: '优惠券', desc: '定期发放优惠券和促销活动' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl mb-6">
            <QrCode className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            会员扫码洗车
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            便捷扫码，轻松洗车。成为新海洋生活馆会员，享受智能洗车新体验
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                {step.icon}
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
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                会员专属福利
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start p-4 bg-cyan-50 rounded-xl"
                  >
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl flex items-center justify-center">
                  <div className="w-52 h-52 bg-white rounded-2xl flex flex-col items-center justify-center shadow-inner">
                    <div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <QrCode className="w-20 h-20 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500">扫码注册会员</p>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Clock className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              快速注册
            </h3>
            <p className="text-gray-600">
              仅需手机号即可注册，全程不超过1分钟
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              安全支付
            </h3>
            <p className="text-gray-600">
              微信支付安全可靠，资金交易有保障
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <Smartphone className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              智能管理
            </h3>
            <p className="text-gray-600">
              手机小程序管理账户，随时查看消费明细
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
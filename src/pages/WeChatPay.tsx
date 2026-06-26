import { useState } from 'react';
import { Wallet, Shield, CheckCircle2, ArrowLeft, Clock, QrCode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WeChatPay() {
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'processing' | 'success'>('pending');
  const [countdown, setCountdown] = useState(180);

  const orderInfo = {
    service: '标准洗车',
    price: 15,
    duration: '5分钟',
    machine: 'A01号工位',
    outlet: '琶洲旗舰店',
    time: '2026-06-25 14:30:00',
  };

  const handlePay = () => {
    setPaymentStatus('processing');
    let timer = countdown;
    const interval = setInterval(() => {
      timer--;
      setCountdown(timer);
      if (timer <= 0) {
        clearInterval(interval);
        setPaymentStatus('success');
      }
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setPaymentStatus('success');
    }, 5000);
  };

  const handleBack = () => {
    navigate('/machine-start');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50 pt-28 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
            <div className="flex items-center justify-between">
              <button
                onClick={handleBack}
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>返回</span>
              </button>
              <div className="flex items-center">
                <Wallet className="w-6 h-6 mr-2" />
                <span className="font-semibold">微信支付</span>
              </div>
              <div className="w-20"></div>
            </div>
          </div>

          <div className="p-6">
            {paymentStatus === 'pending' && (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <QrCode className="w-8 h-8 text-green-600" />
                  </div>
                  <h1 className="text-xl font-bold text-gray-900 mb-2">确认支付</h1>
                  <p className="text-gray-600">使用微信扫码支付</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-4">订单信息</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">网点信息</span>
                      <span className="font-medium">{orderInfo.outlet}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">服务项目</span>
                      <span className="font-medium">{orderInfo.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">服务时长</span>
                      <span className="font-medium">{orderInfo.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">使用工位</span>
                      <span className="font-medium">{orderInfo.machine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">下单时间</span>
                      <span className="font-medium text-sm">{orderInfo.time}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                      <span className="font-semibold text-gray-900">应付金额</span>
                      <span className="text-2xl font-bold text-green-600">¥{orderInfo.price}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 text-center mb-6">
                  <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center shadow-inner">
                    <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">微信扫码支付</p>
                  <p className="text-xs text-gray-500">请使用微信扫描二维码完成支付</p>
                </div>

                <button
                  onClick={handlePay}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-green-500/30"
                >
                  立即支付 ¥{orderInfo.price}
                </button>

                <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>微信支付安全保障</span>
                </div>
              </>
            )}

            {paymentStatus === 'processing' && (
              <>
                <div className="text-center py-12">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-green-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-green-500 rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">支付处理中...</h2>
                  <p className="text-gray-600 mb-4">请确认微信支付</p>
                  <div className="flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-2" />
                    <span className="text-gray-600">剩余时间: {formatTime(countdown)}</span>
                  </div>
                </div>
              </>
            )}

            {paymentStatus === 'success' && (
              <>
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
                    <CheckCircle2 className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">支付成功</h2>
                  <p className="text-gray-600 mb-8">您的订单已支付成功，设备即将启动</p>

                  <div className="bg-green-50 rounded-xl p-4 mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">订单金额</span>
                      <span className="font-bold text-green-600">¥{orderInfo.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">支付方式</span>
                      <span className="font-medium">微信支付</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={handleBack}
                      className="py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                    >
                      返回首页
                    </button>
                    <button
                      onClick={() => navigate('/machine-start')}
                      className="py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                    >
                      查看订单
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
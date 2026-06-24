import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import ContactForm from '../components/ContactForm/ContactForm';

const contactMethods = [
  { icon: MapPin, label: '公司地址', value: contactInfo.address },
  { icon: Phone, label: '联系电话', value: contactInfo.phone },
  { icon: Mail, label: '电子邮箱', value: contactInfo.email },
  { icon: Clock, label: '工作时间', value: contactInfo.workingHours },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            联系我们
          </h1>
          <p className="text-xl text-blue-100">
            有任何问题或需求，欢迎随时联系我们
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                联系方式
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                我们期待与您合作，为您提供最优质的洗车设备和服务。如有任何问题或需求，请随时与我们联系。
              </p>

              <div className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {method.label}
                        </h3>
                        <p className="text-gray-600">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center mb-4">
                  <Send className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">快速咨询</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  您也可以通过以下方式快速联系我们的销售团队：
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    拨打电话
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    发送邮件
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                在线咨询
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              欢迎来访
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              我们位于广州市海珠区琶洲东路8号，欢迎您前来参观考察
            </p>
            <div className="bg-gray-800 rounded-2xl overflow-hidden">
              <img
                src="/ditu.png"
                alt="公司位置地图"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
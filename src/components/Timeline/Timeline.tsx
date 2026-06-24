import { companyInfo } from '../../data/mockData';

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            发展历程
          </h2>
          <p className="text-lg text-gray-600">
            从创立到发展，我们一直在努力创新
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full hidden md:block" />

          <div className="space-y-12">
            {companyInfo.history.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="md:w-1/2 px-4">
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}
                  >
                    <span className="text-3xl font-bold text-blue-600">
                      {item.year}
                    </span>
                    <p className="text-gray-600 mt-3">{item.event}</p>
                  </div>
                </div>

                <div className="hidden md:block w-8 flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                </div>

                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
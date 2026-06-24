import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../../data/mockData';

interface FAQProps {
  faq: typeof faqs[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQProps) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center">
          <HelpCircle className="w-5 h-5 mr-3 text-blue-500" />
          <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-lg text-gray-600">
            关于我们的产品和服务，您可能想了解的问题
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useEffect, useState, useRef } from 'react';
import { stats } from '../../data/mockData';

function AnimatedNumber({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numericPart = value.replace(/[^0-9]/g, '');
          const suffix = value.replace(/[0-9]/g, '');
          const target = parseInt(numericPart);
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * eased);
            setDisplayValue(current + suffix);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <div ref={ref} className="text-4xl sm:text-5xl font-bold text-blue-600">{displayValue}</div>;
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            我们的成就
          </h2>
          <p className="text-blue-100 text-lg">
            多年深耕洗车设备行业，赢得客户信赖
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm"
            >
              <AnimatedNumber value={stat.value} />
              <p className="text-blue-100 text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../config/siteConfig';

export default function About() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="bg-gray-50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-4">
            {siteConfig.about.title}
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed">
              {siteConfig.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

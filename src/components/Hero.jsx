import { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % siteConfig.heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-white py-8 sm:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-3 animate-slide-up">
              {siteConfig.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-3 animate-slide-up" style={{animationDelay: '0.1s'}}>
              {siteConfig.hero.subtitle}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
              {siteConfig.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start animate-slide-up" style={{animationDelay: '0.3s'}}>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-navy text-white px-6 py-3 rounded-md hover:bg-blue-900 transition-all hover:scale-105"
              >
                {siteConfig.hero.cta1}
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="border border-navy text-navy px-6 py-3 rounded-md hover:bg-gray-50 transition-all hover:scale-105"
              >
                {siteConfig.hero.cta2}
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md lg:max-w-none relative">
            <div className="relative aspect-square rounded-md overflow-hidden">
              {siteConfig.heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {siteConfig.heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

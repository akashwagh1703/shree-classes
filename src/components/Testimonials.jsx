import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../config/siteConfig';

export default function Testimonials() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-1">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Rating: {siteConfig.rating} ⭐
        </p>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {siteConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-navy hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{transitionDelay: `${index * 150}ms`}}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-navy group-hover:border-blue-900 transition-colors"
                />
                <div>
                  <p className="font-bold text-navy group-hover:text-blue-900 transition-colors">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
              <div className="relative">
                <svg className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 italic leading-relaxed pl-6">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

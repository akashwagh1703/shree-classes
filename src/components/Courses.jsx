import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../config/siteConfig';

export default function Courses() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="courses" className="bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-6">
          Our Courses
        </h2>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.courses.map((course, index) => (
            <div
              key={course.id}
              className={`group bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-navy hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <div className="mb-3 bg-gray-50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-navy transition-colors duration-300">
                <svg className="w-8 h-8 text-navy group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-blue-900 transition-colors">{course.name}</h3>
              <p className="text-sm font-medium text-gray-500 mb-2">{course.subjects}</p>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

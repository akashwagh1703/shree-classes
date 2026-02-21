import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { siteConfig } from '../config/siteConfig';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will contact you soon!');
  };

  return (
    <section id="contact" className="bg-gray-50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy text-center mb-6">
          Contact Us
        </h2>
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-5 mb-4 hover:border-navy transition-colors duration-300">
              <h3 className="text-xl font-bold text-navy mb-3">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">{siteConfig.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-gray-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href={`tel:${siteConfig.phone}`} className="text-gray-700 hover:text-navy transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-navy transition-colors duration-300">
              <h3 className="text-xl font-bold text-navy mb-3">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy transition-colors text-sm"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy transition-colors text-sm"
                />
                <textarea
                  placeholder="Your Message"
                  rows="3"
                  required
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-navy transition-colors text-sm"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-navy text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="h-96 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8!2d73.78!3d19.99!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU5JzI0LjAiTiA3M8KwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              className="w-full h-full border-2 border-gray-200 rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

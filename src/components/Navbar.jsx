import { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Perfect Coaching Classes" className="w-10 h-10 rounded-md" />
            <div>
              <div className="text-navy font-bold text-lg sm:text-xl leading-tight">
                {siteConfig.name}
              </div>
              <div className="text-xs text-gray-600 hidden sm:block">
                Excellence in Education
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Courses', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="text-gray-700 hover:text-navy font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-navy transition-all group-hover:w-full"></span>
              </button>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-navy text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-all hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
            {['Home', 'About', 'Courses', 'Why Us', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                {item}
              </button>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              className="block w-full text-center bg-navy text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

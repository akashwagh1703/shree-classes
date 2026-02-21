import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          <div>
            <h3 className="text-lg font-bold mb-2">{siteConfig.name}</h3>
            <p className="text-gray-300 text-sm">{siteConfig.about.description}</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="space-y-1">
              {['Home', 'About', 'Courses', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-white text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Info</h3>
            <div className="space-y-1 text-sm text-gray-300">
              <p>{siteConfig.address}</p>
              <p>{siteConfig.phone}</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

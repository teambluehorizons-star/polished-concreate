import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/about', label: 'За нас' },
    { path: '/services', label: 'Услуги' },
    { path: '/gallery', label: 'Галерия' },
    { path: '/contact', label: 'Контакти' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
  src="/images/shlaifbetonexpertplovdivlogo.png"
  alt="Шлайфан Бетон Експерт Лого"
  className="w-12 h-12 object-contain scale-130" 
/>
            <div className="hidden md:block">
              <div className="text-xl font-bold text-gray-900">Шлайфан Бетон Експерт</div>
              <div className="text-xs text-gray-600">Професионални подови решения</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:0889058583"
              className="hidden md:flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">088 905 8583</span>
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${
                  isActive(item.path)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:0889058583"
              className="flex items-center justify-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors mt-4"
            >
              <Phone size={18} />
              <span className="font-medium">088 905 8583</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

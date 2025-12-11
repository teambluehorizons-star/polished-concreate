import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="text-gray-300" style={{ backgroundColor: '#494949' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg flex items-center justify-center">
                 <img
  src="/images/shlaifbetonexpertplovdivlogo.png"
  alt="Шлайфан Бетон Експерт Лого"
  className="w-12 h-12 object-contain scale-130" 
/>
              </div>
              <div className="text-white font-bold">Шлайфан Бетон Експерт</div>
            </div>
            <p className="text-sm text-gray-400">
              Професионални решения за индустриални и декоративни бетонови подове
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-orange-500 transition-colors">Начало</Link></li>
              <li><Link to="/about" className="text-sm hover:text-orange-500 transition-colors">За нас</Link></li>
              <li><Link to="/services" className="text-sm hover:text-orange-500 transition-colors">Услуги</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-orange-500 transition-colors">Галерия</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-orange-500 transition-colors">Контакти</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакти</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0889058583" className="flex items-center space-x-2 text-sm hover:text-orange-500 transition-colors">
                  <Phone size={16} />
                  <span>088 905 8583</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@shlaifanbeton.bg" className="flex items-center space-x-2 text-sm hover:text-orange-500 transition-colors">
                  <Mail size={16} />
                  <span>info@shlaifanbeton.bg</span>
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>София, България</span>
              </li>
            </ul>
          </div>

       <div>
  <h3 className="text-white font-semibold mb-4">Работно време</h3>
  <ul className="space-y-2 text-sm text-gray-300">
    <li className="flex gap-2">
      <span className="w-18">Пон – Пет:</span>
      <span>08:00 – 18:00</span>
    </li>
    <li className="flex gap-2">
      <span className="w-18">Събота:</span>
      <span>09:00 – 14:00</span>
    </li>
    <li className="flex gap-2">
      <span className="w-18">Неделя:</span>
      <span>Почивен ден</span>
    </li>
  </ul>
</div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Шлайфан Бетон Експерт. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}

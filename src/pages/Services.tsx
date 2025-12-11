import { Factory, Home, RotateCcw, Shield, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Factory,
      title: 'Индустриален шлайфан бетон',
      description: 'Професионални подови решения за складове, производствени халета и логистични центрове',
      features: [
        'Устойчивост на тежко натоварване',
        'Висока износоустойчивост',
        'Бързо изпълнение на големи площи',
        'Минимална поддръжка',
        'Антиплъзгащи свойства',
        'Устойчивост на химикали'
      ],
      image: 'images/industrialpolishedconcreate.webp'
    },
    {
      icon: Home,
      title: 'Декоративен шлайфан бетон',
      description: 'Модерни и стилни подове за дома - лофт апартаменти, къщи и интериорни пространства',
      features: [
        'Уникален визуален ефект',
        'Персонализиран дизайн',
        'Съвременен индустриален стил',
        'Подходящ за отопление на пода',
        'Хипоалергенен и екологичен',
        'Лесно почистване'
      ],
      image: 'images/decorativepolishedconcreate.webp'
    },
    {
      icon: RotateCcw,
      title: 'Реновация на стари настилки',
      description: 'Възстановяване и обновяване на износени бетонови подове',
      features: [
        'Премахване на повреди',
        'Изравняване на неравности',
        'Възстановяване на гланц',
        'Рентабилно решение',
        'Бърз процес',
        'Драстична визуална промяна'
      ],
      image: 'images/restoration.webp'
    },
    {
      icon: Shield,
      title: 'Импрегниране и запечатване',
      description: 'Защитни покрития за дълготрайност и устойчивост на бетоновите повърхности',
      features: [
        'Защита срещу влага',
        'Предотвратяване на прах',
        'Устойчивост на петна',
        'Удължаване живота на пода',
        'Запазване на естествен вид',
        'Лесна поддръжка'
      ],
      image: 'images/concreateprotection.webp'
    }
  ];

  return (
    <div className="min-h-screen">
      <section
  className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/ourservice.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center text-white">
    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Нашите услуги</h1>
    <p className="text-xl text-gray-200">
      Комплексни решения за всеки тип проект
    </p>
  </div>
</section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Специализирани услуги за бетон
            </h2>
            <p className="text-lg text-gray-700">
              Предлагаме пълна гама от услуги за обработка на бетонови подове - от шлайфане и полиране до защитни покрития. Всяка услуга е изпълнена с внимание към детайла и съобразена с индивидуалните нужди на клиента.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-orange-500" size={32} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Технически предимства:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="text-orange-500 mr-2 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 lg:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Процес на работа
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Консултация</h3>
                <p className="text-sm text-gray-600">Оглед на обекта и съвети</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Оферта</h3>
                <p className="text-sm text-gray-600">Детайлна ценова оферта</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Изпълнение</h3>
                <p className="text-sm text-gray-600">Професионална работа</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Гаранция</h3>
                <p className="text-sm text-gray-600">Дългосрочна поддръжка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 text-white" style={{ backgroundColor: '#8C8C8C' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Имате проект? Нека го обсъдим
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и детайлна оферта
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Поискай оферта
          </Link>
        </div>
      </section>
    </div>
  );
}

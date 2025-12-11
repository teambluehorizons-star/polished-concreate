import { Link } from 'react-router-dom';
import { Shield, Wrench, Sparkles, TrendingUp, Star, Award } from 'lucide-react';

export default function Home() {
  const advantages = [
    {
      icon: Shield,
      title: 'Дълготрайност',
      description: 'Издръжливи подове с гаранция за дълги години'
    },
    {
      icon: Sparkles,
      title: 'Лесна поддръжка',
      description: 'Минимална грижа за максимален резултат'
    },
    {
      icon: Wrench,
      title: 'Издръжливост',
      description: 'Устойчивост на натоварване и износване'
    },
    {
      icon: TrendingUp,
      title: 'Красив външен вид',
      description: 'Модерен и професионален дизайн'
    }
  ];

  const testimonials = [
    {
      name: 'Георги Иванов',
      company: 'Логистичен център София',
      text: 'Изключително професионална работа! Завършиха 800 кв.м. складово помещение за отрицателно време.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      company: 'За дома',
      text: 'Полираният бетон в дневната ни изглежда невероятно! Топло препоръчваме за всички лофт интериори.',
      rating: 5
    },
    {
      name: 'Иван Димитров',
      company: 'Производствена база',
      text: 'Работата беше изпълнена качествено и в срок. Подовете издържат на тежка техника без проблем.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[600px] lg:h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
  "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/herosection.webp')",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Индустриални и декоративни подове<br />от шлайфан бетон
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Професионални решения за всеки тип обект
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Поискай оферта
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Вашият партньор за<br />качествени бетонови подове
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Специализирани сме в шлайфането, полирането и обработката на бетонови настилки за индустриални и жилищни обекти. С богат опит и модерна техника, осигуряваме първокласни резултати за всеки проект.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Независимо дали търсите решение за складово помещение или желаете модерен дизайн за вашия дом, ние сме тук да превърнем вашата визия в реалност.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
  <img
    src="images/yourpartner.webp"
    alt="Полиран бетонов под"
    className="w-full h-full object-cover scale-125"
  />
</div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Защо да изберете нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="text-orange-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Какво казват нашите клиенти
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-orange-500 fill-orange-500" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 text-white" style={{ backgroundColor: '#8C8C8C' }}>
        <div className="container mx-auto px-4 text-center">
          <Award className="mx-auto mb-6 text-orange-500" size={64} />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Готови за вашия следващ проект?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и оферта
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
          >
            Свържете се с нас
          </Link>
        </div>
      </section>
    </div>
  );
}

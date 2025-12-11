import { Factory, Home, Users, Award, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section
  className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/shlaifbeton.webp')",
  }}
>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">За нас</h1>
          <p className="text-xl text-gray-200">Експерти в обработката на бетон</p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Нашата философия
            </h2>
            <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
              <p>
                В <strong>Шлайфан Бетон Експерт</strong> вярваме, че бетонът е повече от строителен материал – той е основата на всеки успешен проект. С фокус върху индустриалния минимализъм и функционалността, ние създаваме подове, които съчетават издръжливост, естетика и практичност.
              </p>
              <p>
                Нашият екип работи с прецизност и внимание към детайла, осигурявайки бърза и чиста работа, независимо от мащаба на проекта. Използваме най-съвременна техника и материали, за да гарантираме превъзходно качество при всяка услуга.
              </p>
              <p>
                Гордеем се с това, че можем да отговорим на нуждите на различни клиенти – от индустриални обекти с високи изисквания до частни домове с уникален дизайн.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#8C8C8C]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
      За кого работим
    </h2>
    <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
      <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
          <Factory className="text-orange-500" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Индустриални обекти</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Складове и логистични центрове</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Производствени халета и цехове</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Търговски площи и шоурумове</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Работа при тежко натоварване</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Бързи срокове за изпълнение</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Дългосрочна издръжливост</span></li>
        </ul>
      </div>

      <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
        <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
          <Home className="text-orange-500" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Жилищни обекти</h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Лофт апартаменти и студиа</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Къщи и вили</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Гаражи и подземни паркинги</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Интериорен дизайн с характер</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Лесна поддръжка в ежедневието</span></li>
          <li className="flex items-start"><span className="text-orange-500 mr-2">✓</span><span>Модерен и елегантен вид</span></li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Защо да ни се доверите
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-orange-500" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Опитен екип</h3>
              <p className="text-gray-700">
                Нашите специалисти имат дългогодишен опит в индустрията и постоянно усъвършенстват уменията си
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-500" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Сертификати</h3>
              <p className="text-gray-700">
                Работим по световни стандарти и притежаваме необходимите сертификати за качество
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-orange-500" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Прецизност</h3>
              <p className="text-gray-700">
                Внимание към всеки детайл и перфектно изпълнение на всеки проект
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24" style={{ backgroundColor: '#8C8C8C' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Екип в работа"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <Zap className="text-orange-500 mb-4" size={48} />
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Бърза и качествена работа
              </h2>
              <p className="text-lg text-white-300 leading-relaxed mb-6">
                Разбираме, че времето е важно за всеки проект. Затова организираме работата си така, че да постигнем отлични резултати в кратки срокове, без да правим компромис с качеството.
              </p>
              <p className="text-lg text-white-300 leading-relaxed">
                С нашата техника и опит можем да обработваме големи площи ефективно и да завършваме проекти в рамките на договорените срокове.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

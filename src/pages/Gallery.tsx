import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'Всички' },
    { id: 'industrial', label: 'Индустриални' },
    { id: 'decorative', label: 'Декоративни' },
    { id: 'exterior', label: 'Външни' }
  ];

  const images: GalleryImage[] = [
    {
      id: 1,
      url: '/images/warehouse.webp',
      category: 'industrial',
      title: 'Индустриален под в склад'
    },
    {
      id: 2,
      url: '/images/home.webp',
      category: 'decorative',
      title: 'Полиран бетон в жилище'
    },
    {
      id: 3,
      url: '/images/productionbase.webp',
      category: 'industrial',
      title: 'Производствена база'
    },
    {
      id: 4,
      url: '/images/cafe.webp',
      category: 'industrial',
      title: 'Кафене'
    },
    {
      id: 5,
      url: '/images/logisticcenter.webp',
      category: 'industrial',
      title: 'Логистичен център'
    },
    {
      id: 6,
      url: '/images/moderninterior.webp',
      category: 'decorative',
      title: 'Модерен интериор'
    },
    {
      id: 7,
        url: '/images/loftapartment.webp',
      category: 'decorative',
      title: 'Лофт апартамент'
    },
    {
      id: 8,
      url: 'images/playground.webp',
      category: 'exterior',
      title: 'Външна площадка'
    },
    {
      id: 9,
      url: '/images/hangar.webp',
      category: 'industrial',
      title: 'Хангар'
    },
    {
      id: 10,
      url: '/images/livingroom.webp',
      category: 'decorative',
      title: 'Полиран бетон - дневна'
    },
    {
      id: 11,
        url: '/images/turgovskiobekt.webp',
      category: 'industrial',
      title: 'Търговски обект'
    },
    {
  id: 12,
  url: '/images/parking.webp',
  category: 'exterior',
  title: 'Паркинг'
}
  ];

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/polishedconcreate.webp')",
}}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Галерия</h1>
          <p className="text-xl text-gray-200">Нашите реализирани проекти</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white font-medium p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Няма проекти в тази категория</p>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl max-h-[90vh] relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-xl font-medium">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Вашият проект може да бъде следващият
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Работим с всякакъв тип обекти - от малки жилищни помещения до големи индустриални площи. Нека обсъдим вашата визия.
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Свържете се с нас
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

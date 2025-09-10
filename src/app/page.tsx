import React from 'react';
import Head from 'next/head';

// بيانات تجريبية
const stories = [
  { id: 1, title: 'القصة الأولى', description: 'مغامرة مثيرة مع ميشا' },
  { id: 2, title: 'سر الألوان', description: 'رحلة استكشاف الألوان مع لاما' },
  { id: 3, title: 'يوم سعيد لساري', description: 'قصة ممتعة عن يوم لعب مع ساري' },
];

const characters = [
  { id: 1, name: 'ميشا', image: '/images/meesha.jpg' },
  { id: 2, name: 'لاما', image: '/images/lama.jpg' },
  { id: 3, name: 'ساري', image: '/images/sari.jpg' },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>صفحة سارة بك الفنية</title>
      </Head>

      <main className="min-h-screen p-8 md:p-16">
        {/* قسم ترويجي رئيسي */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-100 rounded-lg">
          <h1 className="text-5xl font-extrabold text-gray-800">
            أهلاً بكم في عالم سارة بك
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl">
            هنا تجدون القصص والشخصيات المليئة بالمغامرات والألوان
          </p>
        </section>

        {/* قسم أحدث القصص */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">أحدث القصص</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900">{story.title}</h3>
                <p className="mt-2 text-gray-600">{story.description}</p>
                <a href="#" className="mt-4 inline-block text-blue-500 font-medium hover:underline">اقرأ القصة</a>
              </div>
            ))}
          </div>
        </section>

        {/* قسم الشخصيات */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">تعرّف على شخصياتنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((char) => (
              <div key={char.id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
                {/* هنا ستكون صورة الشخصية */}
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-lg font-bold">
                  {char.name}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{char.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
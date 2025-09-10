import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Head>
        <title>صفحة سارة بك الفنية</title>
        <meta name="description" content="موقع فني وقصصي للأطفال" />
      </Head>

      {/* قسم البطل (Hero Section) */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden" 
      >
        {/* الطبقة الشفافة التي تجعل النص ظاهرًا */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/hero.jpg')" }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* تأثير الورقة المقطوعة في الأسفل */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-2 origin-top-left z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform skew-y-2 origin-top-right z-10"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12 relative z-20">
          {/* محتوى النص */}
          <div className="md:w-1/2 text-center md:text-start text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              أهلاً بكم <br className="hidden md:block" />
              في عالم سارة بك
            </h1>
            <p className="mt-4 text-lg max-w-lg mx-auto md:mx-0">
              هنا تجدون القصص والشخصيات المليئة بالمغامرات والألوان
            </p>
            <div className="mt-6">
              <Link href="/about" className="btn-primary" style={{ backgroundColor: 'var(--color-brand-pink)' }}>
                اقرأ المزيد
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* قسم "ماذا نقدم" */}
      <section className="mt-16 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--color-brand-pink)' }}>
            اكتشف برامجنا
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            نقدم مجموعة واسعة من الأنشطة التعليمية الممتعة
          </p>

          {/* البطاقات */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* بطاقة 1: رياض الأطفال */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-brand-cyan)' }}>
                رياض الأطفال
              </h3>
              <p className="text-gray-600">
                برنامجنا يركز على تنمية المهارات الأساسية للأطفال في بيئة آمنة ومرحة.
              </p>
            </div>

            {/* بطاقة 2: الحضانة */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-brand-cyan)' }}>
                الحضانة
              </h3>
              <p className="text-gray-600">
                رعاية متكاملة لأطفالكم الصغار مع أنشطة تعليمية وممتعة مناسبة لأعمارهم.
              </p>
            </div>

            {/* بطاقة 3: الجلوس مع الأطفال */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-brand-cyan)' }}>
                الجلوس مع الأطفال
              </h3>
              <p className="text-gray-600">
                خدمة الجلوس مع الأطفال في المنزل توفر الأمان والراحة لأبنائكم.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

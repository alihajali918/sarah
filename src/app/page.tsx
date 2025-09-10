import React from 'react';
import Image from 'next/image';
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
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* محتوى النص */}
          <div className="md:w-1/2 text-center md:text-start">
            <p className="text-lg text-blue-500 font-medium mb-2">تعلم اليوم من أجل غد أفضل</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              تعلم اليوم <br className="hidden md:block" />
              لأجل غدٍ أفضل
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
              مجموعة من القصص والمغامرات التي تهدف إلى تعليم الأطفال بطريقة ممتعة.
            </p>
            <div className="mt-6">
              <Link href="/about" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                اقرأ المزيد
              </Link>
            </div>
          </div>

          {/* صورة البطل */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <Image
              src="

http://googleusercontent.com/image_collection/image_retrieval/2817553941038072772_0
"
              alt="طفلة تتعلم"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* هنا سيتم إضافة باقي الأقسام */}
    </main>
  );
}
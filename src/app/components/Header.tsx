import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* شعار الموقع أو اسمه */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sarah.Bek.Art
        </Link>
        
        {/* روابط التنقل */}
        <nav className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
            الرئيسية
          </Link>
          <Link href="/stories" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
            القصص
          </Link>
          <Link href="/characters" className="text-gray-600 hover:text-blue-500 transition-colors duration-200">
            الشخصيات
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
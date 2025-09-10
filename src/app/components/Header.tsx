'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaHome, FaBookOpen, FaUserFriends, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-md bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          {/* هنا يتم عرض الشعار */}
          <Image
            src="/logo.png"
            alt="Sarah.Bek.Art"
            width={90}
            height={90}
            className="rounded-full"
          />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl" style={{ color: 'var(--color-brand-pink)' }}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="flex items-center gap-1 hover:underline" style={{ color: 'var(--color-brand-cyan)' }}>
            <FaHome /> الرئيسية
          </Link>
          <Link href="/stories" className="flex items-center gap-1 hover:underline" style={{ color: 'var(--color-brand-cyan)' }}>
            <FaBookOpen /> القصص
          </Link>
          <Link href="/characters" className="flex items-center gap-1 hover:underline" style={{ color: 'var(--color-brand-cyan)' }}>
            <FaUserFriends /> الشخصيات
          </Link>
          <Link href="/contact" className="flex items-center gap-1 px-4 py-2 rounded-full font-bold" style={{ backgroundColor: 'var(--color-brand-pink)', color: 'white' }}>
            <FaEnvelope /> تواصل معنا
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white mt-4 mx-4 p-4 rounded-lg shadow-lg">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" onClick={toggleMenu} className="flex items-center gap-2 text-xl font-medium" style={{ color: 'var(--color-brand-cyan)' }}>
              <FaHome /> الرئيسية
            </Link>
            <Link href="/stories" onClick={toggleMenu} className="flex items-center gap-2 text-xl font-medium" style={{ color: 'var(--color-brand-cyan)' }}>
              <FaBookOpen /> القصص
            </Link>
            <Link href="/characters" onClick={toggleMenu} className="flex items-center gap-2 text-xl font-medium" style={{ color: 'var(--color-brand-cyan)' }}>
              <FaUserFriends /> الشخصيات
            </Link>
            <Link href="/contact" onClick={toggleMenu} className="flex items-center gap-2 text-xl font-medium" style={{ color: 'var(--color-brand-cyan)' }}>
              <FaEnvelope /> تواصل معنا
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            من نحن
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            تواصل معنا
          </Link>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            سياسة الخصوصية
          </Link>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sarah.Bek.Art. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

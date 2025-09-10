import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 mt-auto py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sarah.Bek.Art. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
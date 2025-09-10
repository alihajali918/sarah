import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Playpen_Sans_Arabic } from 'next/font/google';

const playpen = Playpen_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={playpen.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

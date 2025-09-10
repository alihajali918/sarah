import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="pt-24">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

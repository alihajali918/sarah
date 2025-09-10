import './globals.css';
import Header from './components/Header'; // تأكد من المسار الصحيح

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl"> {/* هنا يمكنك تعديل اللغة والاتجاه */}
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vania Billiard | Meja Billiard & Aksesoris',
  description: 'Website Vania Billiard untuk katalog meja billiard, aksesoris, profil, jurnal, simulator, dan konsultasi kebutuhan billiard.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}

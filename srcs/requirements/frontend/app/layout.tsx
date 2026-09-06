import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://anima-terra.com'),
  title: {
    default: 'Anima Terra : Spéléologie dans les Hautes-Alpes',
    template: '%s | Anima Terra',
  },
  description:
    'Sorties de spéléologie et de canyoning dans les Hautes-Alpes, avec des parcours adaptés à chaque niveau.',
  keywords: ['spéléologie', 'Hautes-Alpes', 'Anima Terra', 'grotte', 'sortie découverte'],
  openGraph: {
    title: 'Anima Terra : Spéléologie dans les Hautes-Alpes',
    description:
      'Une aventure inoubliable sous les montagnes des Hautes-Alpes.',
    url: 'https://anima-terra.com',
    siteName: 'Anima Terra',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full bg-[#f3efe7] text-[#2d241c] antialiased">{children}</body>
    </html>
  );
}

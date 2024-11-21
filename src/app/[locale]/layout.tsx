import type { Metadata } from 'next';
import '../../styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { Montserrat, Wix_Madefor_Display } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { getMessages } from 'next-intl/server';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font_mons',
  adjustFontFallback: false,
});

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font_wix',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'Mustage Course',
  description: 'Mustage Course',
  icons: {
    icon: [
      { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/assets/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/favicon.ico', type: 'image/x-icon' },
      { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/assets/site.webmanifest',
  openGraph: {
    title: 'Mustage Course',
    description: 'Mustage Course',
    type: 'website',
    images: [
      {
        url: '/assets/web-app-manifest-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Mustage Course',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${montserrat.variable} ${wixMadeforDisplay.variable}`}
        >
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

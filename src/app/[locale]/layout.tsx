import type { Metadata } from 'next';
import '../../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { NextIntlClientProvider } from 'next-intl';
import { Montserrat, Wix_Madefor_Display } from 'next/font/google';
import Header from '@/components/Header/Header';
import { getMessages } from 'next-intl/server';
import { ToastContainer } from 'react-toastify';
import { Suspense } from 'react';
import { FacebookPixel } from '@/components/FacebookPixel/FacebookPixel';
import QueryInitializer from '@/components/QueryInitializer/QueryInitializer';

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

export const localeMetadata: Record<
  string,
  { title: string; description: string; keywords: string }
> = {
  uk: {
    title: 'Mustage Education – навчись заливати рекламу ефективно',
    description:
      'Безкоштовний курс з арбітражу трафіку, де ти навчишся працювати з рекламою у будь-якій ніші. Освоюй антидетект браузери, мобільні проксі, автоматизацію та інші інструменти для успішного заливу.',
    keywords:
      'курс з арбітражу, арбітраж трафіку, навчання арбітражу, залив реклами, Facebook Ads, гемблінг, digital-маркетинг, антидетект браузер, мобільні проксі, автоматизація арбітражу',
  },
  ru: {
    title: 'Курс по арбитражу трафика – научись эффективно лить рекламу',
    description:
      'Бесплатный курс по арбитражу трафика, где ты научишься работать с рекламой в любой нише. Осваивай антидетект браузеры, мобильные прокси, автоматизацию и другие инструменты для успешного залива.',
    keywords:
      'курс по арбитражу, арбитраж трафика, обучение арбитражу, залив рекламы, Facebook Ads, гемблинг, digital-маркетинг, антидетект браузер, мобильные прокси, автоматизация арбитража',
  },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { locale } = await params;
  const metadataValues = localeMetadata[locale] || localeMetadata.uk;

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'https://education.mustage.team'
    ),
    title: metadataValues.title,
    description: metadataValues.description,
    keywords: metadataValues.keywords,
    robots: {
      index: true,
      follow: true,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadataValues.title,
      description: metadataValues.description,
      images: [
        {
          url: '/assets/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metadataValues.title,
        },
      ],
    },
    openGraph: {
      title: metadataValues.title,
      description: metadataValues.description,
      type: 'website',
      images: [
        {
          url: '/assets/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: metadataValues.title,
        },
      ],
    },
    icons: {
      icon: [
        { url: '/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/assets/favicon.svg', type: 'image/svg+xml' },
        { url: '/assets/favicon.ico', type: 'image/x-icon' },
        { url: '/assets/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
    manifest: '/assets/site.webmanifest',
  };
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
          <QueryInitializer>
            <Header locale={locale} />
            {children}
            <ToastContainer />
            <Suspense fallback={null}>
              <FacebookPixel locale={locale} />
            </Suspense>
          </QueryInitializer>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

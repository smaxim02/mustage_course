import '../../styles/globals.css';
import { Montserrat, Wix_Madefor_Display } from 'next/font/google';

export const metadata = {
  title: 'Mustage Course | Дякуємо за оплату',
  description: 'Mustage Course | Дякуємо за оплату',
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={`${montserrat.variable} ${wixMadeforDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}

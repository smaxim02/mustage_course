export const metadata = {
  title: 'Mustage Course | Информация об оплате',
  description: 'Mustage Course | Информация об оплате',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: 'Mustage Course | Terms of use',
  description: 'Mustage Course | Terms of use',
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

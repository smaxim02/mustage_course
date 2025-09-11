export const metadata = {
  title: 'Mustage Course | Інформація про оплату',
  description: 'Mustage Course | Інформація про оплату',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}

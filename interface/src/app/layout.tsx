
import "./globals.css";
import { Header } from '../components/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import createTitle from '@/lib/createTitle';
import ConsoleMesage from './ConsoleMesage';

const title = createTitle();
const description = 'デベロップメントをハックする';

export const metadata: Metadata = {
  metadataBase: new URL('https://develhack.com'),
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: '/devel-vertical.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="font-sans scheme-light-dark" lang="ja">
      <body className="min-h-dvh">
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
      <ConsoleMesage />
    </html>
  );
}

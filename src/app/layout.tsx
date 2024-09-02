'use client';
import { Inter } from 'next/font/google';
import { MyStateProvider } from './stateProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <title>Desafio Magalu</title>
        <meta name='description' content='Desafio Magalu Frontend' />
        <meta property='og:image' content='/assets/ic_heroi.svg' />
      </head>
      <body className={inter.className}>
        <MyStateProvider>{children}</MyStateProvider>
      </body>
    </html>
  );
}

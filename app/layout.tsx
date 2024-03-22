import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import { classNames } from './helpers';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={classNames('h-full', inter.className)}>
      <body className="h-full flex flex-col bg-gray-100 text-gray-500">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import './globals.css';
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import { Suspense } from 'react';
import localFont from 'next/font/local';
import { classNames } from './helpers';

const myFont = localFont({ src: './public/static/fonts/soehne-buch.woff2' });
const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={classNames('h-full', inter.className)}>
      <body className="h-full flex flex-col bg-black text-white">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';

import { Providers } from '@/redux/provider';

const ubuntu = Ubuntu({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ubuntu 22.04',
  description: 'Ubuntu 22.04',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

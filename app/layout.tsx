import './globals.css'
import type { Metadata } from 'next'

import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bizesoft',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="__next">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

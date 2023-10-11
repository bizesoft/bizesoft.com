import './globals.css'
import type { Metadata } from 'next'

import Footer from '@/components/Footer';
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800"], subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Bizesoft',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

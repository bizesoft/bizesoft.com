import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bizesoft',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="__next">
        <main>{children}</main>
      </body>
    </html>
  );
}

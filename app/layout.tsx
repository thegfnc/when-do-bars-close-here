import './styles/globals.css'

import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import PageWrapper from './components/PageWrapper'
import Header from './components/Header'
import Footer from './components/Footer'

type RootLayoutProps = {
  children: React.ReactNode
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
})

export async function generateMetadata(): Promise<Metadata> {
  const pathname = '/'

  return {
    title: 'Navigate gambling laws confidently | Is gambling legal here?',
    description:
      'Learn about gambling laws in locations worldwide. Stay up-to-date on the latest regulations and find resources for safe and legal gambling.',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Gambling laws',
      'Legal gambling',
      'Online betting regulations',
      'Casino legality',
      'Sports betting laws',
      'Gambling legislation',
      'State gambling rules',
      'Poker legality',
      'Lottery regulations',
      'Gambling age restrictions',
      'Offshore gambling laws',
      'Gambling jurisdiction',
      'Gambling licensing',
      'Legal gambling sites',
      'Gambling compliance',
    ],
    creator: 'The Good for Nothings Club',
    metadataBase: new URL('https://www.isgamblinglegalhere.com'),
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      url: pathname,
      type: 'website',
      locale: 'en_US',
    },
  }
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <PageWrapper>
          <Header />
          {children}
          <Footer />
        </PageWrapper>
        <Analytics />
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-BV4G45K1PL' />
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BV4G45K1PL');
          `}
        </Script>
      </body>
    </html>
  )
}

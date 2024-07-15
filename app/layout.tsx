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
    title: 'Navigate alcohol laws confidently | When do bars close here?',
    description:
      'Learn about alcohol laws in locations worldwide. Stay up-to-date on the latest regulations and find resources for safe and legal drinking.',
    referrer: 'origin-when-cross-origin',
    keywords: [
      'Bar closing times',
      'Local bar hours',
      'Nightlife curfew',
      'Last call times',
      'Alcohol service hours',
      'Late-night bars',
      'Drinking establishment hours',
      'Pub closing times',
      'City bar regulations',
      'Nightclub hours',
      'Liquor laws',
      'After-hours bars',
      'Weekend bar hours',
      'Drinking curfew',
    ],
    creator: 'The Good for Nothings Club',
    metadataBase: new URL('https://www.whendobarsclosehere.com'),
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
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-HNRV9PDXRN' />
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HNRV9PDXRN');
          `}
        </Script>
      </body>
    </html>
  )
}

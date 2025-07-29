import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import { Providers } from './providers'
import FloatingContactBanner from '@/components/FloatingContactBanner'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({ 
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Mood Cafe - 자연 친화적 프리미엄 카페 프랜차이즈',
    template: '%s | Mood Cafe'
  },
  description: '신선하고 자연 친화적인 프리미엄 카페 프랜차이즈. 깨끗하고 모던한 공간에서 최고 품질의 커피를 경험하세요.',
  keywords: ['카페', '프랜차이즈', '창업', '커피', '자연친화적', '프리미엄'],
  authors: [{ name: 'Mood Cafe Team' }],
  creator: 'Mood Cafe',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://moodcafe.kr',
    title: 'Mood Cafe - 자연 친화적 프리미엄 카페 프랜차이즈',
    description: '신선하고 자연 친화적인 프리미엄 카페 프랜차이즈',
    siteName: 'Mood Cafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mood Cafe - 자연 친화적 프리미엄 카페 프랜차이즈',
    description: '신선하고 자연 친화적인 프리미엄 카페 프랜차이즈',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable}`}>
      <body className="min-h-screen bg-white text-green-deep antialiased">
        <Providers>
          {children}
          <FloatingContactBanner />
        </Providers>
      </body>
    </html>
  )
} 
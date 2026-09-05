import type { Metadata, Viewport } from 'next'
import { Noto_Sans_Arabic, Noto_Naskh_Arabic } from 'next/font/google'
import './globals.css'

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: '--font-heading-arabic',
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'لمة خير | ضيافة ومناسبات ومطبخ في دمشق',
  description:
    'لمة خير في كفرسوسة بدمشق: صالة مناسبات، مطبخ شرقي، مندي يمني، مخبوزات وحلويات، متنزه وجلسات.',
  keywords: ['لمة خير', 'مناسبات', 'ضيافة', 'مطعم', 'قاعة أفراح', 'Lammat Khair'],
  icons: {
    icon: [{ url: '/images/favicon-lamma-khair.png', type: 'image/png' }],
    shortcut: '/images/favicon-lamma-khair.png',
    apple: '/images/favicon-lamma-khair.png',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f4ef',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoSansArabic.variable} ${notoNaskhArabic.variable}`}>
      <body>{children}</body>
    </html>
  )
}

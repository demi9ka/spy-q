import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Header } from '@/shared/ui/header'
import { Footer } from '@/shared/ui/footer'
import { Provider } from './provider'
import './globals.css'
import YandexMetrika from '@/components/ui/yandex-metrika'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap'
})
const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap'
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <head>
        <YandexMetrika ymid={105475790} />
      </head>
      <body className={` ${inter.className} ${montserrat.className} bg-[var(--bg))] flex flex-col min-h-[100svh]`}>
        <Provider>
          <Header />
          <main className='flex-grow flex-shrink-0 basis-auto '>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

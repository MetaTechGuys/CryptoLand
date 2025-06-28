import { cn } from '@/utils/tailwind'
import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
// import PWACore from '@/utils/service-worker'

const sans = Inter({
  variable: '--google-sans',
  weight: ['400', '700'],
  subsets: ['latin'],
  fallback: ['Arial', 'Thoma', 'sans-serif'],
})

const serif = Orbitron({
  variable: '--google-serif',
  weight: '900',
  subsets: ['latin'],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

export const metadata: Metadata = {
  title: 'Cryptoland',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>
      <body
        data-nextjs-scroll-focus-boundary
        className={cn(
          sans.variable,
          serif.variable,
          'min-h-screen w-screen overflow-x-hidden antialiased'
        )}
      >
        {children}
        {/* <PWACore /> */}
      </body>
    </html>
  )
}

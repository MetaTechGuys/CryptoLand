import { cn } from '@/utils/tailwind'
import type { Metadata } from 'next'
import { Saira, Orbitron } from 'next/font/google'
import './globals.css'
import './animations.css'
import { ResponsiveHelper } from '@/components/ResponsiveHelper'

const sans = Saira({
  variable: '--google-sans',
  subsets: ['latin'],
  weight: 'variable',
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
          'min-h-screen w-screen overflow-x-hidden antialiased',
          { 'env-prod': process.env.NODE_ENV === 'production' }
        )}
      >
        {children}
        {/* <PWACore /> */}
        <ResponsiveHelper />
      </body>
    </html>
  )
}

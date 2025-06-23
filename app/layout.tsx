import type { Metadata } from 'next'
// import { DM_Serif_Display, Montserrat } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/tailwind'
import { AnimatePresence } from 'motion/react'

// const sans = Montserrat({
//   variable: '--google-font-sans',
//   subsets: ['latin'],
// })

// const serif = DM_Serif_Display({
//   variable: '--google-font-serif',
//   weight: '400',
//   subsets: ['latin'],
// })

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
          // sans.variable,
          // serif.variable,
          'min-h-screen w-screen overflow-x-hidden antialiased'
        )}
      >
        <AnimatePresence>{children}</AnimatePresence>
      </body>
    </html>
  )
}

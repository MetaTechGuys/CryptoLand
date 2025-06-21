'use client'
import { AnimatePresence } from 'motion/react'
import SlidesControls from './Controls'
import LastSlide from './LastSlide'
import { PropsWithChildren } from 'react'

export default function Home({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className="contents">
      <SlidesControls />
      <AnimatePresence mode="sync">{children}</AnimatePresence>
      <LastSlide />
    </main>
  )
}

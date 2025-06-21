'use client'
import IntroSlide from './IntroSlide'
import ScrollUp from '@/components/ScrollUp'

export default function Home() {
  return (
    <main className="contents">
      <ScrollUp />
      <IntroSlide />
    </main>
  )
}

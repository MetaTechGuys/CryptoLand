'use client'
import { useCacheProgress } from '@/utils/service-worker'
import IntroSlide from './IntroSlide'
import ScrollUp from '@/components/ScrollUp'

export default function Home() {
  const { progress } = useCacheProgress()
  console.log(progress)

  return (
    <main className="contents">
      <ScrollUp />
      <IntroSlide />
    </main>
  )
}

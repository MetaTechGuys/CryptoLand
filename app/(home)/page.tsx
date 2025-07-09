'use client'
import { useCacheProgress } from '@/utils/service-worker'
import IntroSlide from './IntroSlide'

export default function Home() {
  const { progress } = useCacheProgress()
  console.log(progress)

  return (
    <main className="contents">
      <IntroSlide />
    </main>
  )
}

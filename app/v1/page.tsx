'use client'
import { useCacheProgress } from '@/utils/service-worker'
import IntroSlide from '../(home)/IntroSlide'
import { PageTransition } from '@/components/PageTransition'
import LastSlide from '../(home)/LastSlide'

export default function Home() {
  const { progress } = useCacheProgress()
  console.log(progress)

  return (
    <PageTransition>
      <IntroSlide />
      <LastSlide />
    </PageTransition>
  )
}

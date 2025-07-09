'use client'
import { useHash } from '@/utils/route'
import { ProgressProvider } from '@bprogress/next/app'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import SlidesControls from './Controls'
import LastSlide from './LastSlide'

export default function Home({ children }: Readonly<PropsWithChildren>) {
  const [show, setShow] = useState(false)
  const hash = useHash()
  const pathn = usePathname()
  const haveHash = hash.length > 1
  const havePath = pathn.length > 1
  const skipAnimates = haveHash || havePath

  useEffect(() => {
    setTimeout(
      () => {
        setShow(true)
      },
      skipAnimates ? 0 : 4000
    )
  }, [skipAnimates])
  return (
    <main className="contents">
      <SlidesControls skipAnimates={skipAnimates} />
      <ProgressProvider
        startOnLoad
        color="var(--color-razzmatazz)"
        height="4px"
        spinnerPosition="top-left"
      >
        {show ? children : <div className="h-screen" />}
      </ProgressProvider>
      <LastSlide />
    </main>
  )
}

'use client'
import Cursor from '@/components/bits/Cursor'
import { useHash } from '@/utils/route'
import { AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'
import SlidesControls from '../(home)/Controls'

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
    <main className="111 contents">
      <SlidesControls skipAnimates={skipAnimates} />
      <AnimatePresence mode="sync">
        {show ? children : <div className="h-screen" />}
      </AnimatePresence>
      <Cursor />
    </main>
  )
}

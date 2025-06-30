'use client'
import { useHash } from '@/utils/route'
import { AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'
import { lazy, PropsWithChildren, useEffect, useState } from 'react'
import SlidesControls from './Controls'
import LastSlide from './LastSlide'

const ContentSlideVert = lazy(() => import('../../components/ContentSlideVert'))

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
      <AnimatePresence mode="sync">
        {show ? children : <div className="h-screen" />}
      </AnimatePresence>
      <LastSlide />
      {hash === '#cryptoland' ? (
        <ContentSlideVert
          key="cryptoland"
          title="cryptoland"
          className="fixed inset-0"
          img="/Oystra-Residences-1.jpg"
        />
      ) : null}
      {hash === '#health' ? (
        <ContentSlideVert
          key="health"
          title="health"
          className="fixed inset-0"
          img="/dkjnb.jpg"
        />
      ) : null}
      {hash === '#business' ? (
        <ContentSlideVert
          key="business"
          title="business"
          className="fixed inset-0"
          img="/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp"
        />
      ) : null}
    </main>
  )
}

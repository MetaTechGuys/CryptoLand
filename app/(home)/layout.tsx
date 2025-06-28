'use client'
import { AnimatePresence } from 'motion/react'
import SlidesControls from './Controls'
import LastSlide from './LastSlide'
import { lazy, PropsWithChildren } from 'react'
import { useHash } from '@/utils/route'

const ContentSlideVert = lazy(() => import('../../components/ContentSlideVert'))

export default function Home({ children }: Readonly<PropsWithChildren>) {
  const hash = useHash()
  return (
    <main className="contents">
      <SlidesControls />
      <AnimatePresence mode="sync">{children}</AnimatePresence>
      <LastSlide />
      {hash === '#club' ? (
        <ContentSlideVert
          key="club"
          title="Club"
          className="fixed inset-0"
          img="/Oystra-Residences-1.jpg"
        />
      ) : null}
      {hash === '#hotel' ? (
        <ContentSlideVert
          key="hotel"
          title="hotel"
          className="fixed inset-0"
          img="/dkjnb.jpg"
        />
      ) : null}
      {hash === '#features' ? (
        <ContentSlideVert
          key="features"
          title="Features"
          className="fixed inset-0"
          img="/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp"
        />
      ) : null}
    </main>
  )
}

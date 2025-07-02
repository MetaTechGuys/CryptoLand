'use client'
import { useHash } from '@/utils/route'
import { AnimatePresence, useReducedMotion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { Fragment, lazy, PropsWithChildren, useEffect, useState } from 'react'
import SlidesControls from './Controls'
import LastSlide from './LastSlide'
import blogsData from '@/data/blogs'
import Cursor from '@/components/bits/Cursor'

const BlogSlide = lazy(() => import('../../components/BlogSlide'))

export default function Home({ children }: Readonly<PropsWithChildren>) {
  const [show, setShow] = useState(false)
  const reduced = useReducedMotion()
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
      <LastSlide />
      {blogsData.map((bd) => (
        <Fragment key={bd.key}>
          {hash === '#' + bd.key ? (
            <BlogSlide key={bd.key} blog={bd} className="fixed inset-0" />
          ) : null}
        </Fragment>
      ))}
      {!reduced && process.env.NODE_ENV === 'production' ? <Cursor /> : null}
    </main>
  )
}

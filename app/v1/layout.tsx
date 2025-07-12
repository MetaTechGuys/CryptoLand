'use client'
import { PropsWithChildren } from 'react'
import SlidesControls from '../../components/layout/Controls'
import { useHash } from '@/utils/route'
import { usePathname } from 'next/navigation'
import LastSlide from '../../components/layout/LastSlide'

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  const hash = useHash()
  const pathn = usePathname().replace('/v1', '/')
  const haveHash = hash.length > 1
  const havePath = pathn.length > 1
  const skipAnimates = !haveHash && !havePath

  return (
    <>
      <SlidesControls skipAnimates={skipAnimates} />
      {children}
      <LastSlide />
    </>
  )
}

'use client'
import { PropsWithChildren } from 'react'
import SlidesControls from '../(home)/Controls'
import { useHash } from '@/utils/route'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  const hash = useHash()
  const pathn = usePathname()
  const haveHash = hash.length > 1
  const havePath = pathn.length > 1
  const skipAnimates = !haveHash && !havePath

  return (
    <>
      <SlidesControls skipAnimates={skipAnimates} />
      {children}
    </>
  )
}

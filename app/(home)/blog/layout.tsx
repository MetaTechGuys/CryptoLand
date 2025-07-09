import { BackEdge } from '@/components/BackEdge'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

export default function BlogLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      {children}
      <Link href="/" className="contents">
        <BackEdge name="home" />
      </Link>
    </>
  )
}

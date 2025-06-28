'use client'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'
export default function Mo1Page() {
  return (
    <ViewTransition name="page" default="slide">
      <div className="w-min p-4 text-nowrap">
        <Link href="/mo2">Switch to 2</Link>
        <h1 className="mt-5 text-9xl">Page 1</h1>
      </div>
    </ViewTransition>
  )
}

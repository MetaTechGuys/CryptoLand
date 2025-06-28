'use client'

import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'
export default function Mo2Page() {
  return (
    <ViewTransition name="page" default="slide">
      <div className="w-min p-4 text-nowrap">
        <Link href="/mo1">Switch to 1</Link>
        <h1 className="mt-5 text-9xl">Page 2</h1>
      </div>
    </ViewTransition>
  )
}

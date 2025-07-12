'use client'

import { PageTransition } from '@/components/PageTransition'
export default function Mo2Page() {
  return (
    <PageTransition top="/mo3">
      <div className="h-screen w-screen bg-[url(/design-of-oystra_4.webp)] bg-cover p-4 text-nowrap">
        <h1 className="mt-5 text-9xl">Page 4</h1>
      </div>
    </PageTransition>
  )
}

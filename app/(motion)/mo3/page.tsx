'use client'

import { PageTransition } from '@/components/PageTransition'
export default function Mo2Page() {
  return (
    <PageTransition top="/mo2" bottom="/mo4">
      <div className="h-screen w-screen bg-[url(/design-of-oystra_3.webp)] bg-cover p-4 text-nowrap">
        <h1 className="mt-5 text-9xl">Page 3</h1>
      </div>
    </PageTransition>
  )
}

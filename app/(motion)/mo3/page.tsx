'use client'

import { PageTransition } from '@/components/PageTransition'
export default function Mo2Page() {
  return (
    <PageTransition top="/mo2" bottom="/mo4">
      <div className="h-screen w-screen bg-[url(/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_3.jpg)] bg-cover p-4 text-nowrap">
        <h1 className="mt-5 text-9xl">Page 3</h1>
      </div>
    </PageTransition>
  )
}

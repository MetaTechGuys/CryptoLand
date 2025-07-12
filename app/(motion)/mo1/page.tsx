'use client'
import { PageTransition } from '@/components/PageTransition'
import { useReportWebVitals } from 'next/web-vitals'

export default function Mo1Page() {
  useReportWebVitals(console.log)
  return (
    <PageTransition bottom="/mo2">
      <div className="h-screen w-screen bg-[url(/design-of-oystra_2.webp)] bg-cover p-4 text-nowrap">
        <h1 className="mt-5 text-9xl">Page 1</h1>
      </div>
    </PageTransition>
  )
}

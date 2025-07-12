'use client'
import SlidesControls from '@/components/layout/Controls'
import { ProgressProvider } from '@bprogress/next/app'
import { PropsWithChildren } from 'react'

export default function BlogLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className="contents">
      <SlidesControls skipAnimates />
      <ProgressProvider
        startOnLoad
        color="var(--color-razzmatazz)"
        height="4px"
        spinnerPosition="top-left"
      >
        {children}
      </ProgressProvider>
    </main>
  )
}

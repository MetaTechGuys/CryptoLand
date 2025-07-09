'use client'
import { SlideHero } from '@/components/BaseSlide'
import { FeatureCard } from '@/components/FeatureCard'
import ScrollUp from '@/components/ScrollUp'
import featuresData from '@/data/feature'

import Link from 'next/link'
import { useState } from 'react'

export default function FeaturesPage() {
  return (
    <main className="contents">
      <ScrollUp />
      <FeaturesList />
    </main>
  )
}

function FeaturesList() {
  const [focus, setFocus] = useState('')
  return (
    <SlideHero darken key="features" img="/backgrounds/background-5.png">
      <div className="grid size-full gap-2 overflow-auto p-2 pt-35! perspective-midrange max-lg:auto-rows-max md:grid-cols-2 md:gap-4 md:p-8 lg:grid-cols-3 xl:grid-cols-4">
        {featuresData.map((fd) => (
          <Link
            key={fd.id}
            className="contents"
            href={`/features/${fd.id}`}
            onClick={() => {
              setFocus(fd.id)
            }}
            prefetch
          >
            <FeatureCard
              feature={fd}
              className={
                focus && focus !== fd.id
                  ? 'opacity-5 transition-opacity duration-300'
                  : ''
              }
            />
          </Link>
        ))}
      </div>
    </SlideHero>
  )
}

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
    <SlideHero
      darken
      key="features"
      img="/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_3.jpg"
    >
      <div className="grid size-full gap-2 overflow-auto p-2 pt-35! perspective-midrange md:grid-cols-2 md:gap-4 md:p-8 lg:grid-cols-3 xl:grid-cols-4">
        {featuresData.map((fd) => (
          <Link
            key={fd.key}
            className="contents"
            href={`/features/${fd.key}`}
            onClick={() => {
              setFocus(fd.key)
            }}
            prefetch
          >
            <FeatureCard
              feature={fd}
              className={
                focus && focus !== fd.key
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

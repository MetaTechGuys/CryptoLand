'use client'
import { FeatureCard } from '@/components/FeatureCard'
import ScrollUp from '@/components/ScrollUp'
import featuresData from '@/data/feature'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
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
    <div className="grid size-full gap-4 p-8 pt-35 perspective-midrange md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {featuresData.map((fd) => (
        <Link
          key={fd.id}
          className="contents"
          href={`/feats/${fd.id}`}
          onClick={() => {
            setFocus(fd.id)
          }}
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
  )
}

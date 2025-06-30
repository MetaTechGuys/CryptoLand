'use client'
import { FloatingFeatureImage } from '@/components/FeatureCard'
import { IFeature } from '@/data/feature'
import { motion } from 'motion/react'
import Link from 'next/link'
import { unstable_ViewTransition as ViewTransition } from 'react'

interface FeatureClientProps {
  feature: IFeature
}

export default function FeatureClient({ feature }: FeatureClientProps) {
  return (
    <div className="p-8 pt-35">
      <Link href="/feats">Back</Link>
      <ViewTransition name={`feature-${feature.key}-root`} default="delay-3">
        <div className="glass flex w-fit flex-col items-center justify-center gap-8 overflow-clip rounded-2xl bg-stone-50/60 p-8">
          <FloatingFeatureImage
            src={feature.image}
            fkey={feature.key}
            className="-z-10"
          />
          <div className="relative">
            {/* <FloatingRPTag /> */}
            <div className="prose prose-sm prose-slate">
              <motion.h1
                className="inline-block text-center font-serif text-3xl"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                {feature.title}
              </motion.h1>

              {feature.description.map((d, p) => (
                <motion.p
                  key={p}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (p + 1) * 0.1 + 1 }}
                >
                  {d}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </ViewTransition>
    </div>
  )
}

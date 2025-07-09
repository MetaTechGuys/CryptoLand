'use client'
import { SlideHero } from '@/components/BaseSlide'
import ScrollUp from '@/components/ScrollUp'
import { IFeature } from '@/data/feature'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { motion } from 'motion/react'
import { FloatingFeatureImage } from '@/components/FeatureCard'
import RichCanvas from '@/components/fibers/RichCanvas'
import GlbObject from '@/components/fibers/GlbObject'

interface FeatureClientProps {
  feature: IFeature
}

export default function FeatureClient({ feature }: FeatureClientProps) {
  return (
    <main className="contents">
      <ScrollUp />
      <SlideHero darken key="features" img="/backgrounds/background-5.png">
        <ViewTransition name={`feature-${feature.id}-root`}>
          <div className="h-full overflow-y-auto md:p-8 md:pt-35!">
            <ViewTransition
              name={`feature-${feature.id}-root`}
              default="delay-3"
            >
              <div className="glass flex flex-col items-center gap-8 overflow-clip bg-slate-50/60 p-8 pr-12 max-md:min-h-full max-md:pt-40 md:w-fit md:justify-center md:rounded-2xl md:pr-8">
                <ViewTransition
                  name={`feature-${feature.id}-image`}
                  default="duration-9 delay-3"
                >
                  {feature.image ? (
                    <FloatingFeatureImage
                      src={feature.image}
                      className="-z-10"
                    />
                  ) : feature.model ? (
                    <div className="-z-10">
                      <RichCanvas>
                        <GlbObject {...feature.model} autoRotate />
                      </RichCanvas>
                    </div>
                  ) : null}
                </ViewTransition>
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
                    <motion.div
                      className="lead inline-block text-center font-serif"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                    >
                      {feature.lead}
                    </motion.div>

                    {feature.description.map((d, p) => (
                      <motion.p
                        key={p}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (p + 1) * 0.1 + 1 }}
                        className="text-justify"
                      >
                        {d}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>
            </ViewTransition>
          </div>
        </ViewTransition>
      </SlideHero>
    </main>
  )
}

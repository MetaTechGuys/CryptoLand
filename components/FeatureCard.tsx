import { IFeature } from '@/data/feature'
import { cn } from '@/utils/tailwind'
import {
  motion,
  motionValue,
  MotionValue,
  useSpring,
  useTime,
  useTransform,
} from 'motion/react'
import Image, { StaticImageData } from 'next/image'
import { useState, unstable_ViewTransition as ViewTransition } from 'react'
import GlareHover from './bits/GlareHover'
import RichCanvas from './fibers/RichCanvas'
import GlbObject from './fibers/GlbObject'

interface FeatureCardProps {
  className?: string
  feature: IFeature
  clickible?: true
}

export function FeatureCard({ className, feature }: FeatureCardProps) {
  const f = motionValue(1)
  return (
    <ViewTransition name={`feature-${feature.key}-root`} default="delay-3">
      <GlareHover
        playOnce
        className={cn(
          'glass group @container overflow-clip rounded-2xl bg-slate-50/60 hover:bg-slate-50/80',
          'perspective-midrange',
          'cursor-pointer transition-all duration-100',
          className,
          feature.className
        )}
      >
        <ViewTransition
          name={`feature-${feature.key}-image`}
          default="duration-9 delay-3"
        >
          {feature.image ? (
            <FloatingFeatureImage
              src={feature.image}
              factor={f}
              className="absolute right-16 bottom-8 -z-10 opacity-15"
            />
          ) : feature.model ? (
            <div className="absolute right-16 bottom-8 -z-10 size-60 scale-75 opacity-0 transition duration-500 ease-in-out group-hover:scale-100 group-hover:opacity-80">
              <RichCanvas>
                <GlbObject {...feature.model} />
              </RichCanvas>
            </div>
          ) : null}
        </ViewTransition>
        <div className="relative z-10 grid size-full auto-rows-min gap-4 p-8 @lg:grid-cols-2">
          {/* <FloatingRPTag /> */}
          <div className="prose prose-sm prose-slate max-w-full">
            <h1 className="inline-block font-serif text-3xl">
              {feature.title}
            </h1>
            <p>
              {feature.description[0]} <a>Readmore</a>
            </p>
          </div>
        </div>
      </GlareHover>
    </ViewTransition>
  )
}

interface FloatingFeatureImageProps {
  className?: string
  src: StaticImageData
  factor?: MotionValue<number>
}

export function FloatingFeatureImage({
  src,
  className,
  factor,
}: FloatingFeatureImageProps) {
  const [rand1] = useState(Math.random() * 999)
  const [rand2] = useState(Math.random() * 999)
  const [rand3] = useState(Math.random() * 999)
  const [dir] = useState(Math.sign(Math.random() - 0.5))
  const t = useTime()
  const fs = useSpring(factor ?? new MotionValue(1), { damping: 30 })
  const y = useTransform(() => Math.sin((t.get() - rand1) / 1000) * 10 - 5)
  const x = useTransform(() => dir * Math.sin((t.get() - rand2) / 5000) * 3)
  const scale = useTransform(fs, [1, 2], [0.8, 1.2])
  const rotateZ = useTransform(
    () => Math.sin((t.get() - rand3) / 2000) * Math.PI * 2 * dir
  )
  const rotateY = useTransform(
    () => Math.sin((t.get() - rand1) / 2000) * Math.PI * 4 * dir
  )
  // useMotionValueEvent(t, 'change', console.log)
  return (
    <motion.div
      className={cn(
        'size-[200px] @md:right-0 @lg:bottom-0 @lg:size-[300px]',
        className
      )}
      style={{ y, x, rotateZ, scale, rotateY }}
    >
      <Image src={src} alt="" className="size-full" />
    </motion.div>
  )
}

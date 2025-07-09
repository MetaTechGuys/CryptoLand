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
import { ResponsiveHelper } from './ResponsiveHelper'

interface FeatureCardProps {
  className?: string
  feature: IFeature
  clickible?: true
}

export function FeatureCard({ className, feature }: FeatureCardProps) {
  const f = motionValue(1)
  return (
    <ViewTransition name={`feature-${feature.id}-root`} default="delay-3">
      <GlareHover
        playOnce
        className={cn(
          'glass group @container min-h-fit overflow-clip rounded-2xl bg-slate-50/60 hover:bg-slate-50/80',
          'perspective-midrange',
          'cursor-pointer transition-all duration-100',
          className,
          feature.className
        )}
      >
        <div className="relative z-10 grid size-full auto-rows-min grid-cols-1 gap-4 p-8 @lg:grid-cols-2">
          <ResponsiveHelper container />
          {/* <FloatingRPTag /> */}
          <div className="prose prose-sm prose-slate relative max-w-full">
            <h1 className="inline-block font-serif text-3xl">
              {feature.title}
            </h1>
            <div className="lead truncate">{feature.lead}</div>
            <p className="line-clamp-4">{feature.description[0]} </p>
            <a className="absolute right-0 -bottom-2 text-xs italic opacity-50">
              Readmore
            </a>
          </div>
          <ViewTransition
            name={`feature-${feature.id}-image`}
            default="duration-9 delay-3"
          >
            <div className="cus-hv-center absolute -z-10 size-full @lg:relative">
              {feature.image ? (
                <FloatingFeatureImage
                  src={feature.image}
                  factor={f}
                  className="opacity-15 starting:open:opacity-0"
                />
              ) : feature.model ? (
                <div className="size-50 opacity-30 transition duration-500 ease-in-out @lg:size-60 pointer-fine:scale-75 pointer-fine:opacity-0 pointer-fine:group-hover:scale-100 pointer-fine:group-hover:opacity-100">
                  <RichCanvas className="size-50 translate-8">
                    <GlbObject {...feature.model} />
                  </RichCanvas>
                </div>
              ) : null}
            </div>
          </ViewTransition>
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

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

interface FeatureCardProps {
  className?: string
  feature: IFeature
  clickible?: true
}

export function FeatureCard({ className, feature }: FeatureCardProps) {
  const f = motionValue(1)
  return (
    <ViewTransition name={`feature-${feature.key}-root`} default="delay-3">
      <div
        className={cn(
          'glass @container overflow-clip rounded-2xl bg-stone-50/60',
          'perspective-midrange',
          'cursor-pointer transition-all duration-100 hover:outline-2 hover:outline-offset-2',
          className,
          feature.className
        )}
        onMouseOverCapture={() => f.set(2)}
        onMouseOutCapture={() => f.set(1)}
      >
        <FloatingFeatureImage
          src={feature.image}
          factor={f}
          fkey={feature.key}
          className="absolute right-16 bottom-8 -z-10 opacity-15"
        />
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
      </div>
    </ViewTransition>
  )
}

interface FloatingFeatureImageProps {
  fkey: string
  className?: string
  src: StaticImageData
  factor?: MotionValue<number>
}

export function FloatingFeatureImage({
  src,
  className,
  factor,
  fkey,
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
      <ViewTransition
        name={`feature-${fkey}-image`}
        default="duration-9 delay-3"
      >
        <Image src={src} alt="" className="size-full" />
      </ViewTransition>
    </motion.div>
  )
}

// function FloatingRPTag() {
//   return (
//     <div className="absolute bg-white p-4 text-black">
//       <span className="@sm:hidden">xs</span>
//       <span className="hidden @sm:@max-md:block">sm</span>
//       <span className="hidden @md:@max-lg:block">md</span>
//       <span className="hidden @lg:@max-xl:block">lg</span>
//       <span className="hidden @xl:@max-2xl:block">xl</span>
//       <span className="hidden @2xl:@max-3xl:block">2xl</span>
//       <span className="hidden @3xl:block">3xl</span>
//     </div>
//   )
// }

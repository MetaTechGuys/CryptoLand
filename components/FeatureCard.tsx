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
import { PropsWithChildren, useState } from 'react'

interface FeatureCardProps {
  className?: string
  title: string
  bgImg?: StaticImageData
}

export function FeatureCard({
  className,
  children,
  title,
  bgImg,
}: PropsWithChildren<FeatureCardProps>) {
  const f = motionValue(1)
  return (
    <div
      className={cn(
        'glass @container overflow-clip rounded-2xl bg-stone-200/40',
        'perspective-midrange',
        className
      )}
      onMouseOverCapture={() => f.set(2)}
      onMouseOutCapture={() => f.set(1)}
    >
      {bgImg && <FloatingFeatureImage src={bgImg} factor={f} />}
      <div className="z-10 grid size-full auto-rows-min gap-4 p-8 @md:grid-cols-2">
        <div className="prose prose-sm prose-slate">
          <h1 className="font-serif text-3xl">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  )
}

interface FloatingFeatureImageProps {
  src: StaticImageData
  factor?: MotionValue<number>
}

function FloatingFeatureImage({ src, factor }: FloatingFeatureImageProps) {
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
      className="absolute right-16 bottom-8 -z-10 size-[200px] opacity-55"
      style={{ y, x, rotateZ, scale, rotateY }}
    >
      <Image src={src} alt="" className="size-full" />
    </motion.div>
  )
}

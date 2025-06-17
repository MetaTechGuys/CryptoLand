import { cn } from '@/utils/tailwind'
import { useMotionValueEvent, useScroll, useTransform } from 'motion/react'
import {
  ComponentProps,
  PropsWithChildren,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

export function SlidePage({
  children,
  className,
  ref,
}: Readonly<PropsWithChildren<ComponentProps<'div'>>>) {
  return (
    <div ref={ref} className={cn('fixed inset-0 h-screen w-screen', className)}>
      {children}
    </div>
  )
}

export function useSlideProgress(offset: number) {
  const [innerHeight, setInnerHeight] = useState(800)
  const [inCenter, setInCenter] = useState(offset === 0)
  const [inRange, setInRange] = useState(offset === 0)
  useLayoutEffect(() => {
    setInnerHeight(window.innerHeight)
  }, [])
  const { scrollY } = useScroll()
  const progress = useTransform(
    scrollY,
    [(offset - 1) * innerHeight, offset * innerHeight],
    [0, 1],
    { clamp: false }
  )

  const clamp = useTransform(
    scrollY,
    [
      (offset - 1) * innerHeight,
      offset * innerHeight,
      (offset + 1) * innerHeight,
    ],
    [0, 1, 0],
    { clamp: true }
  )

  const inRange0 = useTransform(() => clamp.get() > 0)
  const inCenter0 = useTransform(() => clamp.get() === 1)

  useMotionValueEvent(inRange0, 'change', (inRange0) => {
    if (!inRange0 && inRange) setInRange(false)
    else if (inRange0 && !inRange) setInRange(true)
  })

  useMotionValueEvent(inCenter0, 'change', (inCenter0) => {
    if (!inCenter0 && inCenter) setInCenter(false)
    else if (inCenter0 && !inCenter) setInCenter(true)
  })

  return useMemo(
    () => ({ progress, clamp, height: innerHeight, inRange, inCenter }),
    [progress, clamp, innerHeight, inRange, inCenter]
  )
}

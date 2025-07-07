'use client'

import {
  frame,
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
} from 'motion/react'
import { RefObject, useEffect, useRef } from 'react'

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useFollowPointer(ref)

  return (
    <motion.div
      ref={ref}
      style={pos}
      id="cursor-tail"
      className="pointer-events-none fixed z-50 hidden lg:block"
    >
      <span className="pointer-events-none block size-5 rounded-full border-2 border-white/50 transition-all"></span>
    </motion.div>
  )
}

export function usePointerRef() {
  const x = useMotionValue(-50)
  const y = useMotionValue(-50)
  useEffect(() => {
    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      x.set(clientX)
      y.set(clientY)
    }
    window.addEventListener('pointermove', handlePointerMove, { capture: true })
    return () =>
      window.removeEventListener('pointermove', handlePointerMove, {
        capture: true,
      })
  }, [x, y])
  return { x, y }
}

const spring: SpringOptions = {
  damping: 20,
  stiffness: 300,
  mass: 0.5,
  restDelta: 0.01,
}

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(-50, spring)
  const y = useSpring(-50, spring)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      if (!ref.current) return
      const element = ref.current!

      frame.read(() => {
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
        y.set(clientY - element.offsetTop - element.offsetHeight / 2)
      })
    }

    window.addEventListener('pointermove', handlePointerMove, { capture: true })

    return () =>
      window.removeEventListener('pointermove', handlePointerMove, {
        capture: true,
      })
  }, [ref, x, y])

  return { x, y }
}

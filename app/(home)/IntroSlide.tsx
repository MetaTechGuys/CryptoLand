'use client'
import mainBg from '@/public/main-bg.png'
import mainBgVert from '@/public/main-bg-vert.png'
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useTime,
  useTransform,
} from 'motion/react'
import { CSSProperties, useRef } from 'react'

const bgImgStyle: CSSProperties = {
  backgroundImage: `url(${mainBg.src})`,
}
const bgImgStyleVert: CSSProperties = {
  backgroundImage: `url(${mainBgVert.src})`,
}

export default function IntroSlide() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  // const inCenter = useInView(ref, { amount: 'all' })

  const time = useTime()
  const opacity = useTransform(time, [3500, 3800], [0, 1], { clamp: true })
  const bgScale = useTransform(time, [3700, 6000], [1, 1.05], { clamp: true })
  useMotionValueEvent(time, 'change', (t) => {
    if (t >= 6000) {
      time.destroy()
    }
  })

  return (
    <section ref={ref} className="h-screen snap-center">
      <AnimatePresence>
        {inView ? (
          <>
            <motion.div
              style={{ ...bgImgStyle, opacity, scale: bgScale }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 hidden size-full bg-cover bg-left-top bg-no-repeat md:block xl:bg-contain xl:bg-center"
            />
            <motion.div
              style={{ ...bgImgStyleVert, opacity, scale: bgScale }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 size-full bg-cover bg-top bg-no-repeat md:hidden"
            />
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

'use client'
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useTime,
} from 'motion/react'
import { useRef, useState } from 'react'

export default function IntroSlide() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  const [visible, setVisibility] = useState(false)
  // const inCenter = useInView(ref, { amount: 'all' })

  const time = useTime()
  useMotionValueEvent(time, 'change', (t) => {
    if (t >= 3500) {
      time.destroy()
      setVisibility(true)
    }
  })

  return (
    <section ref={ref} className="h-screen snap-center">
      <AnimatePresence>
        {inView && visible ? (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 1 }}
              animate={{
                opacity: 1,
                scale: 1.05,
                transition: { delay: 0.5, duration: 1.5 },
              }}
              exit={{ opacity: 0, scale: 1, transition: { duration: 1.5 } }}
              className="fixed inset-0 hidden size-full bg-[url(/main-bg-vert.png)] bg-cover bg-left-top bg-no-repeat md:block md:bg-[url(/main-bg.png)] xl:bg-contain xl:bg-center"
            />
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

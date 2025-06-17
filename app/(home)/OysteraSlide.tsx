'use client'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function OysteraSlide() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  const inCenter = useInView(ref, { amount: 'all' })

  console.log('OysteraSlide', { inView, inCenter })

  return (
    <section ref={ref} className="h-screen snap-center">
      <AnimatePresence>
        {inView ? (
          <motion.div
            className="fixed inset-0 flex size-full items-center justify-center bg-black/80 text-9xl"
            initial={{ y: 500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 500, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Cryptoland
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

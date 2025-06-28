'use client'
import { AnimatePresence, motion } from 'motion/react'

export default function IntroSlide() {
  return (
    <section className="h-screen snap-center">
      <AnimatePresence>
        <>
          <motion.div
            key="img"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: 1,
              scale: 1.05,
              transition: { delay: 4, duration: 1.5 },
            }}
            exit={{ opacity: 0, scale: 1, transition: { duration: 1.5 } }}
            className="fixed inset-0 size-full bg-[url(/main-bg-vert.png)] bg-cover bg-left-top bg-no-repeat md:bg-[url(/main-bg.png)] xl:bg-contain xl:bg-center"
          />
        </>
      </AnimatePresence>
    </section>
  )
}

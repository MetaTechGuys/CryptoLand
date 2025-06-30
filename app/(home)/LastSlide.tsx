'use client'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function LastSlide() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  // const inCenter = useInView(ref, { amount: 'all' })
  //
  return (
    <section ref={ref} className="h-screen snap-end">
      <AnimatePresence propagate>
        {inView ? (
          <>
            <motion.div
              className="fixed inset-0 flex flex-col items-center justify-center gap-16 overflow-hidden bg-black/80 md:flex-row"
              initial={{ y: '100vh' }}
              animate={{ y: 0, transition: { duration: 0.7 } }}
              exit={{
                y: '100vh',
                transition: { duration: 2, delay: 0.2 },
              }}
            >
              <AnimatePresence propagate>
                <motion.div
                  key="bg"
                  className="absolute inset-0 flex items-center justify-center bg-pink-900/60 bg-[url(/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_3.jpg)] bg-cover bg-[80%] bg-no-repeat bg-blend-color md:bg-[url(/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates.jpg)] md:bg-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1.1,
                    transition: { delay: 0.45, duration: 1.5 },
                  }}
                />
                <div className="absolute inset-0 bg-[url(/bg-pattern.png)]" />
                <motion.div
                  key="cover"
                  className="absolute inset-0 bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                />
              </AnimatePresence>
              <a href="#sports" className="contents">
                <MenuItem title="Sports" delay={0.2} />
              </a>
              <a href="#health" className="contents">
                <MenuItem title="Health" delay={0.3} />
              </a>
              <a href="#business" className="contents">
                <MenuItem title="Business" delay={0.1} />
              </a>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

interface MenuItemProps {
  title: string
  link?: string
  delay?: number
}

function MenuItem({ title, delay = 0 }: MenuItemProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 1.1 }}
      className="relative grid w-50 grid-cols-1 grid-rows-1 text-center font-serif text-3xl font-bold uppercase"
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 1.0 + delay },
        }}
        className="pointer-events-none z-10 col-start-1 row-start-1"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 4,
          x: 4,
          opacity: 0.2,
          transition: { delay: 1.05 + delay },
        }}
        className="col-start-1 row-start-1 text-white"
      >
        {title}
      </motion.div>
    </motion.div>
  )
}

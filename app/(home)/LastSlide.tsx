'use client'
import img3 from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid.webp'
import { AnimatePresence, motion, useInView } from 'motion/react'
import Link from 'next/link'
import { CSSProperties, useRef } from 'react'

export default function LastSlide() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  // const inCenter = useInView(ref, { amount: 'all' })

  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${img3.src})`,
  }

  return (
    <section ref={ref} className="h-screen snap-center">
      <AnimatePresence>
        {inView ? (
          <>
            <motion.div
              className="--bg-black/80 fixed inset-0 flex items-center justify-center bg-pink-900/60 bg-cover bg-center bg-no-repeat bg-blend-color"
              style={bgImgStyle}
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
              transition={{ duration: 1 }}
            ></motion.div>
            <motion.div
              className="fixed inset-0 flex flex-col items-center justify-center gap-16 bg-[url(/bg-pattern.png)] md:flex-row"
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 500, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Link href="/v1" className="contents">
                <MenuItem title="Hotel" delay={0.2} />
              </Link>
              <Link href="#" className="contents">
                <MenuItem title="Exchange" delay={0.3} />
              </Link>
              <Link href="/" className="contents">
                <MenuItem title="Casino" delay={0.1} />
              </Link>
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
      className="relative grid w-50 grid-cols-1 grid-rows-1 text-center font-serif text-3xl font-bold uppercase"
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.5 + delay } }}
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
          transition: { delay: 0.55 + delay },
        }}
        className="col-start-1 row-start-1 text-white"
      >
        {title}
      </motion.div>
    </motion.div>
  )
}

'use client'
import { useHash } from '@/utils/route'
import { AnimatePresence, motion, useInView } from 'motion/react'
import { CSSProperties, useRef } from 'react'
import ContentSlideVert from './v1/ContentSlideVert'
import img1 from '@/public/Oystra-Residences-1.jpg'
import img2 from '@/public/dkjnb.jpg'
import bgimg from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid.webp'
import img4 from '@/public/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp'

export default function LastSlide() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  // const inCenter = useInView(ref, { amount: 'all' })

  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${bgimg.src})`,
  }
  const hash = useHash()

  return (
    <section ref={ref} className="h-screen snap-end">
      <AnimatePresence propagate>
        {inView ? (
          <>
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-pink-900/60 bg-cover bg-center bg-no-repeat bg-blend-color"
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
              <a href="#hotel" className="contents">
                <MenuItem title="Hotel" delay={0.2} />
              </a>
              <a href="#exchange" className="contents">
                <MenuItem title="Exchange" delay={0.3} />
              </a>
              <a href="#casino" className="contents">
                <MenuItem title="Casino" delay={0.1} />
              </a>
            </motion.div>
          </>
        ) : null}
        {hash === '#casino' ? (
          <ContentSlideVert
            key="casino"
            title="Casino"
            className="fixed inset-0"
            img={img1.src}
          />
        ) : null}
        {hash === '#hotel' ? (
          <ContentSlideVert
            key="hotel"
            title="hotel"
            className="fixed inset-0"
            img={img2.src}
          />
        ) : null}
        {hash === '#exchange' ? (
          <ContentSlideVert
            key="exchange"
            title="Exchange"
            className="fixed inset-0"
            img={img4.src}
          />
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

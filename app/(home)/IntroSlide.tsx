'use client'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
// import img from '@/public/Oystra-Residences-10.jpg'
import GlareHover from '@/components/bits/GlareHover'
import content from '@/data/contents'
import img from '@/public/oystra-neon.png'

export default function IntroSlide() {
  // const { scrollYProgress } = useScroll()
  // const h1XOffset = useTransform(scrollYProgress, [0, 0.3], [-300, 0], {
  //   clamp: true,
  // })
  return (
    <section className="h-[120vh] snap-center overflow-clip">
      <AnimatePresence>
        <motion.div
          key="img"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5 },
          }}
          exit={{ opacity: 0, scale: 1, transition: { duration: 1.5 } }}
          className="cus-random-grad fixed inset-0 size-full"
        >
          <div className="fixed"></div>
          <Image
            src={img}
            alt="OYSTRA-ZAHA-HADID"
            className="-opacity-0 h-screen w-screen object-cover object-top-right mix-blend-luminosity"
          />
          <div className="bg-pattern absolute inset-0"></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            // style={{ x: h1XOffset }}
            className="text-shadow cus-hv-center absolute inset-0 size-full"
          >
            <GlareHover
              playOnce
              className="prose prose-invert mx-4 rounded-md p-8 pt-0 select-none"
            >
              <div>
                <motion.h2 className="m-0 text-center font-bold">
                  {content.home.headline}
                </motion.h2>
                <p className="text-justify">{content.home.content}</p>
              </div>
            </GlareHover>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

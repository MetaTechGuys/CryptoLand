'use client'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
// import img from '@/public/Oystra-Residences-10.jpg'
import img from '@/public/OYSTRA-ZAHA-HADID-2.webp'

export default function IntroSlide() {
  return (
    <section className="h-screen snap-center overflow-clip">
      <AnimatePresence>
        <motion.div
          key="img"
          initial={{ opacity: 0, scale: 1 }}
          animate={{
            opacity: 1,
            scale: 1.05,
            transition: { duration: 1.5 },
          }}
          exit={{ opacity: 0, scale: 1, transition: { duration: 1.5 } }}
          className="cus-random-grad fixed inset-0 size-full xl:bg-contain xl:bg-center"
        >
          <Image
            src={img}
            alt="OYSTRA-ZAHA-HADID"
            className="-opacity-0 h-screen w-screen object-cover mix-blend-hard-light"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="cus-hv-center text-shadow absolute inset-0 size-full"
          >
            <div className="bg-sickpattern bg-clip-text p-8 text-transparent select-none">
              <h1 className="mb-2 font-serif text-6xl leading-20 font-bold">
                Where
                <br />
                Cryptocurrency
                <br />
                Meets
                <br />
                Luxury
                <br />
                Living
              </h1>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

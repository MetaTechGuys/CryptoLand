'use client'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
// import img from '@/public/Oystra-Residences-10.jpg'
// import GlareHover from '@/components/bits/GlareHover'
import VariableProximity from '@/components/bits/VariableProximity'
import content from '@/data/contents'
import img from '@/public/oystra-neon.png'
import { useEffect, useRef, useState } from 'react'

export default function IntroSlide() {
  const timer = useRef<NodeJS.Timeout>(null)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % 3)
    }, 2000)

    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])
  const ref = useRef<HTMLDivElement>(null)
  return (
    <section className="h-[110vh] snap-center overflow-clip">
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 4 }}
            className="bg-pattern absolute inset-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            // style={{ x: h1XOffset }}
            className="text-shadow cus-hv-center absolute inset-0 mt-32 size-full select-none"
          >
            <div className="flex w-full -translate-y-12 justify-end text-6xl font-bold text-white mix-blend-soft-light drop-shadow-white">
              <AnimatePresence>
                {content.home.keywords.map((kw, k) =>
                  k === index ? (
                    <motion.div
                      key={kw}
                      className="w-full text-center uppercase"
                      initial={{ y: -30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 30, opacity: 0, position: 'absolute' }}
                      transition={{ duration: 0.7 }}
                    >
                      {kw}
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            <div
              ref={ref}
              className="text-center font-light tracking-widest text-white"
            >
              <div className="flex gap-8">
                {content.home.slugan2.split(' ').map((kw, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0, pointerEvents: '' }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.1 }}
                  >
                    <VariableProximity
                      label={kw}
                      fromFontVariationSettings="'wght' 100"
                      toFontVariationSettings="'wght' 900"
                      containerRef={ref}
                      radius={100}
                      initialShow
                      falloff="exponential"
                      className="text-5xl"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

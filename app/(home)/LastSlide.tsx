'use client'
import blogsData from '@/data/blogs'
import {
  AnimatePresence,
  motion,
  TargetAndTransition,
  useInView,
} from 'motion/react'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const videoAnimationVariants: Record<
  'initial' | 'enter' | 'exit',
  TargetAndTransition
> = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  enter: {
    opacity: 0.75,
    x: '20%',
    transition: { delay: 0.15, duration: 0.7 },
  },
  exit: {
    opacity: 0,
    x: '-10%',
    transition: { duration: 0.3 },
  },
}

export default function LastSlide() {
  const ref = useRef<HTMLElement>(null)
  const vidRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  useEffect(() => {
    if (inView && vidRef.current) vidRef.current.currentTime = 0
  }, [inView])
  return (
    <section ref={ref} className="h-screen snap-end">
      <AnimatePresence propagate>
        {inView ? (
          <>
            <motion.div
              className="fixed inset-0 flex flex-col items-center justify-center gap-16 overflow-hidden md:items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6 } }}
              exit={{
                opacity: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
            >
              <AnimatePresence propagate>
                {/* <motion.div
                  key="bg"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-[url(/wd-black.jpg)] bg-center bg-no-repeat"
                  initial={{
                    opacity: 0,
                    backgroundPositionX: 'calc(50% - 300px)',
                  }}
                  animate={{
                    opacity: 1,
                    backgroundPositionX: 'calc(50% + 0px)',
                    transition: { delay: 0.15, duration: 0.5 },
                  }}
                  exit={{
                    opacity: 0,
                    backgroundPositionX: 'calc(50% - 300px)',
                    transition: { duration: 0.5 },
                  }}
                /> */}
                <div
                  key="vid-wrapper"
                  className="absolute inset-0 flex items-center justify-end bg-black"
                >
                  <motion.video
                    ref={vidRef}
                    variants={videoAnimationVariants}
                    key="vid"
                    src="/wd-motion.webm"
                    className="h-2/3 bg-black object-cover object-left"
                    muted
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    onAnimationStart={(def) => {
                      if (vidRef.current) {
                        if (def === 'enter') {
                          vidRef.current.currentTime = 0
                          setTimeout(
                            () => {
                              vidRef.current!.play()
                            },
                            (videoAnimationVariants.enter.transition?.delay ??
                              0) * 1000
                          )
                        } else {
                          vidRef.current.currentTime = 0.3
                          vidRef.current.play()
                        }
                        console.log(def)
                      }
                      if (vidRef.current && def === 'enter') {
                      }
                    }}
                    onAnimationComplete={() => {
                      if (vidRef.current) {
                        vidRef.current.pause()
                      }
                    }}
                    onAnimationIteration={console.log.bind(console, '[ittt]')}
                  />
                </div>
                <div key="pattern" className="bg-pattern absolute inset-0" />
              </AnimatePresence>
              {blogsData.map((bd, i) => (
                <Link
                  key={bd.key}
                  href={`/blog/${bd.key}`}
                  className="contents"
                >
                  <MenuItem title={bd.key} indexFactor={i / blogsData.length} />
                </Link>
              ))}
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
  indexFactor?: number
}

function MenuItem({ title, indexFactor = 0 }: MenuItemProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 1.1 }}
      className="relative grid grid-cols-1 grid-rows-1 text-center font-serif text-3xl font-bold uppercase sm:w-1/2 md:px-20 md:text-start lg:px-40 xl:px-40"
    >
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { delay: 0.7 + indexFactor * 0.5 },
        }}
        exit={{
          x: -200,
          opacity: 0,
          transition: { delay: (1 - indexFactor) * 0.5 },
        }}
        className="pointer-events-none z-10 col-start-1 row-start-1"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{
          y: 4,
          x: 4,
          opacity: 0.2,
          transition: { delay: 0.75 + indexFactor * 0.5 },
        }}
        exit={{
          x: -200,
          opacity: 0,
          transition: { delay: (1 - indexFactor) * 0.5 },
        }}
        className="col-start-1 row-start-1 text-white"
      >
        {title}
      </motion.div>
    </motion.div>
  )
}

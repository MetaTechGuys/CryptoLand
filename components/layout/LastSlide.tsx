'use client'
import Icon from '@/components/icon/Icon'
import blogsData from '@/data/blogs'
import {
  AnimatePresence,
  motion,
  // TargetAndTransition,
  useInView,
} from 'motion/react'
import Link from 'next/link'
import { ReactNode, useEffect, useRef } from 'react'
import pckg from '@/package.json'

// const videoAnimationVariants: Record<
//   'initial' | 'enter' | 'exit',
//   TargetAndTransition
// > = {
//   initial: {
//     opacity: 0,
//     x: '100%',
//   },
//   enter: {
//     opacity: 0.75,
//     x: '20%',
//     transition: { delay: 0.15, duration: 0.7 },
//   },
//   exit: {
//     opacity: 0,
//     x: '-10%',
//     transition: { duration: 0.3 },
//   },
// }

export default function LastSlide() {
  const ref = useRef<HTMLElement>(null)
  const vidRef = useRef<HTMLVideoElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  useEffect(() => {
    if (inView && vidRef.current) vidRef.current.currentTime = 0
  }, [inView])
  return (
    <section ref={ref} className="h-screen snap-end">
      <AnimatePresence>
        {inView ? (
          <>
            <motion.div
              className="fixed inset-0 flex flex-col items-center justify-center gap-8 overflow-hidden bg-black md:items-start md:gap-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.6 } }}
              exit={{
                opacity: 0,
                transition: { duration: 1, delay: 0.2 },
              }}
            >
              <AnimatePresence propagate>
                <div
                  key="bg"
                  className="absolute inset-0 flex items-center justify-center bg-[url(/wd-black.jpg)] bg-center bg-no-repeat"
                />
                {/* <div
                  key="vid-wrapper"
                  className="absolute inset-0 flex items-center justify-end bg-black"
                >
                  <motion.video
                    ref={vidRef}
                    variants={videoAnimationVariants}
                    key="vid"
                    src="/wd-motion.webm"
                    className="--blur-xs h-2/3 bg-black object-cover object-left"
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
                              vidRef.current!.playbackRate = 0.5
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
                  />
                </div> */}
                <div key="pattern" className="bg-pattern absolute inset-0" />
                {blogsData.map((bd, i) => (
                  <Link
                    key={bd.key}
                    href={`/blog/${bd.key}`}
                    className="contents"
                  >
                    <MenuItem indexFactor={i / blogsData.length}>
                      {bd.title}
                    </MenuItem>
                  </Link>
                ))}
                <div className="z-1 mt-8 flex gap-8 text-white sm:w-1/2 md:px-20 lg:px-40 xl:px-40">
                  <a
                    href="https://instagram.com/cryptoland"
                    target="_blank"
                    className="contents"
                  >
                    <SocialItem indexFactor={0}>
                      <Icon name="instagram" className="size-8" />
                    </SocialItem>
                  </a>
                  <a
                    href="https://facebook.com/cryptoland"
                    target="_blank"
                    className="contents"
                  >
                    <SocialItem indexFactor={0.2}>
                      <Icon name="facebook" className="size-8" />
                    </SocialItem>
                  </a>
                  <a
                    href="https://x.com/cryptoland"
                    target="_blank"
                    className="contents"
                  >
                    <SocialItem indexFactor={0.4}>
                      <Icon name="twitter-x" className="size-8" />
                    </SocialItem>
                  </a>
                  <a
                    href="https://wa.me/cryptoland"
                    target="_blank"
                    className="contents"
                  >
                    <SocialItem indexFactor={0.6}>
                      <Icon name="logo-whatsapp" className="size-8" />
                    </SocialItem>
                  </a>
                </div>
              </AnimatePresence>
              <div className="text-foreground fixed start-2 bottom-1 z-50 text-xs">
                <span title={new Date(pckg['version.stamp']).toLocaleString()}>
                  v{pckg.version}
                </span>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

interface MenuItemProps {
  children: ReactNode
  indexFactor?: number
}

function MenuItem({ children, indexFactor = 0 }: MenuItemProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 1.1 }}
      className="relative grid grid-cols-1 grid-rows-1 text-center font-serif text-xl font-bold uppercase sm:w-1/2 sm:text-3xl md:px-20 md:text-start lg:px-40 xl:px-40"
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
        className="pointer-events-none z-10 col-start-1 row-start-1 text-nowrap"
      >
        {children}
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
        className="col-start-1 row-start-1 text-nowrap text-white"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

function SocialItem({ children, indexFactor = 0 }: MenuItemProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 1.1 }}
      className="relative grid grid-cols-1 grid-rows-1"
    >
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { delay: 0.7 + indexFactor * 0.5 },
        }}
        exit={{
          y: 200,
          opacity: 0,
          transition: { delay: (1 - indexFactor) * 0.5 },
        }}
        className="pointer-events-none z-10 col-start-1 row-start-1"
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          x: 4,
          y: 4,
          opacity: 0.2,
          transition: { delay: 0.75 + indexFactor * 0.5 },
        }}
        exit={{
          y: 200,
          opacity: 0,
          transition: { delay: (1 - indexFactor) * 0.5 },
        }}
        className="col-start-1 row-start-1 text-white"
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

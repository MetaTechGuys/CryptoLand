'use client'
import BurgerIcon from '@/components/icon/burger'
import logo from '@/public/logo-transparent.png'
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTime,
  useTransform,
} from 'motion/react'
import Link from 'next/link'
import { useLayoutEffect, useState } from 'react'

const title = 'Cryptoland'

export default function SlidesControls() {
  const [hover, setHover] = useState('')
  const [isOpen, setOpen] = useState(false)
  const [lock, setLock] = useState(true)
  const [ended, setEnded] = useState(false)
  const [typewrite, setTypewrite] = useState(0)
  const time = useTime()
  const rotateY = useTransform(time, [500, 700], [90, 0], { clamp: true })
  const iconScale = useTransform(time, [1000, 1300], [2, 1], { clamp: true })
  const width = useTransform(time, [1500, 2000], [0, title.length * 100], {
    clamp: true,
  })
  const { scrollYProgress } = useScroll()
  const isEnded = useTransform(() => !!Math.floor(scrollYProgress.get()))
  useMotionValueEvent(isEnded, 'change', setEnded)
  const y = useTransform(time, [3000, 3500], [400, 0], { clamp: true })
  const scale = useTransform(time, [3000, 3500], [3, 1], { clamp: true })
  useMotionValueEvent(width, 'change', (w) => {
    setTypewrite(Math.floor(w / 100))
  })
  useMotionValueEvent(time, 'change', (t) => {
    if (lock && t >= 4000) {
      setLock(false)
    }
  })
  useMotionValueEvent(time, 'change', (t) => {
    if (t >= 6000) {
      time.destroy()
    }
  })

  useLayoutEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  return (
    <>
      <motion.div
        className="fixed inset-0 bottom-auto z-50 flex items-center justify-center gap-2 py-4"
        style={{ y, scale }}
      >
        <motion.img
          className="size-8 rounded-full object-cover"
          src={logo.src}
          style={{ rotateY, scale: iconScale }}
        />
        <motion.h1 className="overflow-hidden font-serif text-3xl font-bold tracking-widest text-nowrap uppercase text-shadow-xs">
          {title.substring(0, typewrite) +
            (typewrite > 0 && typewrite < title.length ? '_' : '')}
        </motion.h1>
      </motion.div>
      <AnimatePresence>
        {lock || isOpen ? (
          <div className="scroll-lock" />
        ) : !ended ? (
          <motion.svg
            exit={{ y: 50, opacity: 0 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="scroll-invitation-svg fixed inset-0 top-auto bottom-4 z-20 mx-auto size-12 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 42"
          >
            <path d="M2,12H2V30a10,10,0,0,0,20,0V12A10,10,0,0,0,2,12ZM0,12a12,12,0,0,1,24,0V30A12,12,0,0,1,0,30V12Z"></path>
            <g className="translate-y-3">
              <path
                className="scroll-invitation-svg-line animate-bounce"
                d="M11,7v4a1,1,0,0,0,2,0V7a1,1,0,0,0-2,0Z"
              ></path>
            </g>
          </motion.svg>
        ) : null}
      </AnimatePresence>
      {!lock && (
        <motion.button
          className="fixed end-4 top-4 z-50 text-white"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          onClick={() => {
            setOpen((o) => !o)
          }}
        >
          <BurgerIcon className="size-16" active={isOpen} />
        </motion.button>
      )}
      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed top-0 z-30 w-full bg-pink-900/50 bg-[url(/bg-pattern.png)]"
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              exit={{ height: 0 }}
            />
            <motion.div
              className="fixed top-0 z-30 w-full bg-pink-500/50"
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              exit={{ height: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.div
              className="fixed top-0 z-30 w-full bg-pink-100/50"
              initial={{ height: 0 }}
              animate={{ height: '100vh' }}
              exit={{ height: 0 }}
              transition={{ delay: 0.2 }}
            >
              <AnimatePresence mode="sync">
                <motion.span
                  key={hover}
                  initial={{ opacity: 0, letterSpacing: 0 }}
                  animate={{ opacity: 0.1, letterSpacing: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 top-auto bottom-16 text-center text-9xl font-bold text-nowrap uppercase opacity-10 transition-all"
                  transition={{ ease: easeInOut }}
                >
                  {hover}
                </motion.span>
              </AnimatePresence>
            </motion.div>
            <motion.div
              className="fixed top-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="fixed top-0 z-30 flex h-screen w-full flex-col items-center justify-center gap-8 text-center"
                exit={{ opacity: 0 }}
              >
                <Link
                  href="/"
                  scroll
                  onMouseOver={() => {
                    setHover('Home')
                  }}
                  onClick={() => {
                    setOpen(false)
                  }}
                  className="contents"
                >
                  <MenuItem title="Home" />
                </Link>
                <Link
                  scroll
                  onMouseOver={() => {
                    setHover('About Us')
                  }}
                  onClick={() => {
                    setOpen(false)
                  }}
                  href="/v1"
                  className="contents"
                >
                  <MenuItem title="About Us" />
                </Link>
                <Link
                  onMouseOver={() => {
                    setHover('Contact Us')
                  }}
                  onClick={() => {
                    setOpen(false)
                  }}
                  href="#"
                  className="contents"
                >
                  <MenuItem title="Contact Us" />
                </Link>
              </motion.div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}

interface MenuItemProps {
  title: string
  link?: string
}

function MenuItem({ title }: MenuItemProps) {
  return (
    <motion.div className="grid grid-cols-1 grid-rows-1 font-serif text-7xl font-bold uppercase">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
        className="pointer-events-none z-10 col-start-1 row-start-1"
      >
        {title}
      </motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 4, x: 4, opacity: 0.2, transition: { delay: 0.55 } }}
        whileHover={{ x: 8, y: 8, opacity: 0.3, transition: { delay: 0 } }}
        className="col-start-1 row-start-1 text-pink-800"
      >
        {title}
      </motion.div>
    </motion.div>
  )
}

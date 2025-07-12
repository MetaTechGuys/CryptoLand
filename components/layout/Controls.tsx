'use client'
import BurgerIcon from '@/components/icon/burger'
import logo from '@/public/logo/cryptoland-white-mono-sm.png'
import { useHash } from '@/utils/route'
import { cn } from '@/utils/tailwind'
import {
  AnimatePresence,
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
  useTime,
  useTransform,
} from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLayoutEffect, useRef, useState } from 'react'

const title = 'Cryptoland'

interface SlidesControlsProps {
  skipAnimates?: boolean
}

export default function SlidesControls({ skipAnimates }: SlidesControlsProps) {
  const hash = useHash()
  const haveHash = hash.length > 1
  const screenWidth = useRef(640)

  useLayoutEffect(() => {
    if (typeof width !== undefined) {
      screenWidth.current = window.innerWidth
    }
  })
  const isSmall = screenWidth.current < 640

  function ctlRange(r: [number, number]): [number, number] {
    return !skipAnimates ? r : [-1, 0]
  }
  function ctlDelay(d: number): number {
    return !skipAnimates ? d : 0
  }

  const { back } = useRouter()

  const [hover, setHover] = useState('')
  const [isOpen, setOpen] = useState(false)
  const [lock, setLock] = useState(true)
  const [ended, setEnded] = useState(false)
  const [typewrite, setTypewrite] = useState(!skipAnimates ? 0 : title.length)
  const time = useTime()
  // const time = useMotionValue(1300)
  const rotateY = useTransform(time, ctlRange([500, 700]), [90, 0], {
    clamp: true,
  })
  const iconScale = useTransform(time, ctlRange([1000, 1300]), [4, 2], {
    clamp: true,
  })
  const width = useTransform(
    time,
    ctlRange([1500, 2000]),
    [0, title.length * 100],
    {
      clamp: true,
    }
  )
  const { scrollYProgress } = useScroll()
  const isEnded = useTransform(() => !!Math.floor(scrollYProgress.get()))
  useMotionValueEvent(isEnded, 'change', setEnded)
  const y = useTransform(time, ctlRange([3000, 3500]), [400, 20], {
    clamp: true,
  })
  const x = useTransform(
    time,
    ctlRange([3000, 3500]),
    [0, -1 * (isSmall ? (screenWidth.current - 200) / 2 : 0)],
    {
      clamp: true,
    }
  )
  const scale = useTransform(time, ctlRange([3000, 3500]), [2, 1], {
    clamp: true,
  })
  useMotionValueEvent(width, 'change', (w) => {
    setTypewrite(Math.floor(w / 100))
  })
  useMotionValueEvent(time, 'change', (t) => {
    if (lock && t >= ctlDelay(4000)) {
      setLock(false)
    }
  })
  useMotionValueEvent(time, 'change', (t) => {
    if (t >= ctlDelay(6000)) {
      time.destroy()
    }
  })

  useLayoutEffect(() => {
    window.scroll({ top: 0 })
  }, [])

  const scrollTop = () => {
    if (window.location.pathname === '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.div
        className={cn(
          'fixed inset-0 bottom-auto z-40 w-screen',
          'flex flex-col items-center gap-4',
          'mix-blend-hard-light',
          'origin-center'
        )}
        style={{ y, x, scale }}
      >
        <Link className="contents" href="/" onClick={scrollTop}>
          <motion.div
            style={{ rotateY, scale: iconScale }}
            className="origin-center"
          >
            <Image
              src={logo}
              alt={title}
              className="h-8 w-min max-w-screen brightness-[100]"
            />
          </motion.div>
          <div className="cus-hv-center">
            <motion.h1 className="animate-shine font-serif text-xl font-bold tracking-widest text-nowrap uppercase text-shadow-xs sm:text-2xl md:text-3xl">
              {title.substring(0, typewrite) +
                (typewrite > 0 && typewrite < title.length ? '_' : '')}
            </motion.h1>
            <motion.span
              className="ps-3 text-xs tracking-[12px] text-nowrap uppercase opacity-50 md:tracking-[18px]"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 2.3 }}
            >
              by oystra
            </motion.span>
          </div>
        </Link>
      </motion.div>
      <AnimatePresence>
        {lock || isOpen ? (
          <div className="scroll-lock" />
        ) : !ended ? (
          <motion.div
            exit={{ y: 50, opacity: 0 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="cus-hv-center fixed inset-0 top-auto bottom-4 z-20 mx-auto gap-2 fill-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 24"
              className="w-6 fill-current"
            >
              <path
                fill-rule="evenodd"
                className="translate-y-0 animate-pulse [animation-delay:200ms] [animation-timing-function:steps(2)]"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                className="translate-y-1.5 animate-pulse [animation-delay:400ms] [animation-timing-function:steps(2)]"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
              <path
                fill-rule="evenodd"
                className="translate-y-3 animate-pulse [animation-delay:600ms] [animation-timing-function:steps(2)]"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <span className="text-xs text-nowrap uppercase">scroll down</span>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {!lock && (
        <motion.button
          className="fixed end-4 top-4 z-50 text-white"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          onClick={() => {
            if (haveHash) {
              back()
            } else {
              if (isOpen) {
                setOpen(false)
              } else {
                setOpen(true)
              }
            }
          }}
        >
          <BurgerIcon
            className="size-18"
            active={isOpen || haveHash}
            menu={!haveHash}
          />
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
                  href="/features"
                  className="contents"
                >
                  <MenuItem title="Features" />
                </Link>
                <Link
                  scroll
                  onMouseOver={() => {
                    setHover('Virtual Tour')
                  }}
                  onClick={() => {
                    setOpen(false)
                  }}
                  href="/360v?intro"
                  className="contents"
                >
                  <MenuItem title="Virtual Tour" />
                </Link>
                <Link
                  scroll
                  onMouseOver={() => {
                    setHover('About Us')
                  }}
                  onClick={() => {
                    setOpen(false)
                  }}
                  href="/about"
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
                  href="/contact"
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
    <div className="group grid grid-cols-1 grid-rows-1 font-serif text-3xl font-bold uppercase sm:text-5xl md:text-7xl">
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
        className="col-start-1 row-start-1 text-pink-800 transition-transform duration-75 will-change-transform group-hover:translate-1"
      >
        {title}
      </motion.div>
    </div>
  )
}

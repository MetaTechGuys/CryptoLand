'use client'
import logo from '@/public/logo-transparent.png'
import {
  motion,
  useMotionValueEvent,
  useTime,
  useTransform,
} from 'motion/react'
import { useLayoutEffect, useState } from 'react'

const title = 'Cryptoland'

export default function SlidesControls() {
  const [lock, setLock] = useState(true)
  const [typewrite, setTypewrite] = useState(0)
  const time = useTime()
  const rotateY = useTransform(time, [500, 700], [90, 0], { clamp: true })
  const iconScale = useTransform(time, [1000, 1300], [2, 1], { clamp: true })
  const width = useTransform(time, [1500, 2000], [0, title.length * 100], {
    clamp: true,
  })
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
      {lock ? (
        <div className="scroll-lock" />
      ) : (
        <>
          <motion.svg
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
        </>
      )}
    </>
  )
}

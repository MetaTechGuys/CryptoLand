import { cn } from '@/utils/tailwind'
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useVelocity,
} from 'motion/react'
import { CSSProperties, PropsWithChildren, useRef, useState } from 'react'

export interface BaseSlideProps {
  img: string
  darken?: true
  className?: string
}

export function BaseSldie({
  className,
  children,
  darken,
  img,
}: PropsWithChildren<BaseSlideProps>) {
  const [dir, setDirection] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  // const inCenter = useInView(ref, { amount: 'all' })

  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${img})`,
  }

  const { scrollYProgress } = useScroll()
  const dsy = useVelocity(scrollYProgress)
  useMotionValueEvent(dsy, 'change', (d) => {
    if (d > 0) setDirection(1)
    else if (d < 0) setDirection(-1)
    else setDirection(0)
  })

  return (
    <section ref={ref} className={cn('min-h-screen snap-center', className)}>
      <AnimatePresence>
        {inView ? (
          <>
            <motion.div
              className={cn(
                'fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat'
              )}
              style={bgImgStyle}
              initial={{ y: dir * 500, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div
                className={darken ? 'size-full bg-[url(/bg-pattern.png)]' : ''}
              >
                {children}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export function SlideHero({
  className,
  children,
  darken,
  img,
}: PropsWithChildren<BaseSlideProps>) {
  // useView
  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${img})`,
  }
  return (
    <section className={cn('min-h-screen snap-center', className)}>
      <div
        className={cn(
          'fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat'
        )}
        style={bgImgStyle}
      >
        {img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={img}
            alt=""
            width={1600}
            height={900}
            className="absolute inset-0 -z-1 h-screen w-screen object-cover"
            loading="eager"
          />
        ) : null}
        <div className={darken ? 'size-full bg-[url(/bg-pattern.png)]' : ''}>
          {children}
        </div>
      </div>
    </section>
  )
}

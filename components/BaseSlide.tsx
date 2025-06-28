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
  img?: string
}

export default function BaseSldie({
  children,
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
    <section ref={ref} className="min-h-screen snap-center">
      <AnimatePresence>
        {inView ? (
          <>
            <motion.div
              className="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={bgImgStyle}
              initial={{ y: dir * 500, opacity: 0, backgroundSize: '120%' }}
              animate={{ y: 0, opacity: 1, backgroundSize: '120%' }}
              exit={{ opacity: 0, backgroundSize: '100%' }}
              transition={{ duration: 1 }}
            >
              {children}
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

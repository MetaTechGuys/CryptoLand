'use client'
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

interface SlideProps {
  title: string
  img: string
  className?: string
}

export default function ContentSlide({
  title,
  img,
  children,
  className,
}: PropsWithChildren<SlideProps>) {
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
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={bgImgStyle}
            initial={{ y: dir * 500, opacity: 0, scale: 1.2 }}
            animate={{ y: 0, opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {children ?? (
              <div
                className={cn(
                  'prose m-8 bg-pink-50/70 p-8 md:mx-16 lg:mx-32',
                  className
                )}
              >
                <h1 className="font-serif capitalize">{title}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus suscipit, magni et officiis omnis excepturi at
                  laborum soluta voluptatibus obcaecati eum fuga ea assumenda?
                  Voluptatum sequi soluta ea et? Asperiores ipsa quisquam
                  dolores inventore delectus quibusdam dolor cumque consectetur
                  tenetur, quas libero! Minus, voluptates ratione cum earum
                  dicta eum qui.
                </p>
              </div>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

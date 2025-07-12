'use client'
import { IBlogPost } from '@/data/blogs'
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
  blog: IBlogPost
  className?: string
  innerClassName?: string
}

export default function BlogSlide({
  blog,
  className,
  innerClassName,
}: PropsWithChildren<SlideProps>) {
  const [dir, setDirection] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { amount: 0.1 })
  // const inCenter = useInView(ref, { amount: 'all' })

  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${blog.image.src})`,
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
            className={cn(
              'fixed inset-0 flex items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat sm:p-2 md:p-8',
              className
            )}
            style={bgImgStyle}
            initial={{ y: dir > 0 ? '100vh' : '-100vh' }}
            animate={{
              y: 0,
              transition: { duration: 1, ease: 'linear', delay: 0.1 },
            }}
            exit={{
              y: dir > 0 ? '-100vh' : '100vh',
              transition: { duration: 1, ease: 'linear' },
            }}
          >
            <div
              className={cn(
                'prose-mdx prose-invert h-screen max-h-screen overflow-auto bg-slate-800/70 p-8 py-36 sm:h-auto sm:py-8 md:mt-24 md:max-h-2/3 md:p-8',
                blog.className,
                innerClassName
              )}
            >
              {blog.content}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}

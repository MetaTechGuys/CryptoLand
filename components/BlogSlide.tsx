'use client'
import { IBlogPost } from '@/data/blogs'
import { cn } from '@/utils/tailwind'
import { motion } from 'motion/react'
import { CSSProperties, PropsWithChildren } from 'react'

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
  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${blog.image.src})`,
  }
  return (
    <section className="h-screen w-screen snap-center">
      <motion.div
        className={cn(
          'fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat',
          className
        )}
        style={bgImgStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className={cn(
            'prose-mdx max-h-screen overflow-auto bg-pink-50/70 p-8 py-48 md:mt-24 md:max-h-2/3 md:p-8',
            blog.className,
            innerClassName
          )}
        >
          {blog.content}
        </motion.div>
      </motion.div>
    </section>
  )
}

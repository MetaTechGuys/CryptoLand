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
    <motion.div
      className={cn(
        'fixed inset-0 z-10 flex items-center justify-center bg-cover bg-center bg-no-repeat',
        className
      )}
      style={bgImgStyle}
      initial={{ x: '50vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '50vw', opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="scroll-lock" />
      <motion.div
        className={cn(
          'prose-mdx m-16 max-h-2/3 overflow-auto bg-pink-50/70 p-8',
          blog.className,
          innerClassName
        )}
      >
        {blog.content}
      </motion.div>
    </motion.div>
  )
}

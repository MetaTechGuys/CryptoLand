'use client'
import { cn } from '@/utils/tailwind'
import { motion } from 'motion/react'
import { CSSProperties, PropsWithChildren } from 'react'

interface SlideProps {
  title: string
  img: string
  className?: string
}

export default function ContentSlideVert({
  title,
  img,
  children,
  className,
}: PropsWithChildren<SlideProps>) {
  const bgImgStyle: CSSProperties = {
    backgroundImage: `url(${img})`,
  }
  return (
    <motion.div
      className={cn(
        'fixed inset-0 flex items-center justify-center bg-cover bg-center bg-no-repeat',
        className
      )}
      style={bgImgStyle}
      initial={{ x: '50vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '50vw', opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div className={cn('prose m-16 bg-pink-50/70 p-8')}>
        <h1 className="font-serif capitalize">{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          suscipit, magni et officiis omnis excepturi at laborum soluta
          voluptatibus obcaecati eum fuga ea assumenda? Voluptatum sequi soluta
          ea et? Asperiores ipsa quisquam dolores inventore delectus quibusdam
          dolor cumque consectetur tenetur, quas libero! Minus, voluptates
          ratione cum earum dicta eum qui.
        </p>
        {children}
      </motion.div>
    </motion.div>
  )
}

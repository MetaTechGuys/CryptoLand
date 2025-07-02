'use client'

import { motion } from 'motion/react'
import Icon from './icon/Icon'

interface BackEdgeProps {
  name?: string
}
export function BackEdge({ name }: BackEdgeProps) {
  return (
    <motion.div
      className="cus-hv-center fixed inset-0 left-auto z-20 cursor-pointer gap-1 px-2 mix-blend-difference"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: -5, transition: { duration: 0.6, delay: 1 } }}
      whileHover={{
        scale: 1.05,
      }}
    >
      <Icon name="chevrons-right" className="size-5" />
      <div className="text-up-down text-sm uppercase">go back to {name}</div>
    </motion.div>
  )
}

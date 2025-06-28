'use client'

import { motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime'
// import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context'
import { usePathname } from 'next/navigation'
import { useContext, useRef } from 'react'

function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {})
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  )
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 100 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  // The `key` is tied to the url using the `usePathname` hook.
  const key = usePathname()

  return (
    <motion.div
      key={key}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      className="overflow-hidden"
    >
      <FrozenRouter>{children}</FrozenRouter>
    </motion.div>
  )
}

export default PageTransitionEffect

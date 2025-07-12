'use client'
import {
  PropsWithChildren,
  startTransition,
  unstable_addTransitionType as addTransitionType,
  unstable_ViewTransition as ViewTransition,
} from 'react'
import { useScrollNav } from '@/utils/scroll'
import { useRouter } from 'next/navigation'

type Animations = 'roll' | 'slide' | 'scroll'

interface PageTransitionProps {
  top?: `/${string}`
  bottom?: `/${string}`
  type?: Animations
}

export function PageTransition({
  type = 'scroll',
  children,
  bottom,
  top,
}: PropsWithChildren<PageTransitionProps>) {
  const router = useRouter()

  useScrollNav({
    onNavTop: () => {
      startTransition(() => {
        addTransitionType('page-up')
        if (top) router.push(top)
      })
    },
    onNavBottom: () => {
      startTransition(() => {
        addTransitionType('page-down')
        if (bottom) router.push(bottom)
      })
    },
  })
  return (
    <div className="my-4 h-screen snap-center snap-always">
      <ViewTransition
        name="page"
        default={{
          default: '',
          'page-up': `${type}-down`,
          'page-down': `${type}-up`,
        }}
      >
        <div className="h-screen overflow-auto overflow-x-clip">{children}</div>
      </ViewTransition>
    </div>
  )
}

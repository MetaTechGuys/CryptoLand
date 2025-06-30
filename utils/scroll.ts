'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { throttle } from 'es-toolkit'

const margin = 16

export function useScrollNav({
  onNavTop,
  onNavBottom,
}: {
  onNavTop?: VoidFunction
  onNavBottom?: VoidFunction
}) {
  const lastKnownScrollPosition = useRef(margin)
  const [monted, setMounted] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setMounted(true)
    }, 700)
  }, [])

  const onScrollEnd = useCallback(
    throttle(
      (dir: 't' | 'b') => {
        if (dir == 't') {
          onNavTop?.()
        } else {
          onNavBottom?.()
        }
      },
      700,
      { edges: ['leading'] }
    ),
    []
  )
  useEffect(() => {
    function onScroll(this: Document) {
      const cp = this.documentElement.scrollTop || this.body.scrollTop,
        ah = window.screen.availHeight,
        dh = this.body.clientHeight,
        bottomMargin = dh - ah + margin,
        pp = lastKnownScrollPosition.current,
        isTop = cp < pp && cp < margin,
        isBottom = cp > pp && cp > bottomMargin

      // console.log('scccc', cp, { isTop, isBottom })

      if (monted) {
        if (isBottom) onScrollEnd('b')
        else if (isTop) onScrollEnd('t')
        lastKnownScrollPosition.current = cp
      }
      // else {
      //   if (cp === mp) setMounted(true)
      // }
    }
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [monted, onScrollEnd])
}

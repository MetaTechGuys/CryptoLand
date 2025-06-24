'use client'
import { useCallback, useEffect, useState } from 'react'

export const useHash = () => {
  const g = typeof window !== 'undefined' ? window : undefined
  const [hash, setHash] = useState(g?.location.hash ?? '')

  const hashChangeHandler = useCallback(() => {
    if (g) {
      setHash(g.location.hash)
    }
  }, [g])

  useEffect(() => {
    g?.addEventListener('hashchange', hashChangeHandler)
    return () => {
      g?.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [hashChangeHandler, g])

  return hash
}

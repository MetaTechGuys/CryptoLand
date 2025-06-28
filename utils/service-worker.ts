'use client'

import { useEffect, useState } from 'react'

let registration: ServiceWorkerRegistration

interface PWACoreProp {
  worker?: boolean
}

export default function PWACore({ worker = true }: PWACoreProp) {
  useEffect(() => {
    if (worker && 'serviceWorker' in navigator && 'PushManager' in window) {
      registerServiceWorker()
    }
  }, [worker])

  async function registerServiceWorker() {
    function listenForWaitingServiceWorker(reg: ServiceWorkerRegistration) {
      function awaitStateChange() {
        if (reg.installing)
          reg.installing.addEventListener('statechange', function () {
            if (this.state === 'installed') {
              if (reg.waiting) {
                reg.waiting.postMessage('skipWaiting')
              }
              return
            }
          })
      }
      if (!reg) return
      if (reg.waiting) {
        reg.waiting.postMessage('skipWaiting')
        return
      }
      if (reg.installing) awaitStateChange()
      reg.addEventListener('updatefound', awaitStateChange)
    }

    // reload once when the new Service Worker starts activating
    let refreshing = false
    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (refreshing) return
      refreshing = true
      window.location.reload()
    })

    registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
      updateViaCache: 'none',
    })

    listenForWaitingServiceWorker(registration)
  }
  return null
}

export function useSWReg() {
  return registration
}

export function useCacheProgress() {
  const [total, setTotal] = useState(0)
  const [done, setDone] = useState(0)
  useEffect(() => {
    if (!navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data.type === 'PRECACHE') {
          setTotal(event.data.totalURLs)
          setDone(event.data.urlsCached)
        }
      })
    }
  }, [done, total])
  return { total, done, progress: (done * 100) / (total || 1) }
}

const PRECACHE_NAME = 'cryptoland-cache'
const URLS_TO_PRECACHE = [
  '/Dubai-Investments-unveils-Dh1b-project-in-Ras-Al-Khaimah.png',
  '/Oystra_Al_Marjan_Island_by_Zaha_Hadid.webp',
  '/Oystra_Al_Marjan_Island_by_Zaha_Hadid_2.webp',
  '/Oystra-Residences-1.jpg',
  '/Oystra-Residences-10.jpg',
]

async function notifyClients(urlsCached, totalURLs) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true })
  for (const client of clients) {
    client.postMessage({ urlsCached, totalURLs, type: 'PRECACHE' })
  }
}

async function cacheUrls() {
  const cache = await caches.open(PRECACHE_NAME)
  const totalURLs = URLS_TO_PRECACHE.length
  let urlsCached = 0

  for (const urlToPrecache of URLS_TO_PRECACHE) {
    await cache.add(urlToPrecache)
    urlsCached++
    await notifyClients(urlsCached, totalURLs)
  }
  // await cache.addAll(resources)
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheUrls())
})

addEventListener('message', (messageEvent) => {
  if (messageEvent.data === 'skipWaiting') return skipWaiting()
})

self.addEventListener('fetch', async (event) => {
  event.respondWith(
    (async () => {
      if (
        event.request.mode === 'navigate' &&
        event.request.method === 'GET' &&
        registration.waiting &&
        (await clients.matchAll()).length < 2
      ) {
        registration.waiting.postMessage('skipWaiting')
        return new Response('', { headers: { Refresh: '0' } })
      }
      const resp = await caches.match(event.request)
      return resp ?? fetch(event.request)
    })()
  )
})

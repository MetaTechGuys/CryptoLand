'use client'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'
// import { LensflarePlugin } from 'photo-sphere-viewer-lensflare-plugin'
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin'
import { OverlaysPlugin } from '@photo-sphere-viewer/overlays-plugin'
import { VisibleRangePlugin } from '@photo-sphere-viewer/visible-range-plugin'

import Icon from '@/components/icon/Icon'
import '@/components/web-components/custom-marker'
import { SelectMarkerEvent, VTourData } from '@/data/tours'
import { Viewer } from '@photo-sphere-viewer/core'
import '@photo-sphere-viewer/markers-plugin/index.css'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation'
import { ComponentProps, useCallback, useMemo, useRef, useState } from 'react'

import { unstable_ViewTransition as ViewTransition } from 'react'

const OverlaysPluginConfig = {
  overlays: [
    {
      id: 'overlay',
      path: '/360/overlay.png',
    },
  ],
} as const

type PluginEntry = Required<
  ComponentProps<typeof ReactPhotoSphereViewer>
>['plugins'][number]

interface VTourClientProps {
  tour: VTourData
}

export default function VTourClient({ tour }: VTourClientProps) {
  const router = useRouter()
  const ref = useRef(null)
  // const [node, setNode] = useState('node-1')
  const plugins = useMemo<PluginEntry[]>(() => {
    const plugins: Array<PluginEntry | undefined> = [
      tour.visibleRange ? [VisibleRangePlugin, tour.visibleRange] : undefined,
      tour.overlay ? [OverlaysPlugin, OverlaysPluginConfig] : undefined,
      [
        MarkersPlugin,
        {
          markers: tour.markers,
        },
      ],
    ]
    return plugins.filter((p): p is PluginEntry => !!p)
  }, [tour])
  const handleReady = useCallback(
    (instance: Viewer) => {
      const markersPlugs = instance.getPlugin(MarkersPlugin)
      if (!markersPlugs) return
      markersPlugs.addEventListener(
        'select-marker',
        ({ marker }: SelectMarkerEvent) => {
          if (typeof marker.data?.uid !== 'undefined') {
            if (marker.config.position && ref.current) {
              // const markerPos = marker.config.position as SphericalPosition
              // console.log(
              //   'gggg',
              //   {
              //     pitch: +markerPos.pitch,
              //     yaw: +markerPos.yaw,
              //     zoom: 5,
              //     speed: 2500,
              //     easing: 'inOutQuad',
              //   },
              //   ref.current.animate
              // )
              // ref.current.animate({
              //   pitch: +markerPos.pitch,
              //   yaw: +markerPos.yaw,
              //   zoom: 5,
              //   speed: 2500,
              //   easing: 'inOutQuad',
              // })
            }
            router.push(`/360v/${marker.data.uid}`)
          }
        }
      )
    },
    [router]
  )
  const [showDetail, setShowDetail] = useState(tour.uid !== '')
  return (
    <ViewTransition name="page" default="auto">
      <ReactPhotoSphereViewer
        key={tour.uid}
        src={tour.panorama}
        ref={ref}
        plugins={plugins}
        caption={tour.title}
        defaultZoomLvl={0}
        // onClick={console.log.bind(console, '[click]')}
        height={'100vh'}
        width={'100%'}
        onReady={handleReady}
        navbar={[
          'zoomOut',
          'zoomRange',
          'zoomIn',
          'caption',
          'fullscreen',
          'markers',
          'markersList',
        ]}
        defaultPitch={tour.initialView?.pitch}
        defaultYaw={tour.initialView?.yaw}
      />
      <AnimatePresence>
        {showDetail ? (
          <motion.div
            className="prose prose-invert fixed inset-0 z-50 m-auto h-min bg-black/30 p-8 transition-opacity select-none"
            exit={{ opacity: 0, y: 100 }}
            transition={{ ease: 'backIn' }}
          >
            <h1 className="flex items-center justify-between">
              <span>{tour.title}</span>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setShowDetail(false)
                }}
              >
                <Icon className="size-10" name="dismiss" />
              </button>
            </h1>
            <p>{tour.description}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <button
        className="fixed start-4 top-4 z-50 cursor-pointer"
        onClick={() => {
          if (tour.uid === '') {
            router.push('/')
          } else {
            router.back()
          }
        }}
      >
        <Icon className="pointer-events-none size-10" name="arrow-back" />
      </button>
    </ViewTransition>
  )
}

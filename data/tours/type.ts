import { SphericalPosition } from '@photo-sphere-viewer/core'
import { events, MarkerConfig } from '@photo-sphere-viewer/markers-plugin'

type ITourID = '' | `tour-gym` | `tour-meeting`

export interface ITourLink {
  id: ITourID
  position: SphericalPosition
  title?: string
}

export interface ITourtips {
  id: string
  title: string
  description: string
}

export interface ITourLinkData extends ITourLink {
  data: ITourData
}

export type ITourtip = Pick<
  MarkerConfig,
  'position' | 'tooltip' | 'listContent'
>

export interface ITourData {
  uid: ITourID
  title: string
  description: string
  thumbnail: string
  panorama: string
  links?: ITourLink[]
  tooltips?: ITourtip[]
  markers?: MarkerConfig[]
  overlay?: true
  visibleRange?: {
    horizontalRange: [number, number]
    verticalRange: [number, number]
  }
  initialView?: SphericalPosition
}

export interface VTourData extends ITourData {
  markers: MarkerConfig[]
}

export type SelectMarkerEvent = events.SelectMarkerEvent

import content from '../contents'
import featuresData from '../feature'
import { ITourData } from './type'
import { d2r } from './utils'

export const TourData: ITourData[] = [
  {
    uid: '',
    title: 'Cryptoland',
    description: content.home.slugan2,
    thumbnail: '/360/root-th.webp',
    panorama: '/360/root.webp',
    // overlay: true,
    links: [
      {
        id: 'tour-meeting',
        position: { pitch: d2r(10), yaw: d2r(45) },
      },
      {
        id: 'tour-gym',
        position: { pitch: d2r(-40), yaw: d2r(20) },
      },
    ],
    visibleRange: {
      horizontalRange: [-Math.PI / 2, Math.PI / 2],
      verticalRange: [-Math.PI / 3, Math.PI / 3],
    },
  },
  {
    uid: 'tour-meeting',
    title: featuresData[3].title,
    description: featuresData[3].description[0],
    thumbnail: '/360/meeting-room-th.png',
    panorama: '/360/meeting-room.webp',
    // overlay: true,
    links: [
      {
        id: '',
        title: 'Back',
        position: { yaw: d2r(-57), pitch: d2r(-9) },
      },
    ],
    tooltips: [
      {
        listContent: 'Video Projector',
        tooltip:
          'The most common type of projector used today is called a video projector. Video projectors are digital replacements for earlier types of projectors such as slide projectors and overhead projectors.',
        position: { yaw: d2r(-110), pitch: d2r(15) },
      },
      {
        listContent: 'About the wall',
        tooltip: 'Another tooltip here is telling about something on the wall',
        position: { yaw: d2r(135), pitch: d2r(0) },
      },
      {
        listContent: 'Locker',
        tooltip: 'Another tooltip is talking about the locker',
        position: { yaw: d2r(90), pitch: d2r(0) },
      },
    ],
    markers: [
      {
        id: 'videoLayer-1',
        videoLayer: '/videos/demo.webm',
        size: { width: 1300, height: 620 },
        position: { yaw: d2r(-16.5), pitch: d2r(1) },
        rotation: { yaw: d2r(2) },
        // pitch=x
        // yaw=y
        // roll=z
      },
    ],
    initialView: { yaw: d2r(-60), pitch: d2r(0) },
  },
  {
    uid: 'tour-gym',
    title: featuresData[0].title,
    description: featuresData[0].description[0],
    thumbnail: '/360/gym-th.png',
    panorama: '/360/gym.webp',
    // overlay: true,
    tooltips: [
      {
        listContent: 'Vending Machine',
        tooltip:
          'The earliest known reference to a vending machine is in the work of Hero of Alexandria, an engineer and mathematician in first-century Roman Egypt. His machine accepted a coin and then dispensed wine[2] or holy water.',
        position: { yaw: d2r(90), pitch: d2r(0) },
      },
      {
        listContent: 'Treadmills',
        tooltip:
          'More recently, treadmills have instead been used as exercise machines for running or walking in one place. Rather than the user powering a mill, the device provides a moving platform with a wide conveyor belt driven by an electric motor or a flywheel',
        position: { yaw: d2r(-135), pitch: d2r(-22) },
      },
    ],
    links: [
      {
        id: '',
        title: 'Back',
        position: { yaw: d2r(-35), pitch: d2r(10) },
      },
    ],
    initialView: { yaw: d2r(-135), pitch: d2r(0) },
  },
]

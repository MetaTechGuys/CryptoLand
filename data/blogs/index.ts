import { StaticImageData } from 'next/image'

import Discover from './Discover.mdx'
import Discover1 from './Discover1.mdx'
import Discover2 from './Discover2.mdx'
import Discover3 from './Discover3.mdx'
import Discover4 from './Discover4.mdx'
import Discover5 from './Discover5.mdx'
import discoverImg from '@/public/design-of-oystra_7.webp'
import discoverImg1 from '@/public/design-of-oystra_1.webp'
import discoverImg2 from '@/public/design-of-oystra_6.webp'
import discoverImg3 from '@/public/design-of-oystra_3.webp'
import discoverImg4 from '@/public/design-of-oystra_4.webp'
import discoverImg5 from '@/public/design-of-oystra_5.webp'

import Cryptoland from './Cryptoland.mdx'
import img2 from '@/public/design-of-oystra_3.webp'

// import Book from './Book.mdx'

// import Living from './Living.mdx'
// import img5 from '@/public/design-of-oystra_1.webp'

import Vision from './Vision.mdx'
import Vision1 from './Vision1.mdx'
import img3 from '@/public/design-of-oystra_5.webp'
import img32 from '@/public/oystra-3.webp'

import { createElement, ReactNode } from 'react'

export interface IBlogPost {
  key: string
  title: string
  content: ReactNode
  image: StaticImageData
  className?: string
  more?: IBlogPost[]
}

const discover: IBlogPost = {
  key: 'discover',
  title: 'Discover',
  content: createElement(Discover),
  image: discoverImg,
  more: [
    {
      key: 'discover-digital-city',
      title: 'Digital City',
      content: createElement(Discover1),
      image: discoverImg2,
    },
    {
      key: 'discover-center',
      title: 'Digital City',
      content: createElement(Discover2),
      image: discoverImg3,
    },
    {
      key: 'discover-metaverse',
      title: 'Digital City',
      content: createElement(Discover3),
      image: discoverImg1,
    },
    {
      key: 'discover-tokenized-village',
      title: 'Digital City',
      content: createElement(Discover4),
      image: discoverImg4,
    },
    {
      key: 'discover-conclusion',
      title: 'Digital City',
      content: createElement(Discover5),
      image: discoverImg5,
    },
  ],
}

const cryptoland: IBlogPost = {
  key: 'cryptoland',
  title: 'Why Cryptoland ?',
  content: createElement(Cryptoland),
  image: img2,
}

const vision: IBlogPost = {
  key: 'vision',
  title: 'Project Vision',
  content: createElement(Vision),
  image: img3,
  more: [
    {
      key: 'vision-key-features',
      title: 'Key Features of the Project',
      content: createElement(Vision1),
      image: img32,
    },
  ],
}

const blogsData: IBlogPost[] = [cryptoland, vision, discover]

export default blogsData

import { StaticImageData } from 'next/image'

import Discover from './Discover.mdx'
import Discover1 from './Discover1.mdx'
import Discover2 from './Discover2.mdx'
import Discover3 from './Discover3.mdx'
import Discover4 from './Discover4.mdx'
import Discover5 from './Discover5.mdx'
import discoverImg from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_7.jpg'
import discoverImg1 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_1.jpg'
import discoverImg2 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_6.jpg'
import discoverImg4 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_4.jpg'
import discoverImg5 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_5.jpg'

import Cryptoland from './Cryptoland.mdx'
import img2 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_3.jpg'

// import Book from './Book.mdx'

// import Living from './Living.mdx'
// import img5 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_1.jpg'

import Vision from './Vision.mdx'
import img3 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_5.jpg'

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
      image: discoverImg2,
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
}

const blogsData: IBlogPost[] = [cryptoland, vision, discover]

export default blogsData

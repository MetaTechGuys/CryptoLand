import { StaticImageData } from 'next/image'

import Discover from './Discover.mdx'
import img1 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_7.jpg'

import Cryptoland from './Cryptoland.mdx'
import img2 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_3.jpg'

import Revolution from './Revolution.mdx'
import img3 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_4.jpg'

import Book from './Book.mdx'
import img4 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_6.jpg'

import Living from './Living.mdx'
import img5 from '@/public/zaha-hadid-architects-unveils-design-of-oystra-mixed-use-development-in-the-united-arab-emirates_1.jpg'

import { createElement, ReactNode } from 'react'

export interface IBlogPost {
  key: string
  title: string
  content: ReactNode
  image: StaticImageData
  className?: string
}

const blogsData = [
  {
    key: 'discover',
    title: 'Discover a Unique Crypto-Powered Experience',
    content: createElement(Discover),
    image: img1,
  },
  {
    key: 'cryptoland',
    title: 'Why Choose Cryptoland?',
    content: createElement(Cryptoland),
    image: img2,
  },
  {
    key: 'revolution',
    title: 'Join the Crypto Revolution',
    content: createElement(Revolution),
    image: img3,
  },
  {
    key: 'book',
    title: 'Book Your Stay Today!',
    content: createElement(Book),
    image: img4,
  },
  {
    key: 'living',
    title: 'Where Cryptocurrency Meets Luxury Living',
    content: createElement(Living),
    image: img5,
  },
] satisfies IBlogPost[]

export default blogsData

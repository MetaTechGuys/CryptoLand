import { BackEdge } from '@/components/BackEdge'
import BlogSlide from '@/components/BlogSlide'
import { IBlogPost } from '@/data/blogs'
import Link from 'next/link'

import About from '@/data/blogs/About.mdx'
import img0 from '@/public/backgrounds/background-3.png'
import { createElement } from 'react'

const aboutBlogPost: IBlogPost = {
  key: 'about',
  title: 'About the Project',
  content: createElement(About),
  image: img0,
}

export default async function BlogPage() {
  return (
    <>
      <BlogSlide blog={aboutBlogPost} />
      <Link href="/" className="contents">
        <BackEdge name="home" />
      </Link>
    </>
  )
}

import { PagePropsWithParams } from '@/utils/next'
import BlogPageClient from './client'
import blogsData from '@/data/blogs'
import { notFound } from 'next/navigation'
import BlogSlide from '@/components/BlogSlide'

export default async function BlogLayout({
  params,
}: PagePropsWithParams<'slug'>) {
  const { slug } = await params
  const post = blogsData.find((bd) => bd.key === slug)
  if (!post) {
    notFound()
  }
  return <BlogSlide blog={post} />
}

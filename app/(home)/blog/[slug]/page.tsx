import BlogSlide from '@/components/BlogSlide'
import blogsData from '@/data/blogs'
import { PagePropsWithParams } from '@/utils/next'
import { notFound } from 'next/navigation'

export default async function BlogPage({
  params,
}: PagePropsWithParams<'slug'>) {
  const { slug } = await params
  const post = blogsData.find((bd) => bd.key === slug)
  if (!post) {
    notFound()
  }

  return <BlogSlide blog={post} />
}

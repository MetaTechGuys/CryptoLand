import { BackEdge } from '@/components/BackEdge'
import BlogSlide from '@/components/BlogSlide'
import LastSlide from '@/components/layout/LastSlide'
import blogsData from '@/data/blogs'
import { PagePropsWithParams } from '@/utils/next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function BlogPage({
  params,
}: PagePropsWithParams<'slug'>) {
  const { slug } = await params
  const post = blogsData.find((bd) => bd.key === slug)
  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogSlide blog={post} />
      {post.more?.map((p) => <BlogSlide key={p.key} blog={p} />)}
      <LastSlide />
      <Link href="/" className="contents">
        <BackEdge name="home" />
      </Link>
      {/* {post.next ? null : } */}
    </>
  )
}

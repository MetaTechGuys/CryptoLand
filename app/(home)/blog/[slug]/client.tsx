'use client'
import { IBlogPost } from '@/data/blogs'

interface BlogPageClientProps {
  post: IBlogPost
}

export default function BlogPageClient({ post }: BlogPageClientProps) {
  return <div>{post.title}</div>
}

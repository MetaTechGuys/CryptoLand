import { PropsWithChildren } from 'react'
import { unstable_ViewTransition as ViewTransition } from 'react'

export default function BlogLayout({ children }: Readonly<PropsWithChildren>) {
  return <ViewTransition default="roll-in">{children}</ViewTransition>
}

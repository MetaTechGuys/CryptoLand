'use client'

import { cn } from '@/utils/tailwind'
import { ComponentProps, useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    document.body.style.backgroundColor = 'white'
  }, [])
  return (
    <div className="pt-16">
      <div className="text-center text-black uppercase">slate</div>
      <ProseTypo className="prose-slate" />
      <div className="text-center text-black uppercase">gray</div>
      <ProseTypo className="prose-gray" />
      <div className="text-center text-black uppercase">zinc</div>
      <ProseTypo className="prose-zinc" />
      <div className="text-center text-black uppercase">neutral</div>
      <ProseTypo className="prose-neutral" />
      <div className="text-center text-black uppercase">stone</div>
      <ProseTypo className="prose-stone" />
    </div>
  )
}

function ProseTypo({ className }: ComponentProps<'div'>) {
  return (
    <>
      <div
        className={cn(
          'prose grid max-w-full grid-cols-2 gap-4 bg-white',
          className
        )}
      >
        <div className="bg-foreground">
          <div className="">{content}</div>
        </div>
        <div className="bg-background prose-invert">
          <div className="">{content}</div>
        </div>
      </div>
    </>
  )
}

const content = (
  <div className="p-8">
    <h1>Lorem ipsum dolor sit.</h1>
    <div className="lead">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, facere.
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, itaque
      dicta nulla molestiae quia cum nisi vel optio porro id! Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Dolor, itaque dicta nulla molestiae
      quia cum nisi vel optio porro id!
    </p>
  </div>
)

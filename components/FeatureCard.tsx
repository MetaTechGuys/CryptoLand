import { IFeature } from '@/data/feature'
import { cn } from '@/utils/tailwind'
import { unstable_ViewTransition as ViewTransition } from 'react'
import GlareHover from './bits/GlareHover'
import GlbObject from './fibers/GlbObject'
import RichCanvas from './fibers/RichCanvas'
import { ResponsiveHelper } from './ResponsiveHelper'

interface FeatureCardProps {
  className?: string
  feature: IFeature
  clickible?: true
}

export function FeatureCard({ className, feature }: FeatureCardProps) {
  return (
    <ViewTransition name={`feature-${feature.id}-root`} default="delay-3">
      <GlareHover
        playOnce
        className={cn(
          'glass group @container min-h-fit overflow-clip rounded-2xl bg-slate-50/10 hover:bg-slate-50/60',
          'perspective-midrange',
          'cursor-pointer transition-all duration-100',
          className,
          feature.className
        )}
      >
        <div className="relative z-10 grid size-full auto-rows-min grid-cols-1 grid-rows-1 gap-4 p-8">
          <div className="prose-mdx not-group-hover:prose-invert relative max-w-full">
            <ResponsiveHelper container />
            <h1 className="block truncate font-serif text-3xl">
              {feature.title}
            </h1>
            <div className="lead truncate">{feature.lead}</div>
            <p className="line-clamp-4 @lg:w-1/2">{feature.description[0]} </p>
            <a className="absolute right-0 -bottom-2 text-xs italic opacity-50">
              Readmore
            </a>
          </div>
        </div>
        <ViewTransition
          name={`feature-${feature.id}-image`}
          default="duration-9 delay-3"
        >
          <div className="cus-hv-center absolute right-0 bottom-0 -z-10 size-full @lg:w-1/2">
            {feature.model ? (
              <div className="size-50 opacity-30 transition duration-500 ease-in-out @lg:size-60 pointer-fine:scale-75 pointer-fine:opacity-0 pointer-fine:group-hover:scale-100 pointer-fine:@max-md:group-hover:opacity-50 pointer-fine:@md:opacity-50 pointer-fine:@md:group-hover:opacity-100">
                <RichCanvas className="size-50 translate-8">
                  <GlbObject {...feature.model} />
                </RichCanvas>
              </div>
            ) : null}
          </div>
        </ViewTransition>
      </GlareHover>
    </ViewTransition>
  )
}

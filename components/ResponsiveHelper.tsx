import { cn } from '@/utils/tailwind'

interface ResponsiveHelperProps {
  container?: true
  className?: string
}

export function ResponsiveHelper({
  container,
  className,
}: ResponsiveHelperProps) {
  return process.env.NODE_ENV === 'development' ? (
    container ? (
      <ContainerResponsiveHelper className={className} />
    ) : (
      <MediaResponsiveHelper className={className} />
    )
  ) : null
}

function MediaResponsiveHelper({ className }: ResponsiveHelperProps) {
  return (
    <div
      className={cn(
        'fixed start-0 top-0 z-50 size-8 rounded-bl-xl text-center text-sm',
        className
      )}
    >
      <span className="2xs:hidden p-1">base</span>
      <span className="2xs:block xs:hidden hidden p-1">xxs</span>
      <span className="xs:block hidden p-1 sm:hidden">xs</span>
      <span className="hidden p-1 sm:block md:hidden">sm</span>
      <span className="hidden p-1 md:block lg:hidden">md</span>
      <span className="hidden p-1 lg:block xl:hidden">lg</span>
      <span className="hidden p-1 xl:block 2xl:hidden">xl</span>
      <span className="hidden p-1 2xl:block">2xl</span>
    </div>
  )
}

function ContainerResponsiveHelper({ className }: ResponsiveHelperProps) {
  return (
    <div
      className={cn(
        'fixed start-0 top-0 z-50 size-8 rounded-bl-xl text-center text-sm',
        className
      )}
    >
      <span className="p-1 @2xs:hidden">base</span>
      <span className="hidden p-1 @2xs:block @xs:hidden">xxs</span>
      <span className="hidden p-1 @xs:block @sm:hidden">xs</span>
      <span className="hidden p-1 @sm:block @md:hidden">sm</span>
      <span className="hidden p-1 @md:block @lg:hidden">md</span>
      <span className="hidden p-1 @lg:block @xl:hidden">lg</span>
      <span className="hidden p-1 @xl:block @2xl:hidden">xl</span>
      <span className="hidden p-1 @2xl:block">2xl</span>
    </div>
  )
}

import clsx from 'clsx'
import React, { forwardRef, ReactNode } from 'react'
import IcoMoon from 'react-icomoon'
import { twMerge } from 'tailwind-merge'
import type { IconNames } from './icon'
import iconSet from './selection.json'

export type IconProps = React.HTMLAttributes<SVGElement> & {
  name: IconNames
}

const Icon = forwardRef<SVGElement, IconProps>(
  ({ color, className, name, ...props }, ref): ReactNode => {
    const classes = twMerge(
      'icon',
      clsx({
        [`icon-${color}`]: color,
      }),
      className
    )

    return (
      <IcoMoon
        {...props}
        className={classes}
        ref={ref}
        iconSet={iconSet}
        icon={name}
      />
    )
  }
)

Icon.displayName = 'Icon'

export default Icon

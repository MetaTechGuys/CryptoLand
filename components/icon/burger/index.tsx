import { cn } from '@/utils/tailwind'
import './burger-icon.css'

interface BurgerIconProps {
  active?: boolean
  className?: string
  menu?: boolean
}

/**
 * @ref: https://codepen.io/ainalem/pen/LJYRxz
 */
export default function BurgerIcon({
  active,
  className,
  menu,
}: BurgerIconProps) {
  return (
    <svg
      className={cn(
        'ham',
        { active },
        menu ? 'ham-close' : 'ham-back',
        className
      )}
      viewBox="0 0 100 100"
    >
      {menu ? (
        <g>
          <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
          />
          <path className="line middle" d="m 70,50 h -40" />
          <path
            className="line bottom"
            d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
          />
        </g>
      ) : (
        <g className="origin-center rotate-180">
          <path
            className="line top"
            d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
          />
        </g>
      )}
    </svg>
  )
}

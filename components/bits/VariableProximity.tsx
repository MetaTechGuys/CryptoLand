import { motion } from 'motion/react'
import {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
} from 'react'

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    let frameId: number
    const loop = () => {
      callback()
      frameId = requestAnimationFrame(loop)
    }
    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [callback])
}

function useMousePositionRef(
  containerRef: MutableRefObject<HTMLElement | null>
) {
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        positionRef.current = { x: x - rect.left, y: y - rect.top }
      } else {
        positionRef.current = { x, y }
      }
    }

    const handleMouseMove = (ev: MouseEvent) =>
      updatePosition(ev.clientX, ev.clientY)
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0]
      updatePosition(touch.clientX, touch.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [containerRef])

  return positionRef
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string
  fromFontVariationSettings: string
  toFontVariationSettings: string
  containerRef: MutableRefObject<HTMLElement | null>
  radius?: number
  falloff?: 'linear' | 'exponential' | 'gaussian'
  className?: string
  onClick?: () => void
  style?: CSSProperties
  initialShow?: true
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
  (props, ref) => {
    const {
      label,
      fromFontVariationSettings,
      toFontVariationSettings,
      containerRef,
      radius = 50,
      falloff = 'linear',
      className = '',
      onClick,
      style,
      initialShow,
      ...restProps
    } = props

    const initialAnimate = useRef(!!initialShow)
    const initialAnimateProgress = useRef(-2500)
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
    const interpolatedSettingsRef = useRef<string[]>([])
    const mousePositionRef = useMousePositionRef(containerRef)
    const lastPositionRef = useRef<{ x: number | null; y: number | null }>({
      x: null,
      y: null,
    })

    const parsedSettings = useMemo(() => {
      const parseSettings = (settingsStr: string) =>
        new Map(
          settingsStr
            .split(',')
            .map((s) => s.trim())
            .map((s) => {
              const [name, value] = s.split(' ')
              return [name.replace(/['"]/g, ''), parseFloat(value)]
            })
        )

      const fromSettings = parseSettings(fromFontVariationSettings)
      const toSettings = parseSettings(toFontVariationSettings)

      return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
        axis,
        fromValue,
        toValue: toSettings.get(axis) ?? fromValue,
      }))
    }, [fromFontVariationSettings, toFontVariationSettings])

    const calculateDistance = (
      x1: number,
      y1: number,
      x2: number,
      y2: number
    ) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    const calculateProgress = (x1: number, x2: number) => Math.abs(x2 - x1)

    const calculateFalloff = (distance: number) => {
      const norm = Math.min(Math.max(1 - distance / radius, 0), 1)
      switch (falloff) {
        case 'exponential':
          return norm ** 2
        case 'gaussian':
          return Math.exp(-((distance / (radius / 2)) ** 2) / 2)
        case 'linear':
        default:
          return norm
      }
    }

    useAnimationFrame(() => {
      if (!containerRef?.current) return

      const x = mousePositionRef.current.x
      const y = mousePositionRef.current.y
      if (
        !initialAnimate.current &&
        lastPositionRef.current.x === x &&
        lastPositionRef.current.y === y
      ) {
        return
      }
      lastPositionRef.current = { x, y }
      const containerRect = containerRef.current.getBoundingClientRect()

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return

        const rect = letterRef.getBoundingClientRect()
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top

        const distance = initialAnimate.current
          ? calculateProgress(initialAnimateProgress.current, letterCenterX)
          : calculateDistance(
              mousePositionRef.current.x,
              mousePositionRef.current.y,
              letterCenterX,
              letterCenterY
            )

        if (distance >= radius) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings
          return
        }

        const falloffValue = calculateFalloff(distance)
        const newSettings = parsedSettings
          .map(({ axis, fromValue, toValue }) => {
            const interpolatedValue =
              fromValue + (toValue - fromValue) * falloffValue
            return `'${axis}' ${interpolatedValue}`
          })
          .join(', ')

        interpolatedSettingsRef.current[index] = newSettings
        letterRef.style.fontVariationSettings = newSettings
      })

      if (initialAnimate.current) {
        initialAnimateProgress.current += 20
        if (initialAnimateProgress.current > containerRect.width + 2000) {
          initialAnimate.current = false
        }
        console.log('initial animate', initialAnimateProgress.current)
      }
    })

    const words = label.split(' ')
    let letterIndex = 0

    return (
      <span
        ref={ref}
        onClick={onClick}
        style={{
          display: 'inline',
          ...style,
        }}
        className={className}
        {...restProps}
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map((letter) => {
              const currentLetterIndex = letterIndex++
              return (
                <motion.span
                  key={currentLetterIndex}
                  ref={(el) => {
                    letterRefs.current[currentLetterIndex] = el
                  }}
                  style={{
                    display: 'inline-block',
                    fontVariationSettings:
                      interpolatedSettingsRef.current[currentLetterIndex],
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </motion.span>
              )
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    )
  }
)

VariableProximity.displayName = 'VariableProximity'
export default VariableProximity

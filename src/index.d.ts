import * as React from 'react'

export const TOP_MIN: number
export const DEFAULT_COLORS: Array<string>
export const DEFAULT_EXPLOSION_SPEED: number
export const DEFAULT_FALL_SPEED: number

interface Props {
  count: number
  origin: {
    x: number
    y: number
  }
  explosionSpeed?: number
  fallSpeed?: number
  colors?: Array<string>
  fadeOut?: boolean
  autoStart?: boolean
  autoStartDelay?: number
  onAnimationStart?: () => void
  onAnimationResume?: () => void
  onAnimationStop?: () => void
  onAnimationEnd?: () => void
  testID?: string
}

interface Explosion extends React.ClassicComponentClass<Props> {
  start(resume?: boolean): void
  resume(): void
  stop(): void
}

export default Explosion

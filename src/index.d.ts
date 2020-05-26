import * as React from 'react'

declare const TOP_MIN: number
declare const DEFAULT_COLORS: Array<string>
declare const DEFAULT_EXPLOSION_SPEED: number
declare const DEFAULT_FALL_SPEED: number

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

declare class Explosion extends React.PureComponent<Props> {
  start(resume?: boolean): void
  resume(): void
  stop(): void
}

export = Explosion

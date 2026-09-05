'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1]

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade'

function hiddenState(direction: Direction, reduceMotion: boolean) {
  if (reduceMotion) return { opacity: 0 }

  switch (direction) {
    case 'left':
      return { opacity: 0, x: -86, filter: 'blur(10px)' }
    case 'right':
      return { opacity: 0, x: 86, filter: 'blur(10px)' }
    case 'down':
      return { opacity: 0, y: -58, filter: 'blur(8px)' }
    case 'scale':
      return { opacity: 0, y: 24, scale: 0.92, filter: 'blur(8px)' }
    case 'fade':
      return { opacity: 0, filter: 'blur(8px)' }
    case 'up':
    default:
      return { opacity: 0, y: 58, filter: 'blur(8px)' }
  }
}

export function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.9,
  amount = 0.22,
  dir,
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  duration?: number
  amount?: number
  dir?: 'rtl' | 'ltr'
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      dir={dir}
      initial={hiddenState(direction, Boolean(reduceMotion))}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount, margin: '-8% 0px -8% 0px' }}
      transition={{ duration, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function FloatOnView({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, rotate: -2 }}
      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 1.15, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

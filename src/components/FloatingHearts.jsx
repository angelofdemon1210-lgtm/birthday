import React, { useMemo } from 'react'

/**
 * FloatingHearts
 * Continuously spawns soft pink hearts that drift upward and fade out.
 * `density` controls how many hearts are rendered (lower = more subtle).
 */
export default function FloatingHearts({ density = 14 }) {
  const hearts = useMemo(() => {
    return Array.from({ length: density }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 0.8 + Math.random() * 1.6,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 8,
    }))
  }, [density])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}rem`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  )
}

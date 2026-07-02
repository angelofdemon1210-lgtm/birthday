import React, { useEffect, useRef } from 'react'

/**
 * CursorGlow
 * A soft pink/gold glow that follows the user's cursor for a premium feel.
 * Hidden automatically on touch devices.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`
        glowRef.current.style.top = `${e.clientY}px`
        glowRef.current.style.opacity = '1'
      }
    }
    const hide = () => {
      if (glowRef.current) glowRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" style={{ opacity: 0 }} />
}

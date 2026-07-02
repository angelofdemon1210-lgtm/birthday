import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import FloatingHearts from './FloatingHearts'
import StarField from './StarField'

/**
 * GrandFinale — FINAL PAGE
 * Launches a confetti burst + ongoing fireworks-style bursts when this
 * section scrolls into view, layered with floating hearts and a glowing
 * "Replay Our Story" button that scrolls back to the top.
 */
export default function GrandFinale({ onReplay }) {
  const sectionRef = useRef(null)
  const hasFired = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasFired.current) {
            hasFired.current = true
            fireConfetti()
            fireworksLoop()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const fireConfetti = () => {
    const colors = ['#E8C275', '#F4B6C2', '#6B2B8C', '#F6E3B4']
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    })
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.7 },
      colors,
    })
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.7 },
      colors,
    })
  }

  // Gentle recurring "firework" bursts in the background
  const fireworksLoop = () => {
    const colors = ['#E8C275', '#F4B6C2', '#6B2B8C']
    let count = 0
    const interval = setInterval(() => {
      confetti({
        particleCount: 40,
        startVelocity: 25,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() * 0.4 },
        colors,
        scalar: 0.7,
      })
      count++
      if (count > 6) clearInterval(interval)
    }, 1200)
  }

  return (
    <section ref={sectionRef} className="section bg-velvet-gradient" id="finale">
      <StarField count={100} />
      <FloatingHearts density={24} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl shimmer-text font-bold leading-relaxed"
        >
          This isn't the end of our story.
          <br />
          It's only Chapter 22. ❤
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-script text-3xl sm:text-5xl text-blush-glow mt-8"
        >
          Forever with you.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={onReplay}
          className="btn-luxury mt-14"
        >
          Replay Our Story
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-body text-white/40 text-sm mt-16"
        >
          Made with endless love, for you. ❤
        </motion.p>
      </div>
    </section>
  )
}

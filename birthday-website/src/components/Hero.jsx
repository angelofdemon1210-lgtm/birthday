import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import StarField from './StarField'
import FloatingHearts from './FloatingHearts'

/**
 * Hero — PAGE 1
 * Full-screen cinematic opener:
 *  - Twinkling star field + floating hearts
 *  - Typewriter-animated headline
 *  - "Begin Our Journey" button that smooth-scrolls to the timeline
 */

const HEADLINE = 'Happy 22nd Birthday, My Love'
const SUBLINE = 'Every memory with you is my favorite story.'

export default function Hero({ scrollToNext }) {
  const [typed, setTyped] = useState('')
  const [showSubline, setShowSubline] = useState(false)

  // Typewriter effect for the headline
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setTyped(HEADLINE.slice(0, i + 1))
      i++
      if (i === HEADLINE.length) {
        clearInterval(interval)
        setTimeout(() => setShowSubline(true), 400)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section bg-velvet-gradient" id="hero">
      <StarField count={120} />
      <FloatingHearts density={16} />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Chapter label */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display tracking-[0.4em] text-sm sm:text-base text-blush uppercase mb-6"
        >
          Chapter 22 &middot; Our Beautiful Journey
        </motion.span>

        {/* Typewriter headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-tight shimmer-text font-bold min-h-[3.5em] sm:min-h-[2.4em]">
          {typed}
          <span className="border-r-2 border-gold animate-pulse ml-1" />
          <span className="block text-blush-glow text-2xl sm:text-4xl md:text-5xl mt-2">
            ❤
          </span>
        </h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={showSubline ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="font-body italic text-lg sm:text-2xl text-goldLight/90 mt-6 max-w-xl"
        >
          {SUBLINE}
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={showSubline ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          onClick={scrollToNext}
          className="btn-luxury mt-12"
        >
          Begin Our Journey
        </motion.button>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-16 text-gold/70 text-2xl"
        >
          ⌄
        </motion.div>
      </div>
    </section>
  )
}

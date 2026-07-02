import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaPlane, FaHome, FaCompass, FaHeart } from 'react-icons/fa'
import { futureDreams } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const icons = {
  plane: FaPlane,
  home: FaHome,
  compass: FaCompass,
  heart: FaHeart,
}

/**
 * FutureDreams — PAGE 6
 * Uses GSAP ScrollTrigger to apply a gentle parallax drift to each
 * dream card as the user scrolls, layered with Framer Motion fade-ins.
 */
export default function FutureDreams() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.dream-card')

    const triggers = []
    cards.forEach((card, i) => {
      const speed = i % 2 === 0 ? -40 : 40
      const tween = gsap.to(card, {
        y: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
      triggers.push(tween)
    })

    return () => triggers.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill())
  }, [])

  return (
    <section className="section bg-velvet" id="future">
      <div className="relative z-10 w-full max-w-6xl" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-display tracking-[0.35em] text-xs sm:text-sm text-blush uppercase">
            Page Six
          </span>
          <h2 className="font-display text-3xl sm:text-5xl shimmer-text font-bold mt-3">
            Future Dreams
          </h2>
          <p className="font-body italic text-goldLight/80 mt-3 text-lg">
            The chapters we haven't written yet
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {futureDreams.map((dream, i) => {
            const Icon = icons[dream.icon] || FaHeart
            return (
              <motion.div
                key={dream.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="dream-card glass-card p-8 hover:shadow-glowGold transition-shadow duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-orchid/30 flex items-center justify-center mb-5 border border-gold/40">
                  <Icon className="text-gold text-xl" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-goldLight font-semibold">
                  {dream.title}
                </h3>
                <p className="font-body text-base sm:text-lg text-white/80 mt-3 leading-relaxed">
                  {dream.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

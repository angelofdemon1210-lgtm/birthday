import React from 'react'
import { motion } from 'framer-motion'
import { timelineEvents } from '../data/content'

/**
 * Timeline — PAGE 2
 * A vertical, center-spine timeline. Each memory card slides in from
 * alternating sides as it scrolls into view (Framer Motion `whileInView`).
 *
 * TO ADD MEMORIES: edit `timelineEvents` in src/data/content.js.
 * Each entry supports an `image` field — import a photo and pass it in
 * to replace the placeholder gradient panel.
 */
export default function Timeline() {
  return (
    <section className="section bg-velvet" id="timeline">
      <div className="relative z-10 w-full max-w-5xl">
        <SectionHeading
          eyebrow="Page Two"
          title="Our Love Timeline"
          subtitle="Every chapter that brought us here"
        />

        <div className="relative mt-16">
          {/* center spine */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-orchid to-blush sm:-translate-x-1/2" />

          <div className="space-y-16">
            {timelineEvents.map((event, idx) => (
              <TimelineCard key={event.id} event={event} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <span className="font-display tracking-[0.35em] text-xs sm:text-sm text-blush uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-5xl shimmer-text font-bold mt-3">{title}</h2>
      <p className="font-body italic text-goldLight/80 mt-3 text-lg">{subtitle}</p>
    </motion.div>
  )
}

function TimelineCard({ event, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center">
      {/* Dot on the spine */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-glowGold z-10"
      />

      <div
        className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
          isLeft ? 'sm:pr-12 sm:text-right sm:ml-0' : 'sm:pl-12 sm:ml-auto'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-card p-6 hover:shadow-glowPurple transition-shadow duration-500"
        >
          {/* Placeholder image / actual photo */}
          <div className="w-full h-40 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-orchid/40 via-plum to-velvet flex items-center justify-center">
            {event.image ? (
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl text-blush/60">❤</span>
            )}
          </div>

          <span className="font-display text-gold text-xs sm:text-sm tracking-[0.25em] uppercase">
            {event.date}
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-goldLight mt-2 font-semibold">
            {event.title}
          </h3>
          <p className="font-body text-base sm:text-lg text-white/80 mt-3 leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

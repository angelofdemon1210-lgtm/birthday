import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * LoadingScreen
 * Shown briefly while the page "sets the stage" — a beating heart and
 * a soft title fade-in, then dissolves into the experience.
 */
export default function LoadingScreen({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        >
          <div className="loader-heart">❤</div>
          <motion.p
            className="mt-6 font-display text-gold tracking-[0.3em] text-sm sm:text-base uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Chapter 22 is loading our story...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

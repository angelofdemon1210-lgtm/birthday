import React from 'react'
import { motion } from 'framer-motion'
import { FaMoon, FaSun } from 'react-icons/fa'

/**
 * ThemeToggle
 * Switches the `.light` class on the <html> element, allowing
 * index.css to apply a soft "daylight romance" alternative palette.
 */
export default function ThemeToggle({ isLight, setIsLight }) {
  const toggle = () => {
    const next = !isLight
    setIsLight(next)
    document.documentElement.classList.toggle('light', next)
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 left-5 z-50 w-12 h-12 rounded-full glass-card border-blush/40 flex items-center justify-center shadow-glowPink"
      aria-label="Toggle light and dark mode"
    >
      {isLight ? <FaMoon className="text-plum text-sm" /> : <FaSun className="text-gold text-sm" />}
    </motion.button>
  )
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core romantic palette
        midnight: '#05030A',       // near-black backdrop
        velvet: '#0F0817',         // deep black-purple panels
        plum: '#2A1245',           // deep purple
        orchid: '#6B2B8C',         // mid purple accent
        gold: '#E8C275',           // soft luxury gold
        goldLight: '#F6E3B4',      // glowing gold highlight
        blush: '#F4B6C2',          // soft pink highlight
        roseGlow: '#FF8FAB',       // pink glow accent
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'velvet-gradient': 'radial-gradient(ellipse at center, #2A1245 0%, #0F0817 45%, #05030A 100%)',
        'gold-shimmer': 'linear-gradient(120deg, #E8C275 0%, #F6E3B4 50%, #E8C275 100%)',
      },
      boxShadow: {
        glowGold: '0 0 25px rgba(232,194,117,0.55)',
        glowPink: '0 0 25px rgba(255,143,171,0.45)',
        glowPurple: '0 0 35px rgba(107,43,140,0.55)',
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        floatUp: 'floatUp 8s linear infinite',
        heartbeat: 'heartbeat 1.2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        glowPulse: 'glowPulse 2.5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.2, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 0.8 },
          '100%': { transform: 'translateY(-110vh) scale(1.2)', opacity: 0 },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.15)' },
          '40%': { transform: 'scale(0.95)' },
          '60%': { transform: 'scale(1.1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.6, filter: 'blur(8px)' },
          '50%': { opacity: 1, filter: 'blur(14px)' },
        },
      },
    },
  },
  plugins: [],
}

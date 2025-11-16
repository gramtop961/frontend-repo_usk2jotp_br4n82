import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const Particles = ({ count = 40, className = '' }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 6 + 6,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.6 + 0.2,
      })),
    [count]
  )

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-[#F5C542] shadow-[0_0_12px_rgba(245,197,66,0.6)]"
          style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, opacity: p.opacity }}
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />)
      )}
    </div>
  )
}

export default Particles

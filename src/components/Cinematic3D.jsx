import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

const NeonGlyphField = () => {
  const containerRef = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mx.set(x)
      my.set(y)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [mx, my])

  const layers = Array.from({ length: 5 }).map((_, i) => {
    const depth = (i + 1) * 120
    const x = useTransform(mx, v => v * depth * 0.6)
    const y = useTransform(my, v => v * depth * 0.6)
    const blur = 8 + i * 4
    const opacity = 0.07 + i * 0.06
    return (
      <motion.div
        key={i}
        style={{ transform: 'translateZ(0)', x, y }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-6 opacity-80">
          {Array.from({ length: 60 }).map((__, j) => (
            <div key={j} className="text-center select-none">
              <span
                className="text-[#D62828] font-black tracking-widest"
                style={{
                  filter: `blur(${blur}px) drop-shadow(0 0 6px rgba(214,40,40,0.6))`,
                  opacity,
                  fontSize: 14 + ((i + j) % 3) * 2,
                }}
              >
                {['力','霊','影','刃','炎','魂','雷','天','鬼','龍'][j % 10]}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    )
  })

  return (
    <div ref={containerRef} className="absolute inset-0 [perspective:1000px] overflow-hidden">
      {layers}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </div>
  )
}

const EnergyBladeOrbit = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] [perspective:1200px]">
      <motion.div
        initial={{ rotateX: 12, rotateY: -10 }}
        animate={{ rotateX: [12, 16, 12], rotateY: [-10, -6, -10] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,197,66,0.08),transparent_60%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[560px] h-[560px] rounded-full border border-[#D62828]/30" style={{ boxShadow: '0 0 90px rgba(214,40,40,0.15) inset' }} />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[420px] h-[420px] rounded-full border border-[#F5C542]/30" style={{ boxShadow: '0 0 90px rgba(245,197,66,0.15) inset' }} />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-[280px] h-[280px] rounded-full border border-[#C0C0C0]/30" style={{ boxShadow: '0 0 70px rgba(192,192,192,0.12) inset' }} />
        </motion.div>

        <motion.svg
          viewBox="0 0 800 200"
          className="absolute inset-0 m-auto w-[88%] h-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <defs>
            <linearGradient id="blade" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.1" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D62828" stopOpacity="0.65" />
            </linearGradient>
            <filter id="glow" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M80,120 C260,40 540,40 720,120" stroke="url(#blade)" strokeWidth="8" fill="none" filter="url(#glow)" />
          <path d="M100,110 L700,110" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="2" />
          <path d="M100,130 L700,130" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="1" />
        </motion.svg>

        <motion.div
          className="absolute left-1/2 bottom-10 -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-sm uppercase tracking-[0.3em] text-[#C0C0C0]">Energy Blade Orbit</div>
          <div className="mt-1 text-[#F5C542] font-semibold">Reactive 3D rings + katana arc with cinematic glow</div>
        </motion.div>
      </motion.div>
    </div>
  )
}

const HoloProductCard = ({ title = 'Limited Katana', price = '$249', img = 'https://images.unsplash.com/photo-1609252500893-8fc87cf8ef34?q=80&w=1200&auto=format&fit=crop' }) => {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        px.set(x)
        py.set(y)
      })
    }
    const onLeave = () => { setHover(false); px.set(0.5); py.set(0.5) }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [px, py])

  const rx = useTransform(py, v => (0.5 - v) * 14)
  const ry = useTransform(px, v => (v - 0.5) * 18)
  const shineX = useTransform(px, v => `${v * 100}%`)

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      className="relative w-full max-w-sm aspect-[3/4] rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: rx, rotateY: ry }}
      transition={{ type: 'spring', stiffness: 140, damping: 12, mass: 0.5 }}
    >
      <motion.img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: 'translateZ(35px)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/70" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(400px 200px at ${shineX} -10%, rgba(245,197,66,0.35), transparent 60%)`,
          transform: 'translateZ(60px)'
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-5" style={{ transform: 'translateZ(65px)' }}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white font-semibold text-lg drop-shadow">{title}</div>
            <div className="text-[#F5C542] font-bold">{price}</div>
          </div>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-full px-4 py-2 bg-[#D62828] text-white font-semibold shadow-[0_0_30px_rgba(214,40,40,0.45)]"
          >
            Add to Cart
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_-50%,rgba(255,255,255,0.35),transparent_60%)]" />
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 mix-blend-screen" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(214,40,40,0.2), rgba(245,197,66,0.18), rgba(192,192,192,0.15), rgba(214,40,40,0.2))' }} />
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(transparent 70%, rgba(255,255,255,0.08) 71%, transparent 72%)', backgroundSize: '100% 6px', opacity: 0.35 }} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute -inset-px rounded-2xl pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(214,40,40,0.15), 0 0 60px rgba(245,197,66,0.18)' }} />
    </motion.div>
  )
}

const Cinematic3D = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      <NeonGlyphField />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-extrabold"
        >
          Cinematic 3D Elements
        </motion.h2>
        <p className="mt-3 text-[#C0C0C0] max-w-2xl">Interactive holo-cards, rotating energy rings, and depth-reactive glyph fields inspired by anime OP cinematics.</p>

        <div className="mt-10">
          <EnergyBladeOrbit />
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <HoloProductCard title="Akatsuki Cloak" price="$149" img="https://images.unsplash.com/photo-1603575449153-8d070ff0f1e7?q=80&w=1200&auto=format&fit=crop" />
          <HoloProductCard title="Dragon Katana" price="$249" img="https://images.unsplash.com/photo-1603481588273-0c9c9f055b41?q=80&w=1200&auto=format&fit=crop" />
          <HoloProductCard title="Spirit Fox Mask" price="$89" img="https://images.unsplash.com/photo-1598387237301-5db2b6f8a1c1?q=80&w=1200&auto=format&fit=crop" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default Cinematic3D

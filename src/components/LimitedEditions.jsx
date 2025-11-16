import React from 'react'
import { motion } from 'framer-motion'

const LimitedEditions = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,197,66,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Limited Edition Drops — Sold Out Fast</h2>
          <p className="text-[#C0C0C0] mt-3">Rare, numbered releases with premium finishes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2].map((n) => (
            <motion.div key={n} className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#111] to-[#0b0b0b] border border-white/10 p-6" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black/50">
                <img src={`https://images.unsplash.com/photo-1600077108382-3b677f9b5168?q=80&w=1600&auto=format&fit=crop`} alt="Limited" className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Celestial Arc Blade — 1 of 250</h3>
                  <p className="text-[#C0C0C0]">Brushed steel with gold inlay.</p>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="rounded-full px-5 py-2 bg-[#F5C542] text-black font-semibold shadow-[0_0_25px_rgba(245,197,66,0.4)]">Explore →</motion.button>
              </div>
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(214,40,40,0.12),transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LimitedEditions

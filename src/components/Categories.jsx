import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Swords, Images, Wand2 } from 'lucide-react'

const categories = [
  { title: 'Anime Figures', icon: Sparkles, effect: 'aura' },
  { title: 'Katanas & Blades', icon: Swords, effect: 'slash' },
  { title: 'Keychains & Accessories', icon: Wand2, effect: 'spark' },
  { title: 'Posters & Decor', icon: Images, effect: 'parallax' },
]

const Card = ({ title, Icon, effect }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="relative rounded-2xl p-6 bg-[#0b0b0b] border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden"
  >
    <div className="relative z-10 flex items-center gap-3">
      <Icon className="text-[#F5C542]" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    {/* Impact frame flash */}
    <motion.span
      className="absolute inset-0 bg-white/5"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    />
    {/* Aura / Slash visuals */}
    {effect === 'aura' && (
      <span className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(245,197,66,0.18),transparent_60%)]" />
    )}
    {effect === 'slash' && (
      <motion.span
        className="pointer-events-none absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#D62828] to-transparent"
        initial={{ x: -50, opacity: 0 }}
        whileHover={{ x: '100%', opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
    )}
    {effect === 'spark' && (
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,197,66,0.15),transparent_50%)]" />
    )}
    {effect === 'parallax' && (
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_60%)]" />
    )}
  </motion.div>
)

const Categories = () => {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2>
          <div className="h-[2px] flex-1 mx-6 bg-gradient-to-r from-[#D62828] via-[#F5C542] to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Card key={c.title} title={c.title} Icon={c.icon} effect={c.effect} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories

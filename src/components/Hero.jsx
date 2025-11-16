import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Particles from './Particles'

const GlowButton = ({ children, onClick }) => (
  <motion.button
    onClick={onClick}
    className="relative overflow-hidden rounded-full px-7 py-3 font-semibold text-black bg-[#F5C542] shadow-[0_0_30px_rgba(245,197,66,0.35)] hover:shadow-[0_0_45px_rgba(214,40,40,0.45)] transition-all"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    <span className="relative z-10">{children}</span>
    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,40,40,0.25),transparent_60%)]" />
  </motion.button>
)

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.8))] pointer-events-none" />

      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 flex flex-col items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="backdrop-blur-[1px]">
          <div className="inline-flex items-center gap-2 text-[#C0C0C0]">
            <span className="w-2 h-2 rounded-full bg-[#D62828] shadow-[0_0_10px_rgba(214,40,40,0.8)]" />
            <span className="text-sm tracking-wider uppercase">AnimeMatters.com</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="text-white">Premium Anime Collectibles.</span>
            <br />
            <span className="text-[#D62828] drop-shadow-[0_0_15px_rgba(214,40,40,0.6)]">Forged for True Fans.</span>
          </h1>
          <p className="mt-5 text-lg text-[#C0C0C0]">
            Figures • Katanas • Keychains • Posters • Limited Editions
          </p>
          <div className="mt-8">
            <GlowButton>Shop the Collection →</GlowButton>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  )
}

export default Hero

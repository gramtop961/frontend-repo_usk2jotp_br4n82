import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(214,40,40,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      </div>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-extrabold">
          Built by fans. Powered by passion.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="text-[#C0C0C0] mt-4">
          Delivering premium anime merchandise worldwide.
        </motion.p>
        <motion.div className="mt-8 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 px-5 py-2 bg-[#0b0b0b]" animate={{ boxShadow: ['0 0 0 rgba(245,197,66,0)', '0 0 18px rgba(245,197,66,0.25)', '0 0 0 rgba(245,197,66,0)'] }} transition={{ duration: 3.5, repeat: Infinity }}>
          <span className="w-2 h-2 rounded-full bg-[#F5C542]" />
          <span className="text-sm text-[#C0C0C0]">AnimeMatters logo pulsing softly</span>
        </motion.div>
      </div>
    </section>
  )
}

export default About

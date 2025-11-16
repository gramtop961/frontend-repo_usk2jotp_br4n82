import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-black to-[#0b0b0b] text-white pt-16 pb-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(214,40,40,0.1),transparent_70%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="w-[700px] h-[700px] rounded-full border border-white/5" animate={{ rotate: 360 }} transition={{ duration: 120, repeat: Infinity, ease: 'linear' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold">Join the Anime Realm</h3>
          <p className="text-[#C0C0C0] mt-2">Get early access to drops & events.</p>
          <div className="mt-6 mx-auto max-w-md flex items-center gap-3">
            <input className="flex-1 rounded-full px-5 py-3 bg-black/60 border border-[#D62828] outline-none text-white placeholder:text-[#8a8a8a]" placeholder="Enter your email" />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="rounded-full px-5 py-3 bg-[#D62828] text-white font-semibold shadow-[0_0_20px_rgba(214,40,40,0.5)]">Subscribe</motion.button>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <motion.a key={i} whileHover={{ scale: 1.1 }} className="p-2 rounded-full bg-white/5 hover:bg-white/10">
                <Icon className="text-white" />
              </motion.a>
            ))}
          </div>
          <p className="mt-8 text-sm text-[#8a8a8a]">© {new Date().getFullYear()} AnimeMatters.com — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

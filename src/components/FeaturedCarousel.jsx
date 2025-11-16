import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { id: 1, title: 'Eclipse Katana', price: '$199', img: 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'Akari Figure', price: '$89', img: 'https://images.unsplash.com/photo-1609951651556-5334ea3f4f8b?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'Ember Poster', price: '$29', img: 'https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?q=80&w=1200&auto=format&fit=crop' },
]

const CarouselCard = ({ item, i }) => (
  <motion.div
    className="relative rounded-2xl overflow-hidden bg-[#0b0b0b] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="text-[#C0C0C0]">{item.price}</p>
      </div>
      <motion.button whileTap={{ scale: 0.96 }} className="rounded-full px-4 py-2 bg-[#D62828] text-white font-semibold shadow-[0_0_20px_rgba(214,40,40,0.5)]">
        Add to Cart
      </motion.button>
    </div>
    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,40,40,0.18),transparent_60%)]" />
  </motion.div>
)

const FeaturedCarousel = () => {
  return (
    <section className="relative bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Top Picks of the Week</h2>
          <div className="h-[2px] flex-1 mx-6 bg-gradient-to-r from-[#F5C542] via-[#D62828] to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <CarouselCard key={item.id} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCarousel

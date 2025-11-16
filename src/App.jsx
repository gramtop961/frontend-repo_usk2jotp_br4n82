import React from 'react'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedCarousel from './components/FeaturedCarousel'
import LimitedEditions from './components/LimitedEditions'
import Cinematic3D from './components/Cinematic3D'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Categories />
      <FeaturedCarousel />
      <LimitedEditions />
      <Cinematic3D />
      <About />
      <Footer />
    </div>
  )
}

export default App

'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import Work from '@/components/Work'
import Results from '@/components/Results'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-dark text-white selection:bg-primary selection:text-white font-sans min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Expertise />
        <Work />
        <Results />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

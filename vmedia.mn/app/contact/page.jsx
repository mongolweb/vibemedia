import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="bg-dark text-white selection:bg-primary selection:text-white font-sans min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

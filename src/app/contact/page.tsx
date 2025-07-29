import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactSection from '@/components/sections/ContactSection'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
} 
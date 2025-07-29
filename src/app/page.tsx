import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import BrandSection from '@/components/sections/BrandSection'
import MenuSection from '@/components/sections/MenuSection'
import FranchiseSection from '@/components/sections/FranchiseSection'
import ContactSection from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BrandSection />
        <MenuSection />
        <FranchiseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
} 
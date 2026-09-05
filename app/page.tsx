import Header from '@/components/Header'
import SocialBar from '@/components/SocialBar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import GallerySection from '@/components/GallerySection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="site-shell">
      <Header />
      <SocialBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  )
}

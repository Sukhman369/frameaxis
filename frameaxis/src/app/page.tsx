import type { Metadata } from 'next'
import Hero from '@/components/sections/home/Hero'
import LogoMarquee from '@/components/sections/home/LogoMarquee'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import FeaturedWork from '@/components/sections/home/FeaturedWork'
import WhyFrameAxis from '@/components/sections/home/WhyFrameAxis'
import PricingTeaser from '@/components/sections/home/PricingTeaser'
import Testimonials from '@/components/sections/home/Testimonials'
import CTABanner from '@/components/sections/home/CTABanner'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'FrameAxis — Premium Video Editing Agency',
  description:
    'Where Every Frame Drives Results. Premium video editing for YouTube creators, e-commerce brands, SaaS companies, and performance marketers. 48-hour turnaround. Unlimited revisions.',
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <ServicesGrid />
        <FeaturedWork />
        <WhyFrameAxis />
        <PricingTeaser />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}

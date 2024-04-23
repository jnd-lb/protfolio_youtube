import ContactUsSection from '@/components/contact-us/ContactUsSection'
import HeroSection from '@/components/herosection/HeroSection'
import Navbar from '@/components/navbar/Navbar'
import ProjectSection from '@/components/projects/ProjectSection'
import ServicesSection from '@/components/servicesSection/ServicesSection'
import SkillsSection from '@/components/skills/SkillsSection'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import BreakpointHelper from '@/components/ui/BreakpointsHelper'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <BreakpointHelper/>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <ProjectSection/>
      <SkillsSection/>
      <TestimonialsSection/>
      <ContactUsSection/>
    </main>
  )
}

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import OurTeams from '@/components/OurTeams'
import OurBrand from '@/components/OurBrand'
import LatestNews from '@/components/LatestNews'
import {Sponsors} from '@/components/Sponsors'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Features from '@/components/Features'
import FutureGoals from '@/components/FutureGoals'
import FAQ from '@/components/FAQ'
import ProductShowcase from '@/components/ProductShowcase'
import OurTeam from '@/components/OurTeam'
import { Management } from '@/components/Managment'
import { Achievements } from '@/components/Achievment'

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <AboutUs />
      <Features />
      <OurTeams />
      <Management/>
      <FutureGoals />
      <ProductShowcase />
      <Achievements/>
      <LatestNews />
      <Sponsors />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}


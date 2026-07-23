import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Investments from "@/components/Investments"
import Testimonials from "@/components/Testimonials"
import WhyChooseMe from "@/components/WhyChooseMe"
import SocialLinks from "@/components/SocialLinks"
import Contact from "@/components/Contact"
import FAQ from "@/components/FAQ"
import Disclaimer from "@/components/Disclaimer"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Investments />
      <Testimonials />
      <WhyChooseMe />
      <SocialLinks />
      <Contact />
      <FAQ />
      <Disclaimer />
      <Footer />
    </>
  )
}

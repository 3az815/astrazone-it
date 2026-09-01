import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MissionVision from './components/MissionVision'
import WhyAstrazone from './components/WhyAstrazone'
import Teams from './components/Teams'
import Services from './components/Services'
import Technologies from './components/Technologies'
import Industries from './components/Industries'
import Methodology from './components/Methodology'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './i18n/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-surface">
        <Navbar />
        <main>
          <Hero />
          <About />
          <MissionVision />
          <WhyAstrazone />
          <Teams />
          <Services />
          <Technologies />
          <Industries />
          <Methodology />
          <Pricing />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

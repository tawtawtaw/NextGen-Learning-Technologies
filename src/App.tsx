import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { TrustBar } from './components/TrustBar'
import { BrandPositioning } from './components/BrandPositioning'
import { VisionMissionValues } from './components/VisionMissionValues'
import { AllExamSuccessProduct } from './components/AllExamSuccessProduct'
import { Solutions } from './components/Solutions'
import { Industries } from './components/Industries'
import { StudyAbroad } from './components/StudyAbroad'
import { WhyUs } from './components/WhyUs'
import { Leadership } from './components/Leadership'
import { Subsidiaries } from './components/Subsidiaries'
import { Partners } from './components/Partners'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Videos } from './components/Videos'
import { NewsUpdates } from './components/NewsUpdates'
import { Contact } from './components/Contact'
import { Policies } from './components/Policies'
import { SeoContent } from './components/SeoContent'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <HeroSlider />
        <TrustBar />
        <BrandPositioning />
        <VisionMissionValues />
        <AllExamSuccessProduct />
        <Solutions />
        <Industries />
        <StudyAbroad />
        <WhyUs />
        <Leadership />
        <Subsidiaries />
        <Partners />
        <Portfolio />
        <Testimonials />
        <Videos />
        <NewsUpdates />
        <Contact />
        <Policies />
        <SeoContent />
      </main>
      <Footer />
    </div>
  )
}

export default App

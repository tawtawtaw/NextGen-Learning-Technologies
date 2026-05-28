import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BrandPositioning } from './components/BrandPositioning'
import { Mission } from './components/Mission'
import { Subsidiaries } from './components/Subsidiaries'
import { Solutions } from './components/Solutions'
import { Videos } from './components/Videos'
import { WhyUs } from './components/WhyUs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <BrandPositioning />
        <Mission />
        <Subsidiaries />
        <Solutions />
        <Videos />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

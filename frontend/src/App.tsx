import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Impact } from './components/Impact'
import { OrderForm } from './components/OrderForm'
import { Partners } from './components/Partners'
import { Testimonials } from './components/Testimonials'
import { Tiers } from './components/Tiers'
import { TrustBadges } from './components/TrustBadges'

function App() {
  return (
    <div className="font-sans text-navy-900">
      <Header />
      <main>
        <Hero />
        <Partners />
        <TrustBadges />
        <About />
        <Impact />
        <Tiers />
        <OrderForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App

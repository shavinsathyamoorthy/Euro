import './App.css'
import TopBar from './Components/TopBar'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import WhoArewe from './Components/WhoArewe'
import Location from './Components/Location'
import Sliding from './Components/Sliding'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <Navbar />
      <Hero />
      <Services />
      <WhoArewe />
      <Location />
      <Sliding />
      <ContactForm />
      <Footer />
    </div>
  )
}

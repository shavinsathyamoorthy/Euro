import Trucks from '../Assets/Trucks.png'
import '../Style/Hero.css'

export default function Hero({ onAction }) {
  return (
    <main className="hero">
      <div className="hero-inner">
        <h1>Affordable truck service</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer.
        </p>
        <button className="btn-hero">
          Чета сделать
        </button>
      </div>
      <div className="hero-visual">
        <img className="hero-img" src={Trucks}/>
      </div>
    </main>
  )
}
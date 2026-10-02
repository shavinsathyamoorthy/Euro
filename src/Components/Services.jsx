import Card1 from '../Assets/Card1.png'
import Card2 from '../Assets/Card2.png'
import Card3 from '../Assets/Card3.png'
import Card4 from '../Assets/Card4.png'
import '../Style/Services.css'

export default function Services() {
  return (
    <section className="services">
      <h2>Любые услуги за ваши денишки</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
        et, lectus sit lorem id integer.
      </p>
      <div className="services-grid">
        <img src={Card1} />
        <img src={Card2} />
        <img src={Card3} />
        <img src={Card4} />
      </div>
    </section>
  )
}
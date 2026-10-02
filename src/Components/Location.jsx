import Map from '../Assets/map.png'
import '../Style/Location.css'

export default function Location() {
  return (
    <section className="location">
      <div className="location-copy">
        <h2>Где мы?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
          in et, lectus sit lorem id integer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
          in et, lectus sit lorem id integer.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
          in et, lectus sit lorem id integer.
        </p>
      </div>
      <div className="location-map">
        <img src={Map} alt="Карта расположения" />
      </div>
    </section>
  )
}
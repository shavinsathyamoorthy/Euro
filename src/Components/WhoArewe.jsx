import scania from '../Assets/scania.png'
import volvo from '../Assets/volvo.png'
import man from '../Assets/man.png'
import daf from '../Assets/daf.png'
import renault from '../Assets/renault.png'
import '../Style/WhoArewe.css'

export default function WhoArewe() {
  return (
    <section className="brands">
      <div className="brands-detail">
        <h2>У вас вопрос кто мы а кто мы блин</h2>
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
      <div className="brands-logos">
        <img className="logo-scania" src={scania} alt="Scania" />
        <img className="logo-volvo" src={volvo} alt="Volvo" />
        <img className="logo-man" src={man} alt="MAN" />
        <img className="logo-daf" src={daf} alt="DAF" />
        <img className="logo-renault" src={renault} alt="Renault" />
      </div>
    </section>
  )
}
import { useState } from 'react'
import photo1 from '../Assets/Sliding1.png'
import photo2 from '../Assets/Sliding2.png'
import photo3 from '../Assets/Sliding3.png'
import photo4 from '../Assets/Sliding4.jpg'
import '../Style/Sliding.css'

const photos = [photo1, photo2, photo3, photo4]

export default function Sliding() {
  const [active, setActive] = useState(0)

  return (
    <section className="gallery">
      <h2>Фоточки</h2>
      <div className="gallery-frame">
        <img src={photos[active]} />
      </div>
      <div className="gallery-dots">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === active ? 'dot dot-active' : 'dot'}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}
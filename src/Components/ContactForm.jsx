import worker from '../Assets/worker.png'
import '../Style/ContactForm.css'

export default function ContactForm() {
  return (
    <section className="contact" style={{ backgroundImage: `url(${worker})` }}>
      <div className="contact-card">
        <h2>Остались вопросы?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
          in et, lectus sit lorem id integer.
        </p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name="name" placeholder="Имя" />
          <input type="tel" name="phone" placeholder="Номер телефона" />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  )
}
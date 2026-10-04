import logo from '../Assets/footerlogo.png'
import facebookIcon from '../Assets/facebook.png'
import instagramIcon from '../Assets/instagram.png'
import whatsappIcon from '../Assets/whatsapp.png'
import locationIcon from '../Assets/LocationIcon.png'
import '../Style/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Euro Truck Service" />
        </div>

        <div className="footer-col">
          <h3>Главная</h3>
          <a href="#about">Это мы</a>
          <a href="#who">Кто мы</a>
          <a href="#why">Почему мы?</a>
          <a href="#contact">Остались вопросы</a>
          <a href="#contacts">Контакты</a>
        </div>

        <div className="footer-col">
          <h3>Контакты</h3>
          <a href="tel:+77088028888">+7 (708) 802 88 88</a>
          <a href="tel:+77088038888">+7 (708) 803 88 88</a>
          <a href="tel:+77085151518">+7 (708) 51 51 518</a>
          <a href="tel:+77005151518">+7 (700) 51 51 518</a>
          <a className="footer-whatsapp" href="#">
            <img src={whatsappIcon} alt="" />
            +7 (708) 802 88 88
          </a>
          <span className="footer-address">
            <img src={locationIcon} alt="" />
            г. Бишкек, ул. Ляляля 69
          </span>
        </div>

        <div className="footer-col">
          <h3>Следите за нами</h3>
          <a href="https://facebook.com" className="footer-social">
            <img src={facebookIcon} alt="" />
            truck_service_official
          </a>
          <a href="https://instagram.com" className="footer-social">
            <img src={instagramIcon} alt="" />
            truck_service_official
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>Copyright © Truck Services 2022. All rights reserved.</span>
      </div>
    </footer>
  )
}
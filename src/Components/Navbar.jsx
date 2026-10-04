import { useState } from 'react'
import '../Style/Navbar.css'
import Logo from '../Assets/Logo.png'
import LocationVector from '../Assets/LocationVector.png'
import ClockVector from '../Assets/ClockVector.png'
import PhoneVector from '../Assets/PhoneVector.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a className="logo" href="#">
          <img src={Logo} alt="Euro Truck Service" />
        </a>

        <nav className="nav">
          <a href='#'>Это мы</a>
          <a href='#'>Почему мы?</a>
          <a href='#'>А вот поэтому</a>
          <a href='#'>Контакты</a>
        </nav>

        <button className="btn-call">Заказать звонок</button>

        <button
          className='sidebar-opener'
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={open ? 'sidebar-overlay sidebar-overlay-open' : 'sidebar-overlay'}
        onClick={() => setOpen(false)}
      />

      <aside className={open ? 'sidebar sidebar-open' : 'sidebar'}>
        <div className="sidebar-info">
          <div className="sidebar-info-item">
            <img src={LocationVector} alt="" />
            <span>
              <b>Наш адрес:</b>
              г. Бишкек, ул. Ляляля 69
            </span>
          </div>
          <div className="sidebar-info-item">
            <img src={ClockVector} alt="" />
            <span>
              <b>График работы:</b>
              С 8:00 до 22:00 без выходных
            </span>
          </div>
          <div className="sidebar-info-item">
            <img src={PhoneVector} alt="" />
            <span>
              <a href="#">+7 (708) 51 51 518</a>
              <br />
              <a href="#">+7 (700) 51 51 518</a>
            </span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a href='#'>Это мы</a>
          <a href='#'>Почему мы?</a>
          <a href='#'>А вот поэтому</a>
          <a href='#'>Контакты</a>
        </nav>

        <button className="btn-call sidebar-call">Заказать звонок</button>
      </aside>
    </header>
  )
}
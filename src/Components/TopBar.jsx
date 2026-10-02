import '../Style/TopBar.css'
import LocationVector from '../Assets/LocationVector.png'
import ClockVector from '../Assets/ClockVector.png'
import PhoneVector from '../Assets/PhoneVector.png'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="info">
          <div className="info-item">
            <img src={LocationVector} />
            <span>
              <b>Наш адрес:</b>
              г. Бишкек, ул. Ляляля 69
            </span>
          </div>
          <div className="info-item">
            <img src={ClockVector} />
            <span>
              <b>График работы:</b>
              С 8:00 до 22:00 без выходных
            </span>
          </div>
        </div>
        <div className="phones">
          <img src={PhoneVector} alt="" />
          <div>
            <span>+7 (708) 51 51 518</span> <br/>
            <span>+7 (700) 51 51 518</span>
          </div>
        </div>
      </div>
    </div>
  )
}
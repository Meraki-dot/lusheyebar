import React from "react"
import { Link } from "gatsby"
import Touch_up from "../../images/Ombre.jpg"
import Correction from "../../images/Correction.jpg"
import Ombre from "../../images/Touch_up.jpg"
import Footer from "../../components/footer_components/Footer"

const Mobile_brows = () => {
  const button_title = "Book Now"

  return (
    <div className="container" id="mobile_service_options">
        <h1 className="title">Eyebrows</h1>
        <div id="service_items">
          <img src={Ombre} />
          <p className='sub_title'>Ombré Powder</p>
          <p className='price_text'>$400</p>
          <p className='service_description'>
          Ombré powder is a technique that deposits thousands of tiny dots to the epidermis layer of the skin and gradually building up a color and defined shape. The result is a gradient effect that will heal to a soft powdery finish for a soft filled-in look.{" "}
          </p>
          <Link to="brow_policies">{button_title}</Link>
          <img src={Touch_up} />
          <p className='sub_title'>Touch Up</p>
          <p className='price_text solo_first'>6-8 Weeks · $100</p>
          <p className='price_text solo_last'>Annual Color Booster · $250</p>
          <Link to="touch_up_policies">{button_title}</Link>
          <img src={Correction} />
          <p className='sub_title'>Correction | Cover-Up</p>
          <p className='price_text solo_first'>$100</p>    
          <Link to="brow_removal_policies">{button_title}</Link>
        </div>
      <Footer />
    </div>
  )
}

export default Mobile_brows

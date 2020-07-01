import React from "react"
import { Link } from "gatsby"
import Touch_up from "../../images/Ombre.jpg"
import Correction from "../../images/Correction.jpg"
import Ombre from "../../images/Touch_up.jpg"
import Footer from "../../components/footer_components/Footer"

const Desktop_brows = () => {
  const button_title = "Book"

  return (
    <div className="container" id="desktop_service_options">
      <div className="grey_box"></div>
      <div id="service_items">
        <div
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="200"
          className="service_item"
        >
          <div className="service_title_prices">
            <p className="sub_title">Ombré</p>
            <p className="price_text">$400</p>
          </div>
          <div className="service_option_content">
            <div className="opacity-window">
              <img src={Ombre} />
            </div>
            <p className="service_description">
              Ombré powder is a technique that deposits thousands of tiny dots
              to the epidermis layer of the skin and gradually building up a
              color and defined shape. The result is a gradient effect that will
              heal to a soft powdery finish for a soft filled-in look.{" "}
            </p>
            <Link to="brow_policies">{button_title}</Link>
          </div>
        </div>
        <div
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="200"
          className="service_item"
        >
          <div className="service_title_prices">
            <p className="sub_title">Touch Up</p>
            <p className="price_text">6-8 Weeks · $100</p>
            <p className="price_text solo">3-11 Months · $150</p>
            <p className="price_text solo_last">Annual Color Booster · $250</p>
          </div>
          <div className="service_option_content">
            <div className="opacity-window">
              <img src={Touch_up} />
            </div>
            <Link to="brow_policies">{button_title}</Link>
          </div>
        </div>
        <div
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="200"
          className="service_item"
        >
          <div className="service_title_prices">
            <p className="sub_title">Correction</p>
            <p className="price_text">$100</p>
          </div>
          <div className="service_option_content">
            <div className="opacity-window">
              <img src={Correction} />
            </div>
            <Link to="brow_policies">{button_title}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Desktop_brows

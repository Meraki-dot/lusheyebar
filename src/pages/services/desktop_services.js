import React from "react"
import { Link } from "gatsby"
import Lash_overview from "../../images/lash_overview.jpg"
import Tattoo_white from "../../images/Tattoo_removal_white.jpg"
import Wax from "../../images/wax.jpeg"
import Brow_overview from "../../images/brow_overview.jpg"
import Footer from "../../components/footer_components/Footer"

const Desktop_services = () => {
  const button_title = "More"

  return (
    <div className="container" id="desktop_services">
      <div className="grey_box"></div>
      <div id="service_items">
        <div
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-easing="ease"
          className="sec-col"
        >
          <p className="desktop_service_title">Lashes</p>
          <div className="service-info-container">
            <div className="opacity-window">
              <img src={Lash_overview} />
            </div>
            <Link className="service_desktop_button" to="lashes">
              {button_title}
            </Link>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-easing="ease"
          className="sec-col"
        >
          <p className="desktop_service_title">Eyebrows</p>
          <div className="service-info-container">
            <div className="opacity-window">
              <img src={Brow_overview} />
            </div>
            <Link className="service_desktop_button" to="eyebrows">
              {button_title}
            </Link>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-easing="ease"
          className="sec-col"
        >
          <p className="desktop_service_title">Tattoo Removal</p>
          <div className="service-info-container">
            <div className="opacity-window">
              <img src={Tattoo_white} />
            </div>
            <Link className="service_desktop_button" to="tattoo_removal">
              {button_title}
            </Link>
          </div>
        </div>
        <div
          data-sal="slide-up"
          data-sal-duration="1500"
          data-sal-easing="ease"
          className="sec-col"
        >
          <p className="desktop_service_title">Waxing</p>
          <div className="service-info-container">
            <div className="opacity-window">
              <img src={Wax} />
            </div>
            <Link className="service_desktop_button" to="waxing">
              {button_title}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Desktop_services

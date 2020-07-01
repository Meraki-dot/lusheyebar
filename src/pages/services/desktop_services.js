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
        <p
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="100"
          className="desktop_service_title"
        >
          Lashes
        </p>
        <div
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          className="sec-col"
        >
          <div className="opacity-window">
            <img src={Lash_overview} />
          </div>
          <Link className="service_desktop_button" to="lashes">
            {button_title}
          </Link>
        </div>
        <p
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="100"
          className="sec-col"
          className="desktop_service_title"
        >
          Eyebrows
        </p>
        <div
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          className="sec-col"
          className="sec-col"
        >
          <div className="opacity-window">
            <img src={Brow_overview} />
          </div>
          <Link className="service_desktop_button" to="eyebrows">
            {button_title}
          </Link>
        </div>
        <p data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="100"
          className="sec-col" className="desktop_service_title">Tattoo Removal</p>
        <div data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          className="sec-col" className="sec-col">
          <div className="opacity-window">
            <img src={Tattoo_white} />
          </div>
          <Link className="service_desktop_button" to="tattoo_removal">
            {button_title}
          </Link>
        </div>
        <p data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          data-sal-delay="100"
          className="sec-col" className="desktop_service_title">Waxing</p>
        <div data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease"
          className="sec-col" className="sec-col">
          <div className="opacity-window">
            <img src={Wax} />
          </div>
          <Link className="service_desktop_button" to="waxing">
            {button_title}
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Desktop_services

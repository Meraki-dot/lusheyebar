import React from "react"
import { Link } from "gatsby"
import Tattoo_tools from "../../images/Tattoo_tools.jpg"
import Footer from "../../components/footer_components/Footer"

const Desktop_tattoo = () => {
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
            <p className="sub_title">Tattoo Removal</p>
            <p className="price_text">
              Pricing Varies <strong>|</strong> Starts at $175
            </p>
          </div>
          <div className="service_option_content">
            <div className="opacity-window">
              <img src={Tattoo_tools} />
            </div>
            <p className="service_description">
              CRC Tattoo Remover I+II System (USA) is a method of removing
              tattoos and permanent makeup. Tattoo Remover I (by technician),
              has a low pH, which works on extracting pigment. Aided by Tattoo
              Remover II (by client home care) beginning the initiation of
              tissue repair. It can be used directly at the time of procedure
              for correction of small errors and also in removing healed tattoos
              and permanent makeup. This technique removes colors that lasers
              can not, such as white, red and pink. It is pain free, no numbing
              required. The procedure can take up to 60 minutes or longer
              depending on the size. After 24 hours you can wear makeup or get
              the area wet.{" "}
            </p>
            <Link to="tattoo_policies">{button_title}</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Desktop_tattoo

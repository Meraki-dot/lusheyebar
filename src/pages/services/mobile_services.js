import React from "react"
import { Link } from "gatsby"
import Lash_overview from "../../images/lash_overview.jpg"
import Tattoo_white from "../../images/Tattoo_removal_white.jpg"
import Wax from "../../images/wax.jpeg"
import Brow_overview from "../../images/brow_overview.jpg"
import Footer from "../../components/footer_components/Footer"

const Mobile_services = () => {
  return (
    <div className="container" id="mobile_services">
      <h1 className="title">Services</h1>
      <div id="service_items">
        <img src={Lash_overview} />
        <Link to="lashes">Lashes</Link>
        <img src={Brow_overview} />
        <Link to="eyebrows">Eyebrows</Link>
        <img src={Tattoo_white} />
        <Link to="tattoo_removal">Tattoo Removal</Link>
        <img src={Wax} />
        <Link to="waxing">Waxing</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Mobile_services

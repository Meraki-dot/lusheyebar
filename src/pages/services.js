import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Eye_Test from "../images/eye_test.jpg"
import Tattoo from "../images/Tattoo_removal.jpg"
import Wax from "../images/wax.jpeg"
import Eyebrows from "../images/Eyebrow_overview.jpg"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    {/* <SEO title="Services" /> */}
    <div className="container" id="services">
      <h1 className="title">Services.</h1>
      <div id="service_items">
        <img src={Eye_Test} />
        <Link to="lashes">Lashes.</Link>
        <img src={Eyebrows} />
        <Link to="eyebrows">Eyebrows.</Link>
        <img src={Tattoo} />
        <Link to="tattoo_removal">Tattoo Removal.</Link>
        <img src={Wax} />
        <Link to="waxing">Waxing.</Link>
      </div>
    </div>
  </Layout>
)

export default Services

import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Tattoo_tools from "../images/Tattoo_tools.jpg"
import SEO from "../components/seo"

const Tattoo_Removal = () => {

  const button_title = "Book Now."

  return (
    <Layout>
      {/* <SEO title="Tattoo_Removal" /> */}
      <div className="container service_options">
        <h1 className="title">Tattoo Removal</h1>
        <div id="service_items">
          <img  src={Tattoo_tools} />
          <p className='price_text'>Pricing Varies | Starts at $175</p>
          <p className='service_description'>
          CRC Tattoo Remover I+II System (USA) is a method of removing tattoos and permanent makeup. Tattoo Remover I (by technician), has a low pH, which works on extracting pigment. Aided by Tattoo Remover II (by client home care) beginning the initiation of tissue repair. It can be used directly at the time of procedure for correction of small errors and also in removing healed tattoos and permanent makeup. This technique removes colors that lasers can not, such as white, red and pink. It is pain free, no numbing required. The procedure can take up to 60 minutes or longer depending on the size. After 24 hours you can wear makeup or get the area wet.{" "}
          </p>
          <Link to="tattoo_policies">{button_title}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Tattoo_Removal

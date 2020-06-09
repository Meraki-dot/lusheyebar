import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Eye_Test from "../images/eye_test.jpg"
import SEO from "../components/seo"

const Eyebrows = () => {

  const button_title = "Book Now."

  return (
    <Layout>
      {/* <SEO title="Eyebrows" /> */}
      <div className="container service_options">
        <h1 className="title">Eyebrows.</h1>
        <div id="service_items">
          <img src={Eye_Test} />
          <p className='sub_title'>Ombre Powder.</p>
          <p className='price_text'>$400</p>
          <p className='service_description'>
          Ombre powder is a technique that deposits thousands of tiny dots to the epidermis layer of the skin and gradually building up a color and defined shape.  The result is a gradient effect that will heal to a soft powdery finish for a soft filled-in look.{" "}
          </p>
          <Link to="brow_faq">{button_title}</Link>
          <img src={Eye_Test} />
          <p className='sub_title'>Correction | Cover-Up.</p>
          <p className='price_text solo_first'>$100</p>
          <Link to="brow_faq">{button_title}</Link>
          <img src={Eye_Test} />
          <p className='sub_title'>Touch Ups.</p>
          <p className='price_text solo_first'>6-8 Weeks · $100</p>
          <p className='price_text solo'>3-11 Months · $150</p>
          <p className='price_text solo_last'>Annual Color Booster · $250</p>
          <Link to="brow_faq">{button_title}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Eyebrows

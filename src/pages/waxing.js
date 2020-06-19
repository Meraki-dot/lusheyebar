import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Face_wax from "../images/Face_wax.jpg"
import Bikini_wax from "../images/Bikini_wax.jpeg"
import Brazilian_wax from "../images/Brazilian_wax.jpg"
import Butt_wax from "../images/Butt_wax.jpg"
import Body_wax from "../images/Body_wax.jpg"
import SEO from "../components/seo"

const Waxing = () => {
  const button_title = "Book Now"

  return (
    <Layout>
      {/* <SEO title="Waxing" /> */}
      <div className="container service_options">
        <h1 className="title">Waxing</h1>
        <div id="service_items">
          <img src={Face_wax} />
          <p className="sub_title">Face Waxing</p>
          <p className="price_text price_group solo_first">
            <strong>Lip</strong> · 30 min · $15+
          </p>
          <p className="price_text price_group solo">
            <strong>Sideburns</strong> · 30 min · $18+
          </p>
          <p className="price_text price_group solo">
            <strong>Cheeks</strong> · 30 min · $18+
          </p>
          <p className="price_text last_price solo_last">
            <strong>Chin</strong> · 30 min · $15+
          </p>
          <a href='https://lusheyebar.schedulista.com'>{button_title}</a>

          <img src={Bikini_wax} />
          <p className="sub_title">Bikini Waxing</p>
          <p className="price_text price_group solo_first">
            <strong>First Time Bikini Line</strong> · 1 hour · $45+
          </p>
          <p className="price_text price_group solo">
            <strong>Bikini Line</strong> Serviced performed 5 weeks prior · 30
            min · $40+{" "}
          </p>
          <p className="price_text price_group solo">
            <strong>First Time Full Bikini</strong> · 1 hour · $55+
          </p>
          <p className="price_text price_group solo_last">
            <strong>Full Bikini</strong> Serviced performed 5 weeks prior · 30
            min · $50+
          </p>
          <a href='https://lusheyebar.schedulista.com'>{button_title}</a>

          <img src={Brazilian_wax} />
          <p className="sub_title">Brazilian Waxing</p>
          <p className="price_text price_group solo_first">
            <strong>First Time Brazilian</strong> · 1 hour · $65+
          </p>
          <p className="price_text price_group solo_last">
            <strong>Brazilian</strong> Serviced performed 5 weeks prior · 30 min
            · $60+
          </p>
          <a href='https://lusheyebar.schedulista.com'>{button_title}</a>

          <img src={Butt_wax} />
          <p className="sub_title">Butt Waxing</p>
          <p className="price_text price_group solo_first">
            <strong>Butt</strong> · 30 min · $45+
          </p>
          <p className="price_text last_price solo_last">
            <strong>Butt Strip</strong> · 30 min · $25+
          </p>
          <a href="href='https://lusheyebar.schedulista.com">{button_title}</a>

          <img src={Body_wax} />
          <p className="sub_title">Body Waxing</p>
          <p className="price_text price_group solo_first">
            <strong>Underarm</strong> · 30 min · $25
          </p>
          <p className="price_text price_group solo">
            <strong>Back</strong> <em>Top to above panty line</em> · 30 mins ·
            $65
          </p>
          <p className="price_text price_group solo">
            <strong>Chest</strong> · 30 mins · $35+
          </p>
          <p className="price_text price_group solo">
            <strong>Full Stomach</strong> · 30 min · $35+
          </p>
          <p className="price_text price_group solo">
            <strong>Stomach Strip</strong> · 30 mins · $12+
          </p>
          <p className="price_text price_group solo">
            <strong>Inner Thigh</strong> · 30 min · $28+
          </p>
          <p className="price_text price_group solo">
            <strong>Half Leg</strong> · 45 min · $60+
          </p>
          <p className="price_text price_group solo">
            <strong>Full Leg</strong> · 1 hour · $90+
          </p>
          <p className="price_text price_group solo">
            <strong>Half Arm</strong> · 45 min · $45+
          </p>
          <p className="price_text last_price solo_last">
            <strong>Full Arm</strong> · 60 min · $80+
          </p>
          <Link to="/schedule">{button_title}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Waxing

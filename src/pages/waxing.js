import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Eye_Test from "../images/eye_test.jpg"
import SEO from "../components/seo"

const Waxing = () => {
  const button_title = "Book Now."

  return (
    <Layout>
      {/* <SEO title="Waxing" /> */}
      <div className="container service_options">
        <h1 className="title">Waxing.</h1>
        <p className="subtext main_subtext">soft · lush · gorgeous</p>
        <div id="service_items">
          <img src={Eye_Test} />
          <p className="sub_title">Face Waxing.</p>
          <p className="price_text price_group solo_first">
            Lip · 30 min · $15+
          </p>
          <p className="price_text price_group solo">
            Sideburns · 30 min · $18+
          </p>
          <p className="price_text price_group solo">Cheeks · 30 min · $18+</p>
          <p className="price_text last_price solo_last">
            Chin · 30 min · $15+
          </p>
          <Link to="">{button_title}</Link>

          <img src={Eye_Test} />
          <p className="sub_title">Bikini Waxing.</p>
          <p className="price_text price_group solo_first">
            First Time Bikini Line · 1 hour · $45+
          </p>
          <p className="price_text price_group solo">
            Bikini Line Serviced performed 5 weeks prior · 30 min · $40+{" "}
          </p>
          <p className="price_text price_group solo">
            First Time Full Bikini · 1 hour · $55+
          </p>
          <p className="price_text price_group solo_last">
            Full Bikini Serviced performed 5 weeks prior · 30 min · $50+
          </p>
          <Link to="">{button_title}</Link>

          <img src={Eye_Test} />
          <p className="sub_title">Brazilian Waxing.</p>
          <p className="price_text price_group solo_first">
            First Time Brazilian · 1 hour · $65+
          </p>
          <p className="price_text price_group solo_last">
            Brazilian Serviced performed 5 weeks prior · 30 min · $60+
          </p>
          <Link to="">{button_title}</Link>

          <img src={Eye_Test} />
          <p className="sub_title">Butt Waxing.</p>
          <p className="price_text price_group solo_first">Butt · 30 min · $45+</p>
          <p className="price_text last_price solo_last">
            Butt Strip · 30 min · $25+
          </p>
          <Link to="">{button_title}</Link>

          <img src={Eye_Test} />
          <p className="sub_title">Body Waxing.</p>
          <p className="price_text price_group solo_first">
            Underarm · 30 min · $25
          </p>
          <p className="price_text price_group solo">
            Back <em>Top to Just Above Panty Line</em> · 30 mins · $65
          </p>
          <p className="price_text price_group solo">Chest · 30 mins · $35+</p>
          <p className="price_text price_group solo">
            Full Stomach · 30 min · $35+
          </p>
          <p className="price_text price_group solo">
            Stomach Strip · 30 mins · $12+
          </p>
          <p className="price_text price_group solo">
            Inner Thigh · 30 min · $28+
          </p>
          <p className="price_text price_group solo">
            Half Leg · 45 min · $60+
          </p>
          <p className="price_text price_group solo">
            Full Leg · 1 hour · $90+
          </p>
          <p className="price_text price_group solo">
            Half Arm · 45 min · $45+
          </p>
          <p className="price_text last_price solo_last">
            Full Arm · 60 min · $80+
          </p>
          <Link to="">{button_title}</Link>
        </div>
      </div>
    </Layout>
  )
}

export default Waxing

import React from "react"
import { Link } from "gatsby"
import Classic from "../../images/Classic_lashes.jpg"
import Mega_volume_lashes from "../../images/Mega_volume_lashes.jpg"
import Natural_classic from "../../images/Natural_classic_lashes.jpg"
import Natural_volume from "../../images/Natural_volume_lashes.jpg"
import Volume_lashes from "../../images/Volume_lashes.jpg"
import Footer from "../../components/footer_components/Footer"

const Mobile_lashes = () => {
  const button_title = "Book Now"

  return (
    <div className="container" id="mobile_service_options">
      <h1 className="title">Lashes</h1>
      <div id="service_items">
        <img src={Natural_classic} />
        <p className="sub_title">Natural Classic</p>
        <p className="price_text">45 min · $130 | 2-3 week fill · $70</p>
        <p className="service_description">
          The technician will apply one extension per a natural lash. Lash
              coverage, 25 natural lashes per eye. Classic lashes are perfect for
              clients who already have a lot of lashes, but would like to add
              more length. This style creates a more natural look.{" "}
        </p>
        <Link to="lashes_policies">{button_title}</Link>

        <img src={Classic} />
        <p className="sub_title">Classic</p>
        <p className="price_text">1.5 hours · $185 | 2-3 week fill · $95</p>
        <p className="service_description">
        Same technique as natural classic. Lash coverage, 50% of natural
              lash.{" "}
        </p>
        <Link to="lashes_policies">{button_title}</Link>

        <img src={Natural_volume} />
        <p className="sub_title">Natural Volume</p>
        <p className="price_text">1.5 hours · $200 | 2-3 week fill · $110</p>
        <p className="service_description">
        The technician hand makes 3-5d fans and applies it to one natural
              eyelash. Creating a light everyday look.
        </p>
        <Link to="lashes_policies">{button_title}</Link>

        <img src={Volume_lashes} />
        <p className="sub_title">Volume</p>
        <p className="price_text">2 hours · $250 | 2-3 week fill · $135</p>
        <p className="service_description">
        Same technique as natural volume. Volume lashes are lighter, fluffier and gives the client
              a fuller look. Volume lashes are perfect for clients who don't
              have a lot of lashes, have sparse lashes, bald spots or just want
              a more dramatic look without having to use a thicker lash.{" "}
        </p>
        <Link to="lashes_policies">{button_title}</Link>

        <img src={Mega_volume_lashes} />
        <p className="sub_title">Mega Volume</p>
        <p className="price_text">3 hours · $300 | 2-3 week fill · $160</p>
        <p className="service_description">
          Using lighter and thinner lashes, creating up to 16d fans. This is the
          fullest and most dramatic set we offer.
        </p>
        <Link to="lashes_policies">{button_title}</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Mobile_lashes

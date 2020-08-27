import React from "react"
import Mobile from "./Mobile_header"
import Desktop from "./Desktop_header"
import Logo from "../../images/Logo_final.png"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div id="nav-container">
      <Mobile />
      <div id="mobile-logo">
        <Link to="/">
          <img
            src={Logo}
            alt="Lush Eye Bar's, an eyelash extension salon's logo"
          />
        </Link>
      </div>
      <Desktop />
    </div>
  )
}

export default Header

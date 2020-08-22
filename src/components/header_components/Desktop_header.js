import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/Logo_final.png"

const Mobile = () => {
  return (
    <div id="desktop-menu-container">
      <div id="logo">
        <Link to="/"><img src={Logo} alt="Lush Eye Bar's, an eyelash extension salon's logo" /></Link>
      </div>
      <div id="link-container">
        <Link to="/about">about</Link>
        <Link to="/services">services</Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/lusheyebar/?hl=en"
        >
          gallery
        </a>
      </div>
    </div>
  )
}

export default Mobile

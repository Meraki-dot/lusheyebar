import React from "react"
import { Link } from "gatsby"

const Mobile = () => {
  return (
    <div id="desktop-menu-container">
      <div id="logo">
        <p><Link to="/">LUSH EYE BAR</Link></p>
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

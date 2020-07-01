import React from "react"
import Mobile from "./Mobile_header"
import Desktop from "./Desktop_header"

const Header = () => {

  return (
    <div id="nav-container">
      <Mobile />
      <Desktop />
    </div>
  )
}

export default Header

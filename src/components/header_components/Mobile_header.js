import React, { useState} from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"
import Logo from "../../images/Logo_final.png"

const Mobile = () => {
  const [open, setOpen] = useState(true);

  return (
      <Menu
          className={"burger"}
          isOpen={!open}
          right
          customBurgerIcon={ <img src={require('../../images/burger_menu.jpg')}/> }
      >
          <div id="menu-container">
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/services">services</Link>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lusheyebar/?hl=en">gallery</a>

          </div>
      </Menu>
  )
}


export default Mobile

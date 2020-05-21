import React, { useState, useEffect } from "react"
import Mobile from "./Mobile_header"

const Header = () => {
  const getWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  function useCurrentWidth() {
    // save current window width in the state object
    let [width, setWidth] = useState(getWidth())

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
      // timeoutId for debounce mechanism
      let timeoutId = null
      const resizeListener = () => {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId)
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150)
      }
      // set resize listener
      window.addEventListener("resize", resizeListener)

      // clean up function
      return () => {
        // remove resize listener
        window.removeEventListener("resize", resizeListener)
      }
    }, [])

    return width
  }

  const width = useCurrentWidth()

  function MobileHeader() {
    if (width < 480) {
      return <Mobile></Mobile>
    } else {
      return null
    }
  }

  function DeskHeader() {
    if (width > 480) {
      return (
        <div>
          <h1>THIS IS DESKTOP</h1>
          <p>muahahahaha</p>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div id="nav-container">
      <DeskHeader />
      <MobileHeader />
    </div>
  )
}

export default Header

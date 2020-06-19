import React from "react"
import Layout from "../components/layout"
import Header from "../components/header_components/header"
import Footer from "../components/footer_components/Footer"

const Schedule = () => {
  return (
    <div className="schedule-container">
      <Header />
      <iframe
        id="schedulista-widget-00"
        src="https://www.schedulista.com/schedule/lusheyebar?mode=widget"
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
        width="100%"
        height="790px"
      ></iframe>
      <script
        id="schedulista-widget-script-00"
        type="text/javascript"
        src="https://www.schedulista.com/schedule/lusheyebar/widget.js"
      ></script>
      <Footer />
    </div>
  )
}

export default Schedule

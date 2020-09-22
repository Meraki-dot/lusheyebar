import React from "react"
import Layout from "../components/layout"
import Header from "../components/header_components/header"

const Schedule = () => {

  return (
    <div className="schedule-container">
      <div className="desktop-schedule-container">
        <Header />
        <iframe
          id="schedulista-widget-00"
          src="https://www.schedulista.com/schedule/lusheyebar?mode=widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="yes"
          width="100%"
          height= "1200px"
          onload="this.height=this.contentWindow.document.body.scrollHeight;"
        ></iframe>
        <script
          id="schedulista-widget-script-00"
          type="text/javascript"
          src="https://www.schedulista.com/schedule/lusheyebar/widget.js"
        ></script>
      </div>
      <div className="mobile-schedule-container">
        <Header />
        <iframe
          id="schedulista-widget-00"
          src="https://www.schedulista.com/schedule/lusheyebar?mode=widget"
          allowtransparency="true"
          frameborder="0"
          scrolling="no"
          width="100%"
          height="2700px"
          onload="scroll(0,0);"
        ></iframe>
        <script
          id="schedulista-widget-script-00"
          type="text/javascript"
          src="https://www.schedulista.com/schedule/lusheyebar/widget.js"
        ></script>
      </div>
    </div>
  )
}

export default Schedule

import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    {/* <SEO title="Page two" /> */}
    <div className="container" id="about">
      <h1 className="title">About.</h1>
      <p className="read-text">
        Thanh is a licensed esthetician, certified permanent cosmetic artist and
        eyelash guru client feels comfortable and assured. In preparation for
        developing this business, she’s thoroughly studied esthetics and it
        reawakened a passion for beauty. Which she now applies in helping people
        enhance and nurture their appearances.{" "}
      </p>
      <p className="read-text">
        Lush Eye Bar has been a vision of hers since childhood. Growing up,
        she’s always had an eye for style. She has the ability to look at
        something, reimagine it and recreate it. Along with founding Lush Eye
        Bar, she is a licensed esthetician. She is certified by Daria Chupry,
        Eyes by Sally and Thuy Tien as a permanent cosmetic artist. She is also
        an eyelash ace certified by Lash Box LA, Co0kies Beauty Bar and Olivia
        and Lash.
      </p>
      <p className="read-text">
        During her free time, she loves to unwind by traveling and doing DIY
        projects at home.
      </p>
    </div>
  </Layout>
)

export default About

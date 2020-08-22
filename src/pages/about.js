import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer_components/Footer"
import SEO from "../components/seo";

const About = () => (
  <Layout>
    <SEO
      title="Page about Thanh, the lash and eyebrow expert."
      description="Thanh is a certified cosmetic artist who specializes in eyelash extensions and eyebrow permanent makeup."
    />
    <div className="container" id="about">
      <div className="grey_box"></div>
      <div className="content-container">
        <h1 className="title">About</h1>
        <div className="text-container">
        <p className="read-text">
          Thanh is a certified permanent cosmetic artist and eyelash guru. She
          opened Lush Eye Bar in Alameda, California in 2018. She understands
          and happily meets the needs of clients of all ages. She is
          detail-oriented and meticulous about her craft. This is apparent in
          every treatment; she makes sure each client feels comfortable and
          assured. In preparation for developing this business, she’s thoroughly
          studied esthetics and it reawakened a passion for beauty which she now
          applies in helping people enhance and nurture their appearances.{" "}
        </p>
        <p className="read-text">
          Lush Eye Bar has been a vision of hers since childhood. Growing up,
          she’s always had an eye for style. She has the ability to look at
          something, reimagine it and recreate it. Along with founding Lush Eye
          Bar, she is a licensed esthetician. She is certified by Daria Chupry,
          Eye’s by Sally, and Thuy Tien as a permanent cosmetic artist. She is
          also an eyelash ace certified by Lash Box LA, Cookies Beauty Bar, and
          Olivia and Lash.
        </p>
        <p className="read-text">
          During her free-time, she loves to unwind by traveling and doing DIY
          projects at home.
        </p>
        </div>
      </div>
      <Footer />
    </div>
  </Layout>
)

export default About

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/styles.scss"
import Footer from "../components/footer_components/Footer"

const IndexPage = () => (
  <Layout>
  <div className="container" id="home">
      <div className="page_content">
        <h1 className="welcome_title">Welcome</h1>
        <h1 className="main_title">LUSH EYE BAR</h1>
        <Link className="button" to="/services">
          Book Now
        </Link>
      </div>
  </div>
  <Footer />
  </Layout>
)

export default IndexPage

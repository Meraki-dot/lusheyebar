import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/styles.scss"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="container" id="home">
      {/* <SEO title="Home" /> */}
      <h1 className="main_title">LUSH EYE BAR</h1>
      <Link className="button" to="/services">Learn More.</Link>
    </div>
  </Layout>
)

export default IndexPage

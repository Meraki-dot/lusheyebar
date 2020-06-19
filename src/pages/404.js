import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div id="not_exist">
      <SEO title="404: Not found" />
      <h1>Not Found</h1>
      <p>This page doesn't exist.</p>
      <button><Link to="/">Back To Home</Link></button>
    </div>
  </Layout>
)

export default NotFoundPage

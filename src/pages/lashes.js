import React from "react"
import Layout from "../components/layout"
import Mobile_lashes from "./lashes/Mobile_lashes"
import Desktop_lashes from "./lashes/Desktop_lashes"
import SEO from "../components/seo"

const Lashes = () => {
  return (
    <Layout>
      <SEO
        title="Lush Eye Brow's eyelash extension services."
      />
      <Mobile_lashes />
      <Desktop_lashes />
    </Layout>
  )
}

export default Lashes

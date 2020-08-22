import React from "react"
import Layout from "../components/layout"
import Mobile_brows from "./brows/Mobile_brows"
import Desktop_brows from "./brows/Desktop_brows"
import SEO from "../components/seo"

const Eyebrows = () => {
  return (
    <Layout>
      <SEO
        title="Lush Eye Bar's eyebrow permanent makeup services."
        description="Lush Eye Bar provides people many ways to make their eyebrow permanent makeup look clean and natural."
      />
      <Mobile_brows />
      <Desktop_brows />
    </Layout>
  )
}

export default Eyebrows

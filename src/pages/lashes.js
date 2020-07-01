import React from "react"
import Layout from "../components/layout"
import Mobile_lashes from "./lashes/Mobile_lashes"
import Desktop_lashes from "./lashes/Desktop_lashes"

const Lashes = () => {

  return (
    <Layout>
      <Mobile_lashes />
      <Desktop_lashes />
    </Layout>
  )
}

export default Lashes

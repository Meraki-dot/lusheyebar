import React from "react"
import Layout from "../components/layout"
import Mobile_tattoo from "./tattoo_removal/Mobile_tattoo"
import Desktop_tattoo from "./tattoo_removal/Desktop_tattoo"

const Tattoo_Removal = () => {

  return (
    <Layout>
      <Mobile_tattoo />
      <Desktop_tattoo />
    </Layout>
  )
}

export default Tattoo_Removal

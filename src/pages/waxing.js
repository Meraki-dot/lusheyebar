import React from "react"
import Layout from "../components/layout"
import Mobile_waxing from "./waxing/Mobile_waxing"
import Desktop_waxing from "./waxing/Desktop_waxing"


const Waxing = () => {

  return (
    <Layout>
     <Mobile_waxing />
     <Desktop_waxing />
    </Layout>
  )
}

export default Waxing

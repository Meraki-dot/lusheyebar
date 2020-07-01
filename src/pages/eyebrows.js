import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Touch_up from "../images/Ombre.jpg"
import Correction from "../images/Correction.jpg"
import Ombre from "../images/Touch_up.jpg"
import Mobile_brows from "./brows/Mobile_brows"
import Desktop_brows from "./brows/Desktop_brows"

const Eyebrows = () => {

  return (
    <Layout>
      <Mobile_brows />
      <Desktop_brows />
    </Layout>
  )
}

export default Eyebrows

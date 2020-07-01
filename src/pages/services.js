import React from "react"
import Layout from "../components/layout"
import Mobile_services from "./services/mobile_services"
import Desktop_services from "./services/desktop_services"

const Services = () => (
  <Layout>
    <Mobile_services />
    <Desktop_services />
  </Layout>
)

export default Services

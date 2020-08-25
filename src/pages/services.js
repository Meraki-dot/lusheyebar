import React from "react"
import Layout from "../components/layout"
import Mobile_services from "./services/mobile_services"
import Desktop_services from "./services/desktop_services"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
     <SEO
      title="Lush Eye Bar | Eyelash Extension Services"
    />
    <Mobile_services />
    <Desktop_services />
  </Layout>
)

export default Services

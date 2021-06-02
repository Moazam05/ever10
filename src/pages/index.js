import React from "react"
import Layout1 from './../components/layout/layout-1'
import SEO from './../components/seo/seo'
import Home from "../components/home"

const IndexPage = () => (
  <Layout1>
    <SEO title="Home" />
    <Home />
  </Layout1>
)

export default IndexPage

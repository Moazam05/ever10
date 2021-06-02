import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header1 from "../header-1/header"
import Footer1 from "../footer-1"

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "../../../static/myriad-pro/style.css"
import "./layout.css"

const Layout1 = ({ children, mainClass }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header1 siteTitle={data.site.siteMetadata.title} />
      <main className={mainClass}>{children}</main>
      <Footer1 />
    </>
  )
}

Layout1.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout1

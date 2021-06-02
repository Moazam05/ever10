import React from "react"
import PropTypes from "prop-types"

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "../../../static/myriad-pro/style.css"
import "./layout.css"
import Header2 from './../header-2/index';
import Footer2 from "../footer-2"

const Layout2 = ({ children }) => {

  return (
    <>
      <Header2 />
      <main>{children}</main>
      <Footer2 />
    </>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2

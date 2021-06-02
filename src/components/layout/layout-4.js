import React from "react"
import PropTypes from "prop-types"

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "../../../static/myriad-pro/style.css"
import 'video-react/dist/video-react.css'
import "./layout.css"
import Header4 from './../header-4/index'
import Footer4 from './../footer-4/index'

const Layout4 = ({ children }) => {

  return (
    <>
      <Header4 />
      <main>{children}</main>
      <Footer4 />
    </>
  )
}

Layout4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout4

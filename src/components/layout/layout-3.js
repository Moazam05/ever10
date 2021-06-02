import React from "react"
import PropTypes from "prop-types"

import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"
import "../../../static/myriad-pro/style.css"
import 'video-react/dist/video-react.css'
import "./layout.css"
import Header3 from './../header-3/index'
import Footer3 from './../footer-3/index'

const Layout3 = ({ children }) => {

  return (
    <>
      <Header3 />
      <main>{children}</main>
      <Footer3 />
    </>
  )
}

Layout3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout3

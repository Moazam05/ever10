import React from "react"
import Layout1 from '../components/layout/layout-1'
import SEO from '../components/seo/seo'

const NotFoundPage = () => (
  <Layout1>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-5 mb-5">
          <h1 className="font-weight-bold">404</h1>
          <h1 className="font-weight-bold">NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout1>
)

export default NotFoundPage

import React from 'react'

const GetYourAppSection = () => (
  <section id="splittable-get-your-app-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 splittable-get-your-app-wrap">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid w-100" src={require("../../../../static/img/splittable/get-your-app.png")} alt="Get Your App" />
            </div>
            <div className="col-6 mt-auto mb-auto p-0">
              <div className="splittable-get-your-app-text ml-3 mr-3">
                <a className="btn d-flex" href="https://apps.apple.com/gb/app/splittable/id1425985751">
                  <div className="mt-auto mb-auto mr-2"><i className="fa fa-apple" /></div>
                  <div>Download on the<br />App Store</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default GetYourAppSection;
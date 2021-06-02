import React from 'react'

const GetYourAppSection = () => (
  <section id="howsjay-get-your-app-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 d-flex howsjay-get-your-app-wrap">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid w-100" src={require("../../../../static/img/howjsay/mob-img-5.png")} alt="Get Your App" />
            </div>
            <div className="col-6 mt-auto mb-auto p-0">
              <div className="howsjay-get-your-app-text ml-3">
                  <span className="app-link">
                    <a className="btn d-flex" href="https://apps.apple.com/gb/app/howjsay/id333252081" style={{'width':'170px'}}>
                      <div className="mt-auto mb-auto mr-2"><i className="fa fa-apple" aria-hidden="true"></i></div>
                      <div>Download on<br/> Apple Store</div>
                    </a>
                  </span>
                  <span className="app-link pl-md-2 mt-3">
                    <a className="btn d-flex" href="https://play.google.com/store/apps/details?id=com.howjsay.search" style={{'width':'170px'}}>
                      <div className="mt-auto mb-auto mr-2"><i className="fa fa-play" aria-hidden="true"></i></div>
                      <div>Download on<br/> Google Play</div>
                    </a>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default GetYourAppSection;
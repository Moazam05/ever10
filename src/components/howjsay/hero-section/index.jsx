import React from 'react'

const HeroSection = () => (
  <section id="howjsay-hero-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6 howjsay-hero-text mt-2 mt-lg-auto mb-lg-auto">
          <h1>Howjsay</h1>
          <p>
            Over 180,000 words & phrases, carefully researched and professionally recorded
          </p>
          <span className="w-100">
            <div className="d-flex app-links justify-content-center justify-content-md-start">
              <span className="app-link">
                <a className="btn d-flex" href="https://apps.apple.com/gb/app/howjsay/id333252081" style={{'width': '170px'}}>
                  <div className="mt-auto mb-auto mr-2"><i className="fa fa-apple" aria-hidden="true"></i></div>
                  <div>Download on the<br/>Apple Store </div>
                </a>
              </span>
              <span className="app-link ml-3">
                <a className="btn d-flex" href="https://play.google.com/store/apps/details?id=com.howjsay.search" style={{'width': '170px'}}>
                  <div className="mt-auto mb-auto mr-2"><i className="fa fa-play" aria-hidden="true"></i></div>
                  <div>Download on<br/> Google Play </div>
                </a>
              </span>
            </div>
          </span>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={require("../../../../static/img/howjsay/hero-mob-img.png")} alt="Hero Image" />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection;
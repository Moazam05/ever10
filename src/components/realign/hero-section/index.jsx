import React from 'react'

import realign from "../../../../static/img/realign/realign.png"

const HeroSection = () => (
  <section id="splittable-hero-section-realign">
    <div className="container">
      <div className="row kk">
       

        <div className="col-lg-6 col-md-6 splittable-hero-text rea mt-5 mb-auto">
          <img src={realign} alt="realign" />
          <h1>fix your posture</h1>
          <p>
          Semper lacus cursus porta, feugiat primis luctus ultrice tellus potenti neque dolor primis in magna.
          </p>

          <ul className="desktop-app-realign">
            <li>
              <a className="btn d-flex app-link rea" href="https://apps.apple.com/gb/app/splittable/id1425985751">
                <div className="mt-auto mb-auto mr-2 pr-2"><i className="fa fa-apple" aria-hidden="true"></i></div>
                <div>Download on the<br/>App Store</div>
              </a>
            </li>
          </ul>
          {/* <div className="mobile-apple-realign-cc">

          <img src={require('../../../../static/img/realign/mobile-apple.png')} alt="" />
          </div> */}
        </div>
        {/* <div className="col-lg-6 col-md-6">
          <div className="circle-rea">

        <img className="" src={require("../../../../static/img/realign/circle.png")} alt="" />
          </div>
          </div> */}

          </div>
          {/* <div className="row">

        <div className="col-md-12 splittable-hero-img-mob">
          <img className="img-fluid" src={require("../../../../static/img/realign/background.png")} alt="" />
        </div>
        </div> */}
    </div>
  </section>
)

export default HeroSection;
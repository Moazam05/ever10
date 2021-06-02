import React from 'react'

const HeroSection = () => (
  <section id="splittable-hero-section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        </div>

        <div className="offset-lg-6 col-lg-6 splittable-hero-text mt-auto mb-auto">
          <h1>Splittable</h1>
          <p>
            Split bills easily with Splittable. Splittable automatically scans bills, making figuring out who owes what a breeze.
          </p>

          <ul>
            <li>
              <a className="btn d-flex app-link" href="https://apps.apple.com/gb/app/splittable/id1425985751">
                <div className="mt-auto mb-auto mr-2 pr-2"><i className="fa fa-apple" aria-hidden="true"></i></div>
                <div>Download on the<br/>Apple Store</div>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-12 splittable-hero-img-mob">
          <img className="img-fluid" src={require("../../../../static/img/splittable/hero-img.png")} alt="" />
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection;
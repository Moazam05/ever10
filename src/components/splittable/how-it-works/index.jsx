import React from 'react'

const HowItWorks = () => (
  <section id="splittable-how-it-works-section">
    <div className="container">
      <div className="row">
        <div className="col-12 splittable-how-it-works-content text-center">
          <header>
            <h1>HOW IT WORKS</h1>
            <hr />
          </header>
          <p>
            Simple bill splitting with Splittable
          </p>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="col-lg-2 splittable-how-to-work-process text-center p-0">
          <img className="img-fluid" src={require("../../../../static/img/splittable/scan-bill-icon.png")} alt="Bill Icon" />
          <h3>Scan the bill</h3>
          <p>Place the bill in view and scan using real time machine learning.</p>
        </div>

        <div className="col-lg-2 pt-5 text-center splittable-how-to-work-process-arrow">
          <img className="img-fluid img-desktop" src={require("../../../../static/img/splittable/arrow.png")} alt="arrow" />
          <img className="img-fluid img-mob" src={require("../../../../static/img/splittable/arrow-down.png")} alt="down arrow" />
        </div>

        <div className="col-lg-2 splittable-how-to-work-process text-center p-0">
          <img className="img-fluid" src={require("../../../../static/img/splittable/tap-item-icon.png")} alt="Tap Icon" />
          <h3>Tap items</h3>
          <p>Tap your items to select your share.</p>
        </div>

        <div className="col-lg-2 pt-5 text-center splittable-how-to-work-process-arrow">
          <img className="img-fluid img-desktop" src={require("../../../../static/img/splittable/arrow.png")} alt="arrow" />
          <img className="img-fluid img-mob" src={require("../../../../static/img/splittable/arrow-down.png")} alt="down arrow" />
        </div>

        <div className="col-lg-2 splittable-how-to-work-process text-center p-0">
          <img className="img-fluid" src={require("../../../../static/img/splittable/calculate-icon.png")} alt="Calculate Icon" />
          <h3>Total is automatically calculated</h3>
          <p>Your share of the tip, tax and total are automatically calculated.</p>
        </div>
      </div>
    </div>
  </section>
)

export default HowItWorks;

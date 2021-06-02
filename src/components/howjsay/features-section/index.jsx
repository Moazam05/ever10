import React from 'react'

const FeaturesSection = () => (
  <section id="howjsay-features-section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 howjsay-features-img-col">
          <img className="img-fluid" src={require("../../../../static/img/howjsay/mob-img-3.png")} alt="Features Image" />
        </div>

        <div className="col-lg-6 howjsay-features-content">
          <div className="howjsay-features-content-head">
            <h1>Features</h1>
            <hr /> <br />
            <p>
              Make mispronunciations a thing of the past with the world’s most accurate and comprehensive pronunciation dictionary.
            </p>
          </div>
          <div className="howjsay-features-content-body">
            <div className="container">
              <div className="row">
                <div className="col howjsay-feature-icon-wrap">
                  <img className="img-fluid" src={require("../../../../static/img/howjsay/link-icon.png")} alt="Link Icon" />
                </div>
                <div className="col-9">
                  <h3>Accurate pronunciation</h3>
                  <p>Each word is carefully researched and professionally recorded.</p>
                </div>
              </div>
              <div className="row">
                <div className="col howjsay-feature-icon-wrap">
                  <img className="img-fluid" src={require("../../../../static/img/howjsay/link-icon.png")} alt="Link Icon" />
                </div>
                <div className="col-9">
                  <h3>No synthetic pronunciation</h3>
                  <p>Pronunciation can be nuanced, which synthetic pronunciation may get wrong.</p>
                </div>
              </div>
              <div className="row">
                <div className="col howjsay-feature-icon-wrap">
                  <img className="img-fluid" src={require("../../../../static/img/howjsay/link-icon.png")} alt="Link Icon" />
                </div>
                <div className="col-9">
                  <h3>Comprehensive lexicon</h3>
                  <p>Including medical, legal, scientific, industry jargon and even current affairs and names.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FeaturesSection;
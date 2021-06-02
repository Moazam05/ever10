import React from 'react'

const CostumersTalking = () => (
  <section id="howjsay-costumer-taking-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 offset-lg-1 howjsay-costumer-taking-content">
          <header>
            <h3>No synthetic pronunciation </h3>
            <h1>Professionally recorded</h1>
            <hr />
          </header>
          <p>
            Make mispronunciations a thing of the past with the world’s most accurate and comprehensive pronunciation dictionary.
            Unlike most other apps no synthetic pronunciation is used, with every word carefully researched, and professionally recorded.
          </p>
        </div>

        <div className="col-lg-5 col-lg-6">
          <img className="img-fluid" src={require("../../../../static/img/howjsay/mob-img-2.png")} alt="Customers Talking" />
        </div>
      </div>
    </div>
  </section>
)

export default CostumersTalking;

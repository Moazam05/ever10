import React from 'react'
// import {Player, BigPlayButton, ControlBar} from 'video-react'
import "video-react/dist/video-react.css"
import point from "../../../../static/img/realign/point.png"

const WhyItMatters = () => (
  <section id="howjsay-costumer-taking-section rea">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 offset-lg-1 howjsay-costumer-taking-content rea">
          <header>
            <h3>Alignment, </h3>
            <div className="why-rea">Why it matters</div>
              
            {/* <h1>Professionally recorded5</h1> */}
            <hr />
          </header>
          <div className="mobile-bar-rea">
<img className="mobile-bar" src={require('../../../../static/img/realign/mobile-bar.png')} alt="" />
          </div>
          <p>
            Make mispronunciations a thing of the past with the world’s most accurate and comprehensive pronunciation dictionary.
            Unlike most other apps no synthetic pronunciation is used, with every word carefully researched, and professionally recorded.
          </p>

   

     
    <ul className="rea">
      <li className="rea"><img src={point} className="rea" alt="point1" /><p>Pain free</p></li>
      <li className="rea"><img src={point} className="rea" alt="point1" /><p>Look more confident
</p></li>
      <li className="rea"><img src={point} className="rea third" alt="point1" /><p>Feel more confident (studies show that...)</p></li>
      {/* <p className="rea">that...)</p> */}
    </ul>
</div>
        <div className="col-lg-5 col-lg-6">
          <div className="allignment-rea">

          <img className="img-fluid" src={require("../../../../static/img/realign/alignment.png")} alt="Allignment Matters" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhyItMatters;
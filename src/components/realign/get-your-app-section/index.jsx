import React from 'react'

const GetYourAppSection = () => (

  <>
  <div className="container">
    <div className="row get-rea" 
    // style={{marginTop:"130px"}}
    >
      <div className="col-lg-6">

        <div className="appstore-rea">

      <img  src={require("../../../../static/img/realign/appstoreimg.png")} alt="App Store Img" />
        </div>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-5">
        <div className="mbl-dwn-app">

        <div className="dwn-rea">Download on the</div>
        <div className="apst-rea">APP STORE</div>
        </div>
        <div className="mobile-rea">
      <img  src={require("../../../../static/img/realign/mobile.png")} alt="Mobile Img" />
        </div>
      </div>
    </div>
  </div>
  </>
)

export default GetYourAppSection;
import React from 'react'
import { Link } from 'gatsby';
import "./index.css"

const Home = () => (
  <section id="ever-10-body-content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 ever-10-body-content-head">
          <h1>Our Apps</h1>
        </div>
      </div>

      <div className="row pl-lg-3 pr-lg-3 mt-4">
        <div className="col-lg-6 ever-10-howjsay-wrapper">
          <div className="ever-10-howjsay-inner-wrapper">
            <h3>Pronunciation</h3>
            <h2>Howjsay</h2>
            <p>Professional English pronunciation, individually recorded.</p>
            <Link className="btn ever-10-howjsay-btn" to="/howjsay">Learn more</Link>
            <img className="img-fluid" src={require("../../../static/img/home/howjsay-home.png")} alt="Howjsay" />
          </div>
        </div>

        <div className="col-lg-6 ever-10-splitbills-wrapper">
          <div className="ever-10-splitbills-inner-wrapper">
            <h3>Split Bills</h3>
            <h2>Splittable</h2>
            <p>Easy bill splitting.</p>
            <Link className="btn ever-10-splitbills-btn" to="/splittable">Learn more</Link>
            <img className="img-fluid" src={require("../../../static/img/home/splittable-home.png")} alt="Splittable" />
          </div>
        </div>
      </div>
    </div>
  </section>

)

export default Home;
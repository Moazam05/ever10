import React from 'react';
import "./index.css"
import {Link} from "gatsby";

const Footer3 = () => (
    <footer id="splittable-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 splittable-footer-widget">
            <a className="navbar-brand mb-5" href="#">
              <img className="img-fluid" src={require("../../../static/img/splittable/logo.png")} alt="Logo"/>
            </a>
          </div>
        </div>

        <div className="row splittable-copyright-wrap">
          <div className="col-md-6 splittable-footer-copyright">
            <p>© 2021 <a href="#">Ever10</a>. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 splittable-footer-terms-wrap">
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><Link to="/eula ">End User License Agreement</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer3;
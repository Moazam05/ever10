import React from 'react';
import "./index.css"
import {Link} from "gatsby";

const Footer2 = () => (
    <footer id="howjsay-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 howjsay-footer-widget">
            <a className="navbar-brand mb-5" href="#">
              <img className="img-fluid" src={require("../../../static/img/howjsay/footer-logo.png")} alt="Logo"/>
            </a>
          </div>
        </div>

        <div className="row howjsay-copyright-wrap">
          <div className="col-md-6 howjsay-footer-copyright">
            <p>© 2021 <a href="#">Ever10</a>. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 howjsay-footer-terms-wrap">
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/eula ">End User License Agreement</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer2;
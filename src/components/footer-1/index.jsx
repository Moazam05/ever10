import React from 'react';
import "./index.css"
import {Link} from "gatsby";


const Footer1 = () => (
    <footer id="ever-10-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ever-10-footer-widget">
            <Link className="navbar-brand mb-5" to="/">
              <img className="img-fluid" src={require("../../../static/img/home/ever-10-logo.png")} alt="Logo"/>
            </Link>
          </div>
        </div>

        <div className="row ever-10-copyright-wrap">
          <div className="col-md-6 ever-10-footer-copyright">
            <p>© 2021 <Link to="/">Ever10</Link>. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 ever-10-footer-terms-wrap">
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/eula ">End User License Agreement</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer1;
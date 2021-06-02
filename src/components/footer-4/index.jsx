import React from 'react';
import "./index.css"
import {Link} from "gatsby";

const Footer4 = () => (
  <>
    <footer id="splittable-footer-realign">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center splittable-footer-widget rea">
            <a className="navbar-brand mb-5" href="#">
              <img className="img-fluid" src={require("../../../static/img/splittable/logo.png")} alt="Logo"/>
            </a>
          </div>
        </div>

        <div className="row splittable-copyright-wrap">
          <div className="col-md-6 splittable-footer-copyright rea" 
          // style={{paddingLeft:"0px"}}
          >
            <p>© 2021 <a href="#">Ever10</a>. All Rights Reserved.</p>
          
          </div>
          <div className="col-md-6 splittable-footer-terms-wrap rea" 
          >
            <ul>
            <li><a href="#">Terms  & Conditions</a>  <span className="ml-2 mr-2">|</span> </li>
              <li><a href="/privacy-policy">Privacy Policy</a>   <span className="ml-2 mr-2">|</span> </li>
              <li><Link to="/eula ">Cookie Policy</Link></li>
            </ul>
          </div>

        
        </div>

      </div>
    </footer>
{/* Mobile Footer */}
<div id="splittable-footer-realign-mobile">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center splittable-footer-widget rea">
            <a className="navbar-brand mb-5" href="#">
              <img className="img-fluid" src={require("../../../static/img/splittable/logo.png")} alt="Logo"/>
            </a>
          </div>
        </div>

        <div className="row splittable-copyright-wrap">
          <div className="col-md-6 splittable-footer-copyright rea" 
          // style={{paddingLeft:"0px"}}
          >
            <p>© 2021 <a href="#">Ever10</a>. All Rights Reserved.</p>
          
          </div>
          <div className="col-md-6 splittable-footer-terms-wrap rea" 
          // style={{paddingRight:"0px"}}
          >
         
            <ul>
            <li><a href="#">Terms  & Conditions</a>  <span className="ml-2 mr-2">|</span> </li>
              <li><a href="/privacy-policy">Privacy Policy</a>   <span className="ml-2 mr-2">|</span> </li>
              <li><Link to="/eula ">Cookie Policy</Link></li>
            </ul>
            <div 
            // className="mt-5"
             style={{marginBottom:"50px"}}></div>
          </div>
        </div>
      </div>
          </div>

            </>
)

export default Footer4;
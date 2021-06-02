import React, {useEffect, useState} from "react"
import {Link} from 'gatsby'
import {Modal} from 'reactstrap'
import ContactForm from './../contact-form/index'
import "./index.css"

const Header1 = () => {
  const [toggle, setToggle] = useState(false)
  const Toggle = () => setToggle(!toggle)

  const [modal, setModal] = useState(false);
  const modalToggle = () => {
    if (modal && location.href.includes('#contact')){
      location.href = '#'
    }
    setModal(!modal);
  }

  useEffect(() => {
    if (location.href.includes('#contact')) {
      setModal(true)
    }
  })

  return (
    <>
      <header id="ever-10-header-desktop">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <Link to="/" className="navbar-brand">
              <img className="img-fluid" src={require("../../../static/img/home/ever-10-logo.png")} alt="Logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link ml-lg-4">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/howjsay" className="nav-link ml-lg-4">Howjsay</Link>
                </li>
                <li className="nav-item">
                  <Link to="/splittable" className="nav-link ml-lg-4">Splittable</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link ml-lg-4">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/realign" className="nav-link ml-lg-4">Realign</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link ml-lg-4 ever-10-contact-modal" onClick={modalToggle}>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <header id="ever-10-header-mob">
        <div className="container">
          <div className="row">
            <div className="col-2 ever-10-header-mob-toggle text-center mt-auto mb-auto">
              <a onClick={Toggle}><i className="btn fa fa-bars mob-toggle"/></a>
            </div>

            <div className="col-6 ever-10-header-mob-logo text-center">
              <Link to="/">
                <img className="img-fluid" src={require("../../../static/img/home/ever-10-logo.png")} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {toggle &&
        (<div id="ever-10-sidenav" className="ever-10-sidenav">
          <a className="closebtn" onClick={Toggle}>&times;</a>
          <Link to="/">Home</Link>
          <Link to="/howjsay">Howjsay</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/splittable">Splittable</Link>
          <Link to="/realign">Realign</Link>
          <a className="ever-10-contact-modal" onClick={modalToggle}>Contact</a>
        </div>)
      }

      <div>
        <Modal isOpen={modal} toggle={modalToggle}>
          <div className="text-right">
            <a className="btn modal-closebtn mr-1" onClick={modalToggle}>&times;</a>
          </div>
          <div className="pt-lg-3 pl-lg-5 pb-lg-5 pr-lg-5 p-3">
            <ContactForm />
          </div>
        </Modal>
      </div>
    </>
  )
}


export default Header1

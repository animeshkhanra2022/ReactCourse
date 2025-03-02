import React from 'react'
// import { Link } from 'react-router-dom'
// import React, {useState} from 'react'

export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">About</a>
          </li>
        </ul>
          {/* <button type="button" class="btn btn-secondary mx-2" onClick={props.gray}>Secondary</button>
          <button type="button" class="btn btn-success mx-2" onClick={props.toggleModeGreen}>Success</button>
          <button type="button" class="btn btn-danger mx-2" onClick={props.toggleModeRed}>Danger</button>
          <button type="button" class="btn btn-warning mx-2" onClick={props.toggleModeYellow}>Warning</button> */}
          
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark': 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </nav>
  )
}

// Navbar.propstypes = {
//   title: PropTypes.string.isRequired,
//   home: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//   title: 'set title here',

// }
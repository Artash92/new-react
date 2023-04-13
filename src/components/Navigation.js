import React from 'react'
import { NavLink } from 'react-router-dom';



function Navigation() {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo" style={{ position: 'fixed', top: 0, left: 0, padding: '20px' }}>
            Codeex
          </h1>
          <nav id="navbar" className="navbar" style={{ position: 'fixed', top: '20px', right: 0, padding: '20px' }}>
            <ul>
              <li className="nav-item">
                <NavLink to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about'>
                  About US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/services'> 
                  Services
                </NavLink>
              </li>
            </ul> 
          </nav>
        </div>
      </header>
    </div>
  )
}





export default Navigation;
























{/*
function Navigation() {
  return (
    <div>
      {/* <!-- ======= Header ======= -->  
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">Codeex</h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/about'>
                  About US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/services'> 
                  Services
                </NavLink>
              </li>
              {/*<li className="nav-item"><a className="nav-link" href="#">Sections</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul> 
          </nav>*/}
          {/* <!-- .navbar -->  
        </div>
      </header>
      {/* <!-- End Header --> 
  )
}



*/}

import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <h2 className="navTitle" href="/">News24</h2>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li>
              <a className="navMenu" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li>
              <a className="navMenu" href="/">About</a>
            </li>                                                                                     
          <li>
              <a className="navCat" href="/">General</a>
            </li>  
            <li className="nav-item">
              <a className="navCat" href="/">Entertainment</a>
            </li>  
            <li className="nav-item">
              <a className="navCat" href="/">Business</a>
            </li>  
            <li className="nav-item">
              <a className="navCat" href="/">Health</a>
            </li>  
            <li className="nav-item">
              <a className="navCat" href="/">Science</a>
            </li>  
            <li className="nav-item">
              <a className="navCat" href="/">Sports</a>
            </li>  
            <li className="nav-item">
              <a className="navCat" href="/">Technology</a>
            </li> 
          </ul>
        </div>
      </nav>
    )
  }
}

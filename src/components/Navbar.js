import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h2 className="navTitle" to="/">News24</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="navMenu" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li>
                            <Link className="navCat" to="/General">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navCat" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navCat" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navCat" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navCat" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navCat" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navCat" to="/technology">Technology</Link>
                        </li>
                    </ul>
                </div>
                <div id="mainul"><ul style={{marginBottom:"0px"}} >
                    <li  className="countrydrop" id="cntry"><span id="cntryicon">Country &#11163;</span>
                        <ul className="dropdown">
                            <li className="countrydrop dropli"><a href="/">India</a></li>
                            <li className="countrydrop dropli"><a href="/">America</a></li>
                            <li className="countrydrop dropli"><a href="/">China</a></li>
                            <li className="countrydrop dropli"><a href="/">Australia</a></li>
                            <li className="countrydrop dropli"><a href="/">Japan</a></li>
                            <li className="countrydrop dropli"><a href="/">Italy</a></li>
                            <li className="countrydrop dropli"><a href="/">Mexico</a></li>
                        </ul>
                    </li>
                </ul></div>
            </nav>
        )
    }
}

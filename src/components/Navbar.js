import React, { useContext } from 'react'
import {
    Link
} from "react-router-dom";
import CountryContext from '../context/cntryContext';

export default function Navbar() {
    const context = useContext(CountryContext);
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <h2 className="navTitle" to="/">News24</h2>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="navMenu" to="/">Home</Link>
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
                <div ><ul id="mainul" style={{marginBottom:"0px"}} >
                    <li  className="countrydrop" id="cntry"><div id="cntryicon">Country &#11163;</div>
                        <ul className="dropdown">
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"in"})}}>India</button>
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"us"})}}>America</button>
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"mx"})}}>Mexico</button>
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"cn"})}}>China</button>
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"au"})}}>Australia</button>
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"jp"})}}>Japan</button>
                            <button className="countrydrop dropli" onClick={()=>{context.setState({"country":"fr"})}}>Korea</button>
                        </ul>
                    </li>
                </ul></div>
                </div>
            </nav>
        )
    
}

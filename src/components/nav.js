import React from "react";
import {Link} from "react-router-dom";
import  "./nav.css";

const NavBar = () => {  
    return(
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">LOGO</Link>
            </div>

            <div className="link-panel">
                <Link to="/about">About</Link>
                <Link to="/filmpage">Contact</Link>
            </div>


        </div>
        
    )
}

export default NavBar;
import React from "react";
import {Link} from "react-router-dom";
import Search from "../assets/search.png";  //<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
import  "./nav.css";

const NavBar = () => {  
    return(
        <div className="nav-bar">
            <div className="logo">
                <Link to="/">LOGO</Link>
            </div>
            <div className="link-panel">
                <Link to="/catalog"><img src={Search} className="search-icon" alt="search icon" /></Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;
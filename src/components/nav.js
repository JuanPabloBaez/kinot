import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/logo-white.svg"
import Search from "../assets/search.png";  //<div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
import  "./nav.css";

const NavBar = () => {  
    return(
        <div className="nav-bar">
            
                <Link to="/" className="logo-link"><img src={Logo} className="logo" alt="beatkino logo" /></Link>
            
            <div className="link-panel">
                <Link to="/catalog"><img src={Search} className="search-icon" alt="search icon" /></Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;
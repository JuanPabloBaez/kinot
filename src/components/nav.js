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
                <Link to="/catalog">
                    <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                    <circle cx="14" cy="14" r="12" />
                    <path d="M23 23 L30 30"  />
                    </svg>
                </Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;
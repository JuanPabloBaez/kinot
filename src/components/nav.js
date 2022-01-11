import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { update } from '../langReducer'
import {Link} from "react-router-dom";
import  "./nav.css";

const NavBar = () => {  
    const lang = useSelector((state) => state.lang.value)
    const dispatch = useDispatch()
    

    return(
        <div className="nav-bar">
            
                <Link to="/" className="logo-link"><h1 className="logo">beAtKinO</h1></Link>
            
            <div className="link-panel">
                <Link to="/catalog">
                    <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                        <circle cx="14" cy="14" r="12" />
                        <path d="M23 23 L30 30"  />
                    </svg>
                </Link>
                <Link to="/about">{lang==="eng" ?"About":"Acerca"}</Link>
                <Link to="/contact">{lang==="eng" ?"Contact":"Contacto"}</Link>
                <button className='lang' onClick={()=>dispatch(update(lang==="eng"? "esp" : "eng"))}  >{ lang==="eng" ? <p><b>ENG</b>/esp</p> : <p>eng/<b>ESP</b></p>}</button>
            </div>
        </div>
    )
}

export default NavBar;
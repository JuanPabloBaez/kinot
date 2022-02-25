import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLang } from "../redux/actions/langActions";
import {Link} from "react-router-dom";


const NavBar = () => {  
    const lang = useSelector((state) => state.lang.lang);
    const dispatch = useDispatch();
    const [isListDown, setIsListDown] = useState(false);

   
    return(
        <div className="nav-bar">
                <Link to="/" className="logo-link"><h1 className="logo">beAtKinO</h1></Link>
            <div className="link-panel">
                <Link to="/catalog" aria-label="catalog">
                    <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                        <circle cx="14" cy="14" r="12" />
                        <path d="M23 23 L30 30"  />
                    </svg>
                </Link>
                <div className="dropdown-menu">
                    <button onClick={() => setIsListDown(!isListDown)} className={isListDown===true?"dropbtn active":"dropbtn"}>+</button>
                       { isListDown &&
                       <div id="myDropdown" className="dropdown-content">
                        <Link  to="/about" onClick={() => setIsListDown(false)} >{lang==="eng" ?" About ":" Acerca "}</Link>
                        <Link  to="/contact"onClick={() => setIsListDown(false)}>{lang==="eng" ?" Contact ":" Contacto "}</Link>
                        </div>
                        }
                </div>
                <Link className="normal-menu" to="/about">{lang==="eng" ?"About":"Acerca"}</Link>
                <Link className="normal-menu" to="/contact">{lang==="eng" ?"Contact":"Contacto"}</Link>
                <button className='lang' onClick={()=>dispatch(setLang(lang==="eng"? "esp" : "eng"))}  >{ lang==="eng" ? <p><b>ENG</b>/esp</p> : <p>eng/<b>ESP</b></p>}</button>
            </div>
        </div>
    )
}

export default NavBar;
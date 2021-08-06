import React, { useRef } from "react";
import {Link} from "react-router-dom";
import "./mainSlide.css";
import Card from "./Card";

 function SubSliderC ({listC}) {
  
    const slideRefC = useRef(null);

    function handlePrev (e) {
      slideRefC.current.scrollLeft += -400; 
    }
    function handleNext (e) {  
      slideRefC.current.scrollLeft += 400; 
    }
  
    return(
      <div className="subslide-container" ref={slideRefC} >
         <button className="subSlide-button button-prev" onClick={handlePrev}>
          <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="130" fill="none" stroke="hsla(0, 0%, 100%, 0.9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">
            <path d="M20 30 L8 16 20 2" />
          </svg>
        </button>
        {  
          listC.map((film, index) => {          
            if (film.active === true) {
              return(
                <div className="sub-card-container" key={index}>
                  <Link to={`/film/${film.slug}`}>
                    <div className="card-overlay"> 
                      <h5>{film.title}</h5>
                      <p>{film.runtime} min.</p>
                      <p>{film.country}</p>
                    </div> 
                    <Card film={film}   />
                  </Link>
                </div>)            
              } return null
          }).reverse() 
        }        
        <button className="subSlide-button button-next" onClick={handleNext}>
          <svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="130" fill="none" stroke="hsla(0, 0%, 100%, 0.9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">
            <path d="M12 30 L24 16 12 2" />
          </svg>
        </button>
      </div>
    ) 
 }

 export default SubSliderC;

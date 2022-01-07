import React, { useRef } from "react";
import {Link} from "react-router-dom";
import "./mainSlide.css";
import Card from "./Card";

 function SubSliderB ({listB}) {
  const slideRefB = useRef(null);
    
    function handlePrev (e) {
      slideRefB.current.scrollLeft += -400; 
    }
    function handleNext (e) {  
      slideRefB.current.scrollLeft += 400; 
    }
  
    return(
      <div className="subslide-container" ref={slideRefB}  >
         <button className="subSlide-button button-prev" onClick={handlePrev}>
          <svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="60" height="130" fill="none" stroke="hsla(0, 0%, 100%, 0.9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6">
            <path d="M20 30 L8 16 20 2" />
          </svg>
        </button>
        {  
          listB.map((film, index) => {          
            if (film.active === true) {
              return(
                <Card film={film} key={index}   />
              )} return null
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

 export default SubSliderB;

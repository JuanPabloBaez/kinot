import React, { useRef } from "react";
import Card from "./Card";


 function SubSliderA ({list}) {
    const slideRef = useRef(null);
  
    function handlePrev (e) {
      slideRef.current.scrollLeft += -400; 
    }
    function handleNext (e) {  
      slideRef.current.scrollLeft += 400; 
    }
  
    return(
      <div className="subslide-container" ref={slideRef}  >
         <button className="subSlide-button button-prev" onClick={handlePrev} aria-label="slider previous">
        <div className="swiper-button-prev"></div>
        </button>
        
        {  
          list.map((film, index) => {          
              return(
                <Card film={film} key={index} />
              )
          })
        } 
       
        <button className="subSlide-button button-next" onClick={handleNext} aria-label="slider next">
        <div className="swiper-button-next"></div>
        </button>
      </div>
    ) 
 }

 export default SubSliderA;

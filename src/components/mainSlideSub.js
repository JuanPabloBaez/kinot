import React, { useRef } from "react";
import "./mainSlide.css";
import Card from "./Card";


 function SubSlider ({list}) {
    const slideRef = useRef(null);
  

    console.log(slideRef);

    function handlePrev (e) {
     
      console.log(slideRef);
      slideRef.current.scrollLeft += -400;
     
    }
    function handleNext (e) {
      
      console.log(slideRef);
      slideRef.current.scrollLeft += 400; 

    }
  
   
    return(
      <div id="subSlide" className="subslide-container" ref={slideRef}  >
        <button className="subSlide-button button-prev" onClick={handlePrev}>prev</button>

        {  
          list.map((film, index) => {          
            if (film.Id !== "") {
              return <Card className="card-sub" film={film} key={index}  />
            }
          }) 
        }
       


        
        <button className="subSlide-button button-next" onClick={handleNext}>next</button>
      </div>
    ) 
 }

 export default SubSlider;

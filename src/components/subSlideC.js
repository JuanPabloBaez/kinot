import React, { useRef } from "react";
import "./mainSlide.css";
import Card from "./Card";
import Arrow from "../assets/Arrow.png"; // <a target="_blank" href="https://icons8.com/icon/99967/upward-arrow">Upward Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>      //<a target="_blank" href="https://icons8.com/icon/88110/chevron-left">Chevron Left</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>



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
        <button className="subSlide-button button-prev" onClick={handlePrev}><img src={Arrow} alt="Gallery previous" /></button>
        {  
          listC.map((film, index) => {          
            if (film.Id !== "") {
              return <Card className="card-sub" film={film} key={index}  />
            }
          }).reverse() 
        }        
        <button className="subSlide-button button-next" onClick={handleNext}><img src={Arrow} alt="Gallery previous" /></button>
      </div>
    ) 
 }

 export default SubSliderC;

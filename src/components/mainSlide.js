import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import FilmGallery from "./filmGallery";
import RightArrow from "../assets/right-arrow.png"; // <a target="_blank" href="https://icons8.com/icon/99967/upward-arrow">Upward Arrow</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
import "./mainSlide.css";


function MainSlider ({list}) {
    const [current, setCurrent] = useState(0);
    const [featured, setFeatured] = useState([]);


    useEffect(()=> {
      function getSelection () {
        const featList = list.filter(film => film.featured === true);
        setFeatured(featList);
        return
      };  
      getSelection();

    },[list]) 

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current === featured.length - 1 ? 0 : current + 1)
      },10000);
      return () => clearInterval(interval);
    },[current, featured.length ])
   
    
    

    const nextSlide = () => {
      setCurrent( current === featured.length - 1 ? 0 : current + 1);
      
      //current.style.transform= "translateX(100%)";
    };

    const prevSlide = () => {
      setCurrent( current === 0 ? featured.length - 1 : current - 1);
    }
    
    
    
 
  return (
    <section className='main-slider'>
      <button className="left-arrow" onClick={prevSlide}><img src={RightArrow} alt="Gallery previous" /></button>
      <button className="right-arrow" onClick={nextSlide}><img src={RightArrow} alt="Gallery next" /></button>
      {
        featured.map((film, index)=> {
           /*  const slideImg = require("../images/" + film.Id + "frameA.jpg");   */ 
            return(
              <div className={index=== current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <>
                  <Link to={`/film/${film.slug}`}>
                  <div className="slide-text">
                    <div className="slide-header">
                      <h1>{film.title}</h1>
                      <p className='slide-info'>{film.year} / {film.country} / {film.runtime} min.</p>
                    </div>
                    <p className="slide-synopsis">{film.synopsis}</p>
                  </div>
                  </Link>
                  
                    <FilmGallery film={film} /> 
                  
                  </>
                )}     
              </div>
            ) 
          }       
        ).reverse()
      }
    </section>
  )
}

export default MainSlider;

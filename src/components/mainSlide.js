import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";
import "./mainSlide.css";


function MainSlider () {
    const [current, setCurrent] = useState(0);
    const [featured, setFeatured] = useState([]);
    const lang = useSelector((state) => state.lang.lang)
    const list = useSelector((state) => state.list.list);


    useEffect(()=> {
      function getSelection () {
        const featList = list.filter(film => film.featured === true);
        setFeatured(featList);
        return
      };  
      getSelection();
    },[list]);
    
    

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current === featured.length - 1 ? 0 : current + 1)
      },10000);
      return () => clearInterval(interval);
    },[current, featured.length ])
   
    const nextSlide = () => {
      setCurrent( current === featured.length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
      setCurrent( current === 0 ? featured.length - 1 : current - 1);
    }
    
    
  return (
    <section className='main-slider'>
      <button className="left-arrow" onClick={prevSlide}>
        <svg id="i-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
          <path d="M10 6 L2 16 10 26 M2 16 L30 16" />
        </svg>
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
          <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
        </svg>
      </button>
      {
        featured.map((film, index)=> {
          const filmFrame = require("../images/" + film.Id + "frameA.jpg");
          

            return(
              <div className={index=== current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                  <>
                  <Link to={`/film/${film.slug}`}>
                    <div className="slide-text">
                      <div className="slide-header">
                        <h1>{lang === "eng" ? film.title_eng : film.title_esp}</h1>
                        <p className='slide-info'>{film.year} / {film.country} / {film.runtime} min.</p>
                      </div>
                      <p className="slide-synopsis">{lang==="eng" ? film.log_line_eng: film.log_line_esp}</p>
                    </div>
                  </Link>
                  <img className='page-poster' 
                  src={filmFrame.default}
                  alt={film.title_eng}
                  title={film.title_eng}
                  /> 
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

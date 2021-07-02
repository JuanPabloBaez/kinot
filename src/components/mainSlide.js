import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
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

    },[]) 

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent(current === featured.length - 1 ? 0 : current + 1)
      },5000);
      return () => clearInterval(interval);
    },[current])
   
    
    

    

    const nextSlide = () => {
      setCurrent( current === 3 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent( current === 0 ? 3 : current - 1);
    }
    
    
    
 
  return (
    <section className='main-slider'>
      <button className="left-arrow" onClick={prevSlide}>prev</button>
      <button className="right-arrow" onClick={nextSlide}>next</button>
      {
        featured.map((film, index)=> {
            const slideImg = require("../images/" + film.Id + "frameA.jpg");
              
            return(
              <div className={index=== current ? 'slide active' : 'slide'} index={index}>
                
                {index === current && (
                  <>
                  <Link to={`/filmpage/${film.slug}`}>
                  <div className="slide-text">
                  <h1>{film.title}</h1>
                  <p>{film.synopsis}</p>
                  </div>
                  </Link>
                  <img src={slideImg.default} alt="film frame" className="main-slider-pic" />
                  </>
                  )}
                  
     
              </div>
            ) 
          }
        
          
          
        )
      }
    </section>
  )
}

export default MainSlider;
/* 
export default class MainSlider extends Component {

  render() {
    
    const settings = {
      className:"mainSlide",
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    
    return (
      <div className={"slider-wrap"}>
        <Slider {...settings}>
         
         {this.props.list.map((film, index) =>{

           if (film.featured === true) {
            const slideImg = require("../images/" + film.Id + "frameA.jpg");
            
            return (
              <div className="mainSlider">
                
                <Link to={`/filmpage/${film.slug}`}>
                  <div className='slide-text' index={index}>
                    <p>{film.slug}</p>
                    <h2>{film.title}</h2>
                    <p>{film.synopsis}</p>
                  </div>
                </Link>
                

                <img src={slideImg.default}
                alt={film.title}
                title={film.title}
                /> 

              </div>
              
             )
           }
           
         })}
        </Slider>
      </div>
    );
  }
} */
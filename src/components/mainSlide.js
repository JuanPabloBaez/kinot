import React, { Component } from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./mainSlide.css";



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
}
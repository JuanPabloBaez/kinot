import React from "react";
//import {Link} from "react-router-dom";
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css"; 
//import "slick-carousel/slick/slick-theme.css";
import "./mainSlide.css";
import Card from "./Card";


 function SubSlider ({list}) {

    const slideCont = document.getElementById("subSlide");
    console.log(slideCont);
    
    function handlePrev (e) {
      console.log("inside prev");
      
      slideCont.style.transform= 'translateX(200px)';
    }
    function handleNext (e) {
      console.log("inside next");
      
      slideCont.style.transform= 'translateX(200px)';

    }
   
    return(
      <div id="subSlide" className="subslide-container">
        <button className="subSlide-button button-prev" onClick={handlePrev}>prev</button>
        {  
          list.map((film, index) => {          
            if (film.Id !== "") {
              return <Card className="card-sub" film={film} index={index}/>
            }
          }) 
        }
        <button className="subSlide-button button-next" onClick={handleNext}>next</button>
      </div>
    ) 
 }

 export default SubSlider;

/* export default class SubSlider extends Component {
    
  render() {
    
    const settings = {
      className:"subSlide",
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesPerRow: 4,
      
      slidesToShow: 0,
      slidesToScroll: 4,
      initialSlide: 0,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    };
    
    return (
      <div className={"slider-wrap"}>
        <Slider {...settings}>
         
         {this.props.list.map(film =>{

            //const slideImg = require("../images/" + film.Id + "card.jpg");
            
             
            return (
                
              
                <div className="subSlider">
                    <Link to={`/filmpage/${film.slug}`}>
                        <Card film={film} />
                    {/* <div className='slide-text'>
                        <p>{film.slug}</p>
                        <h2>{film.title}</h2>
                        <p>{film.synopsis}</p>
                    </div>  close here
                    </Link>
                </div>

               

             
              
              
             )
           
           
         })}
        </Slider>
      </div>
    );
  }
} */
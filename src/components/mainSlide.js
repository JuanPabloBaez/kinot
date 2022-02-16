
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";



function MainSlider () {
    const lang = useSelector((state) => state.lang.lang)
    const list = useSelector((state) => state.list.list);
    const feat = list.filter(film => film.featured === true).reverse()
  
    
  return (
    <Swiper
      spaceBetween={50}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      effect="fade"
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="mySwiper"
      >
      {feat.map((film, index) => {
          const filmFrame = require("../images/" + film.Id + "frameA.jpg");
          return (
              <SwiperSlide key={index}>
                <Link to={`/film/${film.slug}`}>
                  <div className="slide-text">
                    <div className="slide-header">
                      <h2>{lang === "eng" ? film.title_eng : film.title_esp}</h2>
                      <p className='slide-info'>{film.year} / {film.country} / {film.runtime} min.</p>
                    </div>
                    <p className="slide-synopsis">{lang==="eng" ? film.log_line_eng: film.log_line_esp}</p>
                  </div>
                </Link>
                <img className='gallery-poster' 
                  src={filmFrame.default}
                  alt={film.title_eng}
                  title={film.title_eng}
                />
              </SwiperSlide>
            )
          }   
      )
      }
      
      
  </Swiper>
  
  )
}

export default MainSlider;

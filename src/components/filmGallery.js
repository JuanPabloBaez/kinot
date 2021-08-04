import React, { useState, useEffect } from "react";
import CrossfadeImage from "react-crossfade-image";
import './filmGallery.css';




function FilmGallery ({film}) { 
    //const [current, setCurrent] = useState(0);
    const [images, setImages] = useState([]);


    function importAll(r) {
      return r.keys().map(r);
    }
    const galleryFrames = importAll(require.context('../images', false, /,*\.jpg$/));


    useEffect(()=>{
        function getImages () {
          const preImages = galleryFrames.filter(frame => frame.default.includes(film.Id + "frame"));
          setImages(preImages);
          return;
          
        }
        getImages();
        
    },[film.Id]);
   

      
      async function setOrder ()  {
          const prev = [images.shift()];

          const next = images.concat(prev);
          
           await setImages(next)
        return
        }
    

     useEffect(() => {
        const interval = setInterval(() => {
          setOrder()
        },2500);
        return () => clearInterval(interval);
      },[images]); 


      
    return (
        < div className="film-gallery-container">
           {images[0] && 
           <CrossfadeImage
          src={images[0].default}
          duration={1000}
          timingFunction={"ease-out"}
          width= "100%"
        />  }         
        </div>
      )
    } 

export default FilmGallery;
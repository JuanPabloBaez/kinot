import React, { useState, useEffect } from "react";
import CrossfadeImage from "react-crossfade-image";


function FilmGallery ({film}) { 
    const [images, setImages] = useState([]);

    function importAll(r) {
      return r.keys().map(r);
    }
    const galleryFrames = importAll(require.context('../images', false, /,*\.jpg$/));

    useEffect(()=>{
       function getImages () {
          const preImages =   galleryFrames.filter(frame => frame.default.includes(film.Id + "frame"));
          setImages(preImages);
          return;  
        }
        getImages();
        
    },[]); // eslint-disable-line react-hooks/exhaustive-deps

    async function setOrder ()  {
        const prev = [images.shift()];
        const next = images.concat(prev);    
          await setImages(next)
      return
      }
    
     useEffect(() => {
        const interval = setInterval(() => {
          setOrder()
        },4000);
        return () => clearInterval(interval);
      },[images]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        < div className="film-gallery-container">
           {images[0] && 
           <CrossfadeImage
          src={images[0].default}
          duration={900}
          timingFunction={"ease-out"}
          width= "100%"
        />  }         
        </div>
      )
    } 

export default FilmGallery;
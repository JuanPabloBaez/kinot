import React, { useState, useEffect } from "react";
import './filmGallery.css';




function FilmGallery ({film}) { 
    const [current, setCurrent] = useState(0);
    const [images, setImages] = useState([]);


    function importAll(r) {
      return r.keys().map(r);
    }
    const galleryFrames = importAll(require.context('../images', false, /,*\.jpg$/));


    useEffect(()=>{
        function getImages () {
          const preImages = galleryFrames.filter(frame => frame.default.includes(film.Id + "frame"));
          setImages(preImages);
          
          return
        }
        getImages();
      
    },[film.Id]);
    //console.log(images);

     useEffect(() => {
        const interval = setInterval(() => {
          setCurrent(current === images.length - 1 ? 0 : current + 1)
        },2500);
        return () => clearInterval(interval);
      },[current, images.length]); 



    return (
        <>
          {
            images.map((frame, index)=> {
                return(
                  
                  <>
                  {index === current && (
                    <img src={frame.default} alt="film frame" className='gallery' key={index} />                      
                  )}
                  </>
                   /*  <div className={index=== current ? 'gallery gallery-active' : 'gallery'} key={index}>
                      {index === current && (
                        <img src={frame.default} alt="film frame" className="gallery-pic" key={index} />                      
                      )}
                  </div> */
                
                )                      
            })
          }            
        </>
      )
    } 

export default FilmGallery;
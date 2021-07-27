import React, { useState, useEffect } from "react";
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
    //console.log(images);

      
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
          { 
           images && images.map((frame, index)=> {
                return(
                  <>
      
                  <img src={frame.default} alt="film frame" className='film-gallery' key={index} />
                 
                 {/* { index === current ?  <img src={frame.default} alt="film frame" className='film-gallery aktiv' key={index} /> : <img src={frame.default} alt="film frame" className='film-gallery' key={index} style={{"z-index": {index}}} /> } */}
                 </>
                 /* <img src={frame.default} alt="film frame" className='film-gallery' key={index} />    */               
                  
                   /*  <div className={index=== current ? 'gallery gallery-active' : 'gallery'} key={index}>
                      {index === current && (
                        <img src={frame.default} alt="film frame" className="gallery-pic" key={index} />                      
                      )}
                  </div> */
                
                )                     
            })
          }            
        </div>
      )
    } 

export default FilmGallery;
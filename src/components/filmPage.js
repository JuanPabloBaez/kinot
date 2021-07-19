
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Popup from "./filmPagePopUp";
import FilmPageGallery from "./filmPageGallery"
import './filmPage.css';


const FilmPage = (list) => {
 
  const [popupA, setPopupA] = useState(false);
  const [popupB, setPopupB] = useState(false);
  const [popupC, setPopupC] = useState(false);
  const [episode, setEpisode] = useState("");
  const [setImg, setSetImg] = useState(false)
  const {id} = useParams();
  window.scrollTo(0, 0);


  const film = list.list.filter(item => item.slug === id)[0];
    

  const {
    title,  
    Id,
    video_link,
    video_link_serie,
    trailer_link,
    making_Of,
    synopsis,       
    director,
    writer,
    cast,
    producer,
    production,
    production_link,
    cinematography,
    editing,
    sound,
    vfx,
    music,        
    year,
    country,
    language,
    subtitle,
    runtime,
    format
    
  } = film;


    /* useEffect(() => {
      function getImage () {
        const setPhoto =  require("../images/" + Id + "setA.jpg")
        if (setPhoto){
          setSetImg(true)
        } else  setSetImg(true)
      }
      getImage();
    },[ ]) */
    
    useEffect(() =>{
    
      function getEpisode () {
        const firstEp = video_link_serie[0];
        setEpisode(firstEp)
        return
  
      }
    getEpisode();
    },[])

  

  

  //const setPhoto =  require("../images/" + Id + "setA.jpg");

  const pagePoster = require("../images/" + Id + "poster.jpg");


  console.log(production.link)
  
  return (
    <div className="page-body">      
      
      {video_link_serie.length <= 1 && 
          <ReactPlayer 
          className="page-video"
          url={video_link}
          controls={true}
          responsive="true"
          width="100%"
          height="50vh"
             /> 
      }
      {video_link_serie.length > 1 && 
        <div className="serie-player"> 
          <ReactPlayer 
          className="page-video"
          url={episode}
          controls={true}
          responsive="true"
          width="100%"
          height="50vh"
             /> 
          <p>still serie</p>
          {video_link_serie.map((ep, index) =>{ return <button key={index}>Episode{index + 1}</button>})}
        </div>
      }
         


      <div className="page-first">
     
        <img className='page-poster' 
                  src={pagePoster.default}
                  alt={title}
                  title={title}
                  />
        <div className="page-header-container"> 
          <div className="page-header">
            <h1>{title}</h1>
            <p className="page-info"> {year} / {country} / {runtime} minutes. / {language} ({subtitle}) / {format} </p>
          </div>
          <p className="page-synopsis">{synopsis}</p>
        </div>
      </div>
      
      
      
      <div className="page-second">
        <div className="cast">
          <h2>Cast and Crew</h2>
          <ul className="cast-list">
            { director  && <li>Director:  {director}</li>}
            { writer    && <li>Writer:    {writer}</li>}
            { cast      && <li>Cast:      {cast}</li>}
            
            
            { production.link && <li>Production: <a href={production_link} target="_blank" rel="noreferrer">{production} </a> </li>}
            { production && <li>Production:  {production}</li>}
            { producer  && <li>Producer: {producer}</li>}
            {cinematography && <li>Cinematography: {cinematography}</li>}
            {editing    && <li>Editing:   {editing}</li>}
            {sound      && <li>Sound:     {sound}</li>}
            {vfx        && <li>Post production: {vfx}</li>}
            {music      && <li>Music:     {music}</li>}
          </ul>
        </div>
        <div className="media">
          
          { trailer_link && <> 
            <button className="page-button button-trailer" onClick={() => setPopupA(true)} >
              <svg id="i-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
              </svg>
              <p>Watch trailer</p>
            </button>
            <Popup trigger={popupA} setTrigger={setPopupA}>
                <ReactPlayer 
                  className="page-video"
                  url={trailer_link}
                  controls={true}
                  responsive="true"
                  width="100%"
                  height="60vh"
                />
              </Popup> </>
          }

         {/*  {setPhoto && <> */}
            <button className="page-button button-gallery" onClick={() => setPopupB(true)} >
              <svg id="i-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
                <circle cx="10" cy="9" r="3" />
              </svg>
              <p>Photo gallery</p>
            </button>
            <Popup trigger={popupB} setTrigger={setPopupB}>
              <FilmPageGallery film={film} />    
            </Popup>
       {/*    </>} */}
          


          { making_Of && <>
            <button className="page-button button-making-of" onClick={() => setPopupC(true)} >
            <svg id="i-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
              <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
            </svg>
            <p>Watch making of</p>
          </button>
          <Popup trigger={popupC} setTrigger={setPopupC}>
              <ReactPlayer 
                className="page-video"
                url={making_Of}
                controls={true}
                responsive="true"
                width="100%"
                height="60vh"
                
              />
            </Popup>
           </>}
  
              
         
        
        </div>
      </div>
        
    </div>
    
  );
}

export default FilmPage;
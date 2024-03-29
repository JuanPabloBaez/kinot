
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux'
import ReactPlayer from 'react-player';
import translate from "translate";

import FilmGallery from "./filmGallery";
import Popup from "./filmPagePopUp";
import FilmPageGallery from "./filmPageGallery";


const FilmPage = () => {
  const [videoPlayer, setVideoPlayer] = useState(false)
  const [popupA, setPopupA] = useState(false);
  const [popupB, setPopupB] = useState(false);
  const [popupC, setPopupC] = useState(false);
  //const [episode, setEpisode] = useState("");
  const [setImg, setSetImg] = useState(false);

  const [countryTrans, setCountryTrans] = useState("");
  const [languageTrans, setLanguageTrans] = useState("");
  const [subitleTrans, setSubitleTrans] = useState("");

  const lang = useSelector((state) => state.lang.lang)
  const list = useSelector((state) => state.list.list);
  const {id} = useParams();
  window.scrollTo(0, 0);

  
  const film = list.filter(item => item.slug === id)[0];
  const {
    title_eng,
    title_esp,    
    Id,
    video_link,
    video_link_serie,
    trailer_link,
    making_Of,
    synopsis_eng,
    synopsis_esp,       
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

  useEffect(() => {
    function getImg () {
      try { 
        require("../images/" + Id + "setA.webp");        
        setSetImg(true)
        
      } catch(error) {
        setSetImg(false)
      }
    } 
    getImg();
  },[Id]);
  
    // useEffect(() =>{
    //   function getEpisode () {
    //     const firstEp = video_link_serie[0];
    //     setEpisode(firstEp)
    //     return
    //   }
    // getEpisode();
    // },[])

   const pagePoster = require("../images/" + Id + "poster.webp");
    
   translate.engine = "deepl";
   translate.key = process.env.REACT_APP_DEEPL_KEY;
   useEffect(()=> {
    async function setTranslation () {
      let translateCountry  =  await translate(country, "es");
      let translateLanguage  =  language ? await translate(language, "es"): null;
      let translateSubtitle  = subtitle ? await translate(subtitle, "es"): null;
      setCountryTrans(translateCountry);
      setLanguageTrans(translateLanguage);
      setSubitleTrans(translateSubtitle);
    };
    setTranslation ();
   },[country,language,subtitle])
  
  return (
    <div className="page-body">      
      
      { videoPlayer===false ? 
        <div className="pre-player">
          <button className="pressPlayer" onClick={() => setVideoPlayer(true)}>
            <svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M10 2 L10 30 24 16 Z" />
            </svg>
            {lang==="eng"? "Watch Film":"Ver Film"}
          </button>
          <FilmGallery film={film}/>
        </div> 
      :
      <>
        {video_link && 
          <ReactPlayer 
          className="page-video"
          url={video_link}
          controls={true}
          playing={true}
          responsive="true"
          width="100%"
          height="50vh"
            /> 
        }
        {video_link_serie.length > 1 && 
            <ReactPlayer 
            className="page-video"
            url={video_link_serie[0]}
            controls={true}
            playing={true}
            responsive="true"
            width="100%"
            height="50vh"
              />
        }
         {video_link_serie.length > 1 && 
        <div className="serie-player">
          {video_link_serie.map((ep, index) =>{ return <button  key={index}>Episode{index + 1}</button>})}
        </div>
        }
      </>    
    }
    

      <div className="page-first">
        <img className='page-poster' 
                  src={pagePoster.default}
                  alt={title_eng}
                  title={title_eng}
                  />
        <div className="page-header-container"> 
          <div className="page-header">
            <h1>{lang==="eng" ? title_eng : title_esp}</h1>
            <div className="page-info"><p > {year} / {lang==="eng" ? country : countryTrans } / {runtime} {lang==="eng" ?"minutes":"minutos"}</p> {language && <p>/ {lang==="eng" ? language : languageTrans }</p>} {subtitle && <p>(sub: {lang==="eng" ? subtitle : subitleTrans })</p>} <p> / {format} </p></div>
          </div>
          <p className="page-synopsis">{lang==="eng" ? synopsis_eng:synopsis_esp}</p>
        </div>
      </div>
      
      <div className="page-second">
        <div className="cast">
          <h2>{lang==="eng" ? "Cast and Crew": "Equipo" }</h2>
          <ul className="cast-list">
            { director  && <li><p className="role">{lang==="eng"? "Director":"Dirección"}:</p>{director}</li>}
            { writer    && <li><p className="role">{lang==="eng"? "Writer":"Guion"}:</p> {writer}</li>}
            { cast      && <li><p className="role">{lang==="eng"? "Cast":"Elenco"}: </p> {cast}</li>}
            {(function() {
              if ( production && production_link !=="null" ) {
                  return <li><p className="role">{lang==="eng"?"Production":"Productora"}:</p> <a href={production_link} target="_blank" rel="noreferrer">{production} </a> </li> ;  
              } if (production ==="") {
                  return null
              } else {
                  return <li><p className="role">{lang==="eng"?"Production":"Productora"}:</p>  {production}</li>;
              }
            })()}
            { producer  && <li><p className="role">{lang==="eng"? "Production":"Producción"}:</p> {producer}</li>}
            {cinematography && <li><p className="role">{lang==="eng"? "Cinematography":"Fotografía"}:</p> {cinematography}</li>}
            {editing    && <li><p className="role">{lang==="eng"? "Editing":"Edición"}:</p>{editing}</li>}
            {sound      && <li><p className="role">{lang==="eng"? "Sound":"Sonido"}:</p>{sound}</li>}
            {vfx        && <li><p className="role">{lang==="eng"? "Post production":"Posproducción"}:</p> {vfx}</li>}
            {music      && <li><p className="role">{lang==="eng"? "Music":"Música"}:</p> {music}</li>}
          </ul>
        </div>
        <div className="media"> 
          {trailer_link && 
          <> 
            <button className="page-button button-trailer" onClick={() => setPopupA(true)} >
              <svg id="i-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
              </svg>
              <p>{lang==="eng"? "Watch trailer":"Ver trailer"}</p>
            </button>
            <Popup trigger={popupA} setTrigger={setPopupA}>
              <ReactPlayer 
                className="page-video"
                url={trailer_link}
                controls={true}
                playing={true}
                responsive="true"
                width="100%"
                height="60vh"
              />
            </Popup> 
          </>
          }
         {setImg===true && 
         <> 
            <button className="page-button button-gallery" onClick={() => setPopupB(true)} >
              <svg id="i-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                <path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
                <circle cx="10" cy="9" r="3" />
              </svg>
              <p>{lang==="eng"? "Photo gallery":"Galería de imágenes"}</p>
            </button>
            <Popup trigger={popupB} setTrigger={setPopupB}>
              <FilmPageGallery film={film} />    
            </Popup>
          </>} 
          {making_Of && 
          <>
            <button className="page-button button-making-of" onClick={() => setPopupC(true)} >
              <svg id="i-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5">
                <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
              </svg>
              <p>{lang==="eng"? "Watch making of":"Ver making of"}</p>
            </button>
            <Popup trigger={popupC} setTrigger={setPopupC}>
                <ReactPlayer 
                  className="page-video"
                  url={making_Of}
                  controls={true}
                  playing={true}
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
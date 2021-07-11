
import React from "react";
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import './filmPage.css';


const FilmPage = (list) => {
  window.scrollTo(0, 0);

  const {id} = useParams();
  let film;

  list &&
    list.list.map((item)=>{
      if (id===item.slug) {
        film = item;
        return film 
      }    
    })
  const {
    title,  
    Id,
    video_link,
    synopsis,       
    director,
    writer,
    cast,
    producer,
    production,
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
  const pagePoster = require("../images/" + Id + "poster.jpg");
  
  
  return (
    <div className="page-body">      
      
      <ReactPlayer 
        className="page-video"
        url={video_link}
        controls={true}
        responsive="true"
        width="100%"
        height="50vh"
        	 />

      <div className="page-first">
     
        <img className='page-poster' 
                  src={pagePoster.default}
                  alt={title}
                  title={title}
                  />
        <div className="page-header-container"> 
          <div className="page-header">
            <h1>{title}</h1>
            <p className="page-info">{year} / {country} / {runtime} minutes. / {language} ({subtitle}) / {format} </p>
          </div>
          <p className="page-synopsis">{synopsis}</p>
        </div>
      </div>
      
      
      

      <div className="cast">
        <h2>Cast and Crew</h2>
      
            <ul className="cast-list">
              <li>Director:  {director}</li>
              <li>Writer:    {writer}</li>
              <li>Cast:      {cast}</li>
              <li>Production: {producer}</li>
              <li>Producer:  {production}</li>
              <li>Cinematography: {cinematography}</li>
              <li>Editing:   {editing}</li>
              <li>Sound:     {sound}</li>
              <li>Post production: {vfx}</li>
              <li>Music:     {music}</li>
            </ul>
          
        
        
       
      </div>
    </div>
  );
}

export default FilmPage;




/* 
    const { filmName } = useParams();
    let film;
    list &&
      list.map((article) => {
        console.log(article.slug)
        if (article.slug === filmName) {
          film = article;
          return film;
        } return null
      });
     
    
    const {
        title,  
        Id,
        slug,
        video_link,
        trailer_link,
        making_of,
        categorie,
        tag, 
        log_line,
        synopsis,       
        director,
        writer,
        cast,
        producer,
        production,
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
        format,
        color,
        aspect_ratio
    
      } = film;  */

import React from "react";
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import './filmPage.css';


const FilmPage = (list) => {
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
    format,
    color
  } = film;
  const pagePoster = require("../images/" + Id + "poster.jpg");
  
  
  return (
    <div className="page-body">      
      
      <ReactPlayer 
        className="page-video"
        url={video_link}
        controls={true}
        width="800px"
        
        	 />

      <img className='page-poster' 
                src={pagePoster.default}
                alt={title}
                title={title}
                /> 
      <h1>{title}</h1>
      <p>{synopsis}</p>
      <p>{year}</p>
      <p>{country}</p> 
      <p>{language}</p>
      <p>{subtitle}</p>
      <p>{runtime} minutes.</p>
      <p>{format}</p>
      <p>{color}</p>

      <p>{director}</p>
      <p>{writer}</p>
      <p>{cast}</p>
      <p>{producer}</p>
      <p>{production}</p>
      <p>{cinematography}</p>
      <p>{editing}</p>
      <p>{sound}</p>
      <p>{vfx}</p>
      <p>{music}</p>
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
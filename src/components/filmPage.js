
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
  } = film;
  const pagePoster = require("../images/" + Id + "poster.jpg");
  
  
  return (
    <>      
      <h3>{id}</h3>
      
      <ReactPlayer 
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
      <p>{runtime} minutes.</p>
    </>
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
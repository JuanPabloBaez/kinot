
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


const FilmPage = (list) => {
  const {id} = useParams();
  const {film, setFilm } = useState([]); 


  useEffect(() =>{
    
    function getFilm () {
      list.list.map(item =>{
        console.log(item)
      })

    }
    
    getFilm();

    
  
  },[]);
  
    

  return(
      <>
      <h1>{id}</h1>
      <p></p>
    
      </>
  )
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
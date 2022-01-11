import React from "react";
import { useSelector} from 'react-redux'
import {Link} from "react-router-dom";
import './Card.css';


const Card = ({ film }) => {    
    const cardImg = require('../images/' + film.Id + 'card.jpg');
    const lang = useSelector((state) => state.lang.value);

 
    return (
        <div className="card-container"  >
            <Link to={`/film/${film.slug}`}>
                  <div className="card-overlay"> 
                    <div>
                      <h2>{lang==="eng" ? film.title_eng:film.title_esp}</h2>
                      {film.categorie[0] === "" ? null : <i>{film.categorie}</i> }
                    </div>
                    
                    <p>{film.runtime} min. / {film.country}</p>
                    
                  </div>        
                  <img src={cardImg.default}
                      alt={film.title_eng}
                      title={film.title_eng}
                  />      
            </Link> 
        </div>
    )
}

export default Card;
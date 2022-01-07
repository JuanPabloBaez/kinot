import React from "react";
import {Link} from "react-router-dom";
import './Card.css';


const Card = ({ film }) => {    
    const cardImg = require('../images/' + film.Id + 'card.jpg');
 
    return (
        <div className="card-container"  >
            <Link to={`/film/${film.slug}`}>
                  <div className="card-overlay"> 
                    <div>
                      <h2>{film.title}</h2>
                      {film.categorie[0] === "" ? null : <i>{film.categorie}</i> }
                    </div>
                    
                    <p>{film.runtime} min. / {film.country}</p>
                    
                  </div>        
                  <img src={cardImg.default}
                      alt={film.title}
                      title={film.title}
                  />      
            </Link> 
        </div>
    )
}

export default Card;
import React from "react";
import {Link} from "react-router-dom";
import './Card.css';




const Card = ({ film }) => { 
    const cardImg = require('../images/' + film.Id + 'card.jpg');
    
    
    return (
        <div className="card-container" >
        <Link to={`/filmpage/${film.slug}`}>
            
            <img src={cardImg.default}
                alt={film.title}
                title={film.title}
                /> 
            
        </Link>
        </div>
    )
    
}

export default Card;
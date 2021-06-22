import React from "react";
import {Link} from "react-router-dom";
import './Card.css';




const Card = ({ film }) => { 
    const cardImg = require('../images/' + film.Id + 'card.jpg');
    

    return (
        
        <Link to={`/filmpage/${film.slug}`}>
            <div className="card-container" >
            <img src={cardImg.default}
                alt={film.title}
                title={film.title}
                /> 
            </div>
        </Link>
    )
    
}

export default Card;
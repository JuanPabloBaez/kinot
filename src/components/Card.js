import React from "react";

import './Card.css';




const Card = ({ film }) => {
    
    const cardImg = require('../images/' + film.Id + 'card.jpg');
    
    
    
    return (
        <div className="card-container"  >
        
            
            <img src={cardImg.default}
                alt={film.title}
                title={film.title}
                /> 
            
        
        </div>
    )
    
}

export default Card;
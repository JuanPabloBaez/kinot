import React from "react";
import {Link} from "react-router-dom";
import Card from "./Card";
import './catalog.css';

const Catalog = ({list}) => {  
    return(
        <div className="catalog-body">

            <div className="filter-container">
                
                <input type="text"></input>

            </div>


            <div className="main-list">
            {
                list.map((film, index) => {
                    if (film.active === true) {
                        return( 
                            <div className="catalog-card-container" key={index}>
                                <Link to={`/film/${film.slug}`}>
                                <Card  film={film} />
                                </Link>
                           </div>
                        ) 
                    } return null
                })                           
            }
            </div>
        </div> 
    )
}

export default Catalog;
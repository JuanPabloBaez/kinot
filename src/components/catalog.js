import React from "react";
import Card from "./Card";
import './catalog.css';

const Catalog = ({list}) => {  
    return(
        <div className="catalog-body">


            <div className="main-list">
            {
                list.map((film, index) => {
                    if (film.Id !== "") {
                        return( 
                            <div className="catalog-card-container" key={index}>
                                {/* <div className="catalog-label"> </div> */}
                                <Card  film={film} />
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
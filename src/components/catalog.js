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
                        return  <Card  film={film} key={index}  />    
                      }
                })                           
            }
            </div>
        </div> 
    )
}

export default Catalog;
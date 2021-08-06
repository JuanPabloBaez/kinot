import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import Card from "./Card";
//import FilterButton from "./catalogButton";
import './catalog.css';

const Catalog = ({list}) => {  
    const [filter, setFilter] = useState('');
    const [catalogList, setCatalogList] = useState(list)

    const allCategories = ['All', ...list.map(item => item.categorie)];
    

    const handleChange = (e) => {
        setFilter(e.target.value)
        };


    useEffect(()=>{
        function setupList () {
            const filterInput = list.filter(film => film.title.toLowerCase().includes(filter.toLowerCase()) || film.director.toLowerCase().includes(filter.toLowerCase()) ||filter ==="" );
            setCatalogList(filterInput);
            return
        }
        setupList();    
    },[filter])
    

    return(
        <div className="catalog-body">
            <div className="filter-container">
                <label htmlFor="searchInput">search:</label> 
                <input type="text" name="searchInput" value={filter} onChange={handleChange} placeholder=" title or director" />
                <div className="">
                    {list.find(film => console.log(film.categorie))}
                </div>
               
            </div>

            <div className="main-list">
           
           
            {
                catalogList.map((film, index) => {
                    if (film.active === true) {
                        return( 
                            <div className="catalog-card-container" key={index}>
                                <Link to={`/film/${film.slug}`}>
                                <Card  film={film} />
                                </Link>
                           </div>
                        )
                    } return null
                }).reverse()                         
            }
            </div>
        </div> 
    )
}

export default Catalog;
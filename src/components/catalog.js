import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

import Card from "./Card";
import Pagination from './pagination';
//import FilterButton from "./catalogButton";
import './catalog.css';

const Catalog = () => {  
    const list = useSelector((state) => state.list.list);
    const [filter, setFilter] = useState('');
    const [catalogList, setCatalogList] = useState(list);
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

   
    const handleChange = (e) => {
        setFilter(e.target.value)
        };


    useEffect(()=>{
        function setupList () {
            const filterInput = list.filter(film => film.title_eng.toLowerCase().includes(filter.toLowerCase()) || film.title_esp.toLowerCase().includes(filter.toLowerCase()) || film.director.toLowerCase().includes(filter.toLowerCase()) ||filter ==="" );
            setCatalogList(filterInput);
            return
        }
        setupList();    
    },[filter]) // eslint-disable-line react-hooks/exhaustive-deps
    
     // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = catalogList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div className="catalog-body">
            <div className="filter-container">
                <label htmlFor="searchInput">search:</label> 
                <input type="text" name="searchInput" value={filter} onChange={handleChange} placeholder=" title or director" />
            </div>

            <div className="main-list">
            {
                currentPosts.map((film, index) => {
                    if (film.active === true) {
                        return( 
                           
                                <Card  film={film} key={index} />
                                
                        )
                    } return null
                }).reverse()                         
            }
            </div>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={catalogList.length}
                paginate={paginate}
            />
        </div> 
    )
}

export default Catalog;
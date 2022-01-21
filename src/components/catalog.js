import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import Card from "./Card";
import ReactPaginate from "react-paginate";

//import FilterButton from "./catalogButton";
import './catalog.css';

const Catalog = () => {  
    const list = useSelector((state) => state.list.list);
    const [filter, setFilter] = useState('');
    const [catalogList, setCatalogList] = useState([]);
    
    const [pageNumber, setPageNumber] = useState(0); 
    
    
     // const [currentPage, setCurrentPage] = useState(1);
   
    const handleChange = (e) => {
        setFilter(e.target.value)
        };
    useEffect(()=>{
        function setupList () {
            const listActive = list.filter(film => film.active=== true).reverse();
            const filterInput = listActive.filter(film => film.title_eng.toLowerCase().includes(filter.toLowerCase()) || film.title_esp.toLowerCase().includes(filter.toLowerCase()) || film.director.toLowerCase().includes(filter.toLowerCase()) ||filter ==="" );
            setCatalogList(filterInput);
            return
        }
        setupList();    
    },[filter]) // eslint-disable-line react-hooks/exhaustive-deps
    

const filmsPerPage = 10;
const pagesVisited = pageNumber * filmsPerPage;
const displayFilms = catalogList
                        .slice(pagesVisited, pagesVisited + filmsPerPage)
                        .map((film, index) => {
                            return <Card  film={film} key={index} />                           
                        })
const pageCount = Math.ceil(catalogList.length / filmsPerPage);
const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
                           

console.log(displayFilms)

    return(
        <div className="catalog-body">
            <div className="filter-container">
                <label htmlFor="searchInput">search:</label> 
                <input type="text" name="searchInput" value={filter} onChange={handleChange} placeholder=" title or director" />
            </div>
            <div className="main-list">
                {displayFilms}
            </div>
            <ReactPaginate 
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                />
        </div> 
    )
}

export default Catalog;
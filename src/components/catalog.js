import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import ReactPaginate from "react-paginate";
import Card from "./Card";

const Catalog = () => {
    const lang = useSelector((state) => state.lang.lang);  
    const list = useSelector((state) => state.list.list);
    const [filter, setFilter] = useState('');
    const [catalogList, setCatalogList] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [filmsPerPage, setFilmsPerPage] = useState(10); 
    
    const handleChange = (e) => {
        setFilter(e.target.value)
        };
        
    useEffect(()=>{
        async function setupList () {
            const filterInput = await list.filter(film => film.title_eng.toLowerCase().includes(filter.toLowerCase()) || film.title_esp.toLowerCase().includes(filter.toLowerCase()) || film.director.toLowerCase().includes(filter.toLowerCase()) ||filter ==="" );
            setCatalogList(filterInput);
            return
        }
        setupList();    
    },[filter,list]) 
    
    useEffect(()=>{
        setFilmsPerPage(window.innerWidth > 705 ? 10 : 6)
    },[])


    const pagesVisited = pageNumber * filmsPerPage;
    const displayFilms = catalogList
                            .slice(pagesVisited, pagesVisited + filmsPerPage)
                            .map((film, index) => {
                                return <Card  film={film} key={index} />                           
                            });
    const pageCount = Math.ceil(catalogList.length / filmsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return(
        <div className="catalog-body">
            <div className="filter-container">
                <label htmlFor="searchInput">{lang==="eng" ? "Search:" : "Buscar:"}</label> 
                <input type="text" name="searchInput" value={filter} onChange={handleChange} placeholder={lang==="eng" ? " title or director" : " título o director "} />
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
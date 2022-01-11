import React, {useState, useEffect} from "react";
import MainSlider from "./mainSlide";
import SubSliderA from "./subSlideA";
import SubSliderB from "./subSlideB";
import SubSliderC from "./subSlideC";
import { useSelector } from 'react-redux'
import './main.css';


const Main = ({list}) => {
    const [listB, setListB] = useState([]);
    const [listC, setListC] = useState([]);
    const lang = useSelector((state) => state.lang.value)

    useEffect(() =>{
        function getListB () {
            const documentary = list.filter(film => film.categorie.includes("Documentary"));
            setListB(documentary);
            return
        }; 
        getListB();
    }, [list]);

    useEffect(() =>{
        function getListC () {
            const shortfilm = list.filter(film => film.runtime < 15);
            setListC(shortfilm);
            return
        }; 
        getListC();
    }, [list]);

    

    return( 
        <div className="main-body">
            <div className="main-wrap">  
                <MainSlider list={list}  />
                <p className="slide-tag">{lang==="eng" ? "most recent" : "recientes"}</p>
                <SubSliderA list={list} />
                <p className="slide-tag">{lang==="eng" ? "documentary":"documental"}</p>
                <SubSliderB listB={listB}/>
                <p className="slide-tag">{lang==="eng" ? "shortfilm":"cortometraje"}</p>
                <SubSliderC listC={listC}/> 
            </div>       
        </div>   
    )
}


export default Main;
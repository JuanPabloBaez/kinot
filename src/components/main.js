
import { useSelector } from 'react-redux';

import MainSlider from "./mainSlide";
import SubSliderA from "./subSlideA";


const Main = () => {
    const lang = useSelector((state) => state.lang.lang);
    const list = useSelector((state) => state.list.list);
    const listB = list.filter(film=>film.categorie.includes("Documentary"));
    const listC = list.filter(film=>film.runtime < 20 );
    
   
    return( 
        <div className="main-body">
                <MainSlider   />
                <p className="slide-tag">{lang==="eng" ? "Most Recent" : "Recientes"}</p>
                <SubSliderA list={list}  />
                <p className="slide-tag">{lang==="eng" ? "Documentary":"Documental"}</p>
                <SubSliderA list={listB}  />
                <p className="slide-tag">{lang==="eng" ? "Shortfilm":"Cortometraje"}</p>
                <SubSliderA list={listC}  />
        </div>   
    )
}

export default Main;
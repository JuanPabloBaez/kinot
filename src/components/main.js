
import MainSlider from "./mainSlide";
import SubSliderA from "./subSlideA";
import SubSliderB from "./subSlideB";
import SubSliderC from "./subSlideC";
import { useSelector } from 'react-redux'
import './main.css';


const Main = () => {
    const lang = useSelector((state) => state.lang.lang)
    
    return( 
        <div className="main-body">
            <div className="main-wrap">  
                <MainSlider   />
                <p className="slide-tag">{lang==="eng" ? "most recent" : "recientes"}</p>
                <SubSliderA  />
                <p className="slide-tag">{lang==="eng" ? "documentary":"documental"}</p>
                <SubSliderB />
                <p className="slide-tag">{lang==="eng" ? "shortfilm":"cortometraje"}</p>
                <SubSliderC /> 
            </div>       
        </div>   
    )
}


export default Main;
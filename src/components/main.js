
import MainSlider from "./mainSlide";
import SubSliderA from "./subSlideA";
import SubSliderB from "./subSlideB";
import SubSliderC from "./subSlideC";
import { useSelector } from 'react-redux'



const Main = () => {
    const lang = useSelector((state) => state.lang.lang)
    
    return( 
        <div className="main-body">
             
                <MainSlider   />
                <p className="slide-tag">{lang==="eng" ? "most recent" : "recientes"}</p>
                <SubSliderA  />
                <p className="slide-tag">{lang==="eng" ? "documentary":"documental"}</p>
                <SubSliderB />
                <p className="slide-tag">{lang==="eng" ? "shortfilm":"cortometraje"}</p>
                <SubSliderC /> 
                
        </div>   
    )
}


export default Main;
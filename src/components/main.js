import React, {useState, useEffect} from "react";
import MainSlider from "./mainSlide";
import SubSliderA from "./subSlideA";
import SubSliderB from "./subSlideB";

import './main.css';


const Main = ({list }) => {
    const [list2, setList2] = useState("");
    const [isLoading, setIsloading] = useState(true);


    useEffect(() =>{
        function getList2 () {
            const documentary = list.filter(film => film.categorie === "documentary");
            setList2(documentary);
            setIsloading(false);
            return
        };
        getList2();
        
    }, [list])
    
    return( 
        <>
        {isLoading ? (
            <h1>Loading</h1>
          ):( 
            <div className="main-body">
                <div className="main-wrap">  
                    <MainSlider list={list} />
                    <p className="slide-tag">most recent</p>
                    <SubSliderA list={list}  />
                    <p className="slide-tag">documentary</p>
                    <SubSliderB list2={list2}/>
                </div>       


         {/*    <div className="mainList">
            {
                list.map((film) => {
                    return(   
                        <Card film={film}  />                  
                    ) 
                })                              
            }
            </div> */}
            </div>)
        }
         </> 
        
       
    )
    
}


export default Main;
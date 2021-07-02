import React from "react";
import MainSlider from "./mainSlide";
import SubSlider from "./mainSlideSub";
import './main.css';


const Main = ({list }) => { 
     
    return(
        
        
        <div className="main-body"> 
            
            <MainSlider list={list} />
            <SubSlider list={list}  />    
                
         {/*    <div className="mainList">
            {
                list.map((film) => {
                    return(   
                        <Card film={film}  />                  
                    ) 
                })                              
            }
            </div> */}
       </div>
       
    )
    
}


export default Main;
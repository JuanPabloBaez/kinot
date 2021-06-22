import React from "react";
import Card from "./Card";
import MainSlider from "./mainSlide";
import './main.css';


const Main = ({list }) => { 
     
    return(
        <>
        <h1>MAIN PAGE</h1>
        <div className="main-body"> 
            
            <MainSlider list={list} />   
                
            <div className="mainList">
            {
                list.map((film, index) => {
                    return(   
                        <Card film={film} key={index} />                  
                    ) 
                })                              
            }
            </div>
       </div>
       </>
    )
    
}


export default Main;
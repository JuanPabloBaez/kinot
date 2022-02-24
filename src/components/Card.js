import React, { useEffect, useState } from "react";
import { useSelector} from 'react-redux';
import {Link} from "react-router-dom";
import translate from "translate";


const Card = ({ film }) => {    
    const cardImg = require('../images/' + film.Id + 'card.jpg');
    const lang = useSelector((state) => state.lang.lang);

    const [countryTrans, setCountryTrans] = useState("");
    const [categoryTrans, setCategoryTrans] = useState("");

    translate.engine = "deepl";
    translate.key = process.env.REACT_APP_DEEPL_KEY;
  
    useEffect(()=> {
        async function setTranslationCard () {
          let translateCountry  =  await translate(film.country, "es");
          let translateCategory  =  film.categorie ?  await translate(film.categorie, "es"): null;
          setCountryTrans(translateCountry);
          setCategoryTrans(translateCategory);
        };
        setTranslationCard ();
       },[film])

 
    return (
        <div className="card-container"  >
            <Link to={`/film/${film.slug}`}>
                  <div className="card-overlay"> 
                      <h2>{lang==="eng" ? film.title_eng:film.title_esp}</h2>
                      {film.categorie[0] === "" ? null : <i>{lang==="eng" ? film.categorie: categoryTrans }</i> }
                    <p>{film.runtime} min. / {lang === "eng" ? film.country : countryTrans }</p>
                  </div>        
                  <img src={cardImg.default}
                      alt={film.title_eng}
                      title={film.title_eng}
                  />      
            </Link> 
        </div>
    )
}

export default Card;
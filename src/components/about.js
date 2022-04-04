import React from "react";
import { useSelector } from 'react-redux';
import About1 from '../assets/about01.mp4';
import About2 from '../assets/about02.mp4';


const About = () => { 
    const lang = useSelector((state) => state.lang.lang);
    window.scrollTo(0, 0);

let textEngA="beatkino is a platform to stream a selection of independent cinema from around the world. Our goal is to collect remarkable works that might be dispersed and lost in the vast of the web. The films in our catalog are selected for the unique voice and character of their authors, their accomplishments on the cinematic craft or for presenting a particular point of view on a significant topic.";
let textEngB="For the viewers, we look to offer an interesting and diverse catalogue, an interesting alternative to mainstream media. For the authors, we mean to be a place to keep on display the work that could be considered past, a dynamic environment to keep the films close to viewers.";
let textSpaA="beatkino es una plataforma para difundir cine independiente procedente de todo el mundo. Nuestro objetivo es recopilar obras notables que puedan estar dispersas y perdidas en la inmensidad de la web. Las películas de nuestro catálogo se seleccionan por la voz y el carácter únicos de sus autores, por sus logros en el arte cinematográfico o por presentar un punto de vista particular sobre un tema significativo.";
let textSpaB="Para los espectadores, buscamos ofrecer un catálogo interesante y diverso, una alternativa interesante a los medios convencionales. Para los autores, pretendemos ser un lugar en el que se exponga el trabajo que podría considerarse pasado, un espacio dinámico para mantener las películas cerca de los espectadores.";

    
    return(
        <div className="about-body">
            {
            lang==="eng" ? 
            <>
            <div className="about-content">
                <video className='videoTag' autoPlay="autoplay" loop="loop" muted  playsInline>
                    <source src={About1} type='video/mp4' />
                </video>
                <div className="about-sub">
                    <h1>About</h1>
                    <p className='about-textA'>{textEngA} </p>
                </div>
            </div>
            <div className="about-content">
                <p className='about-textB'>{textEngB} </p>
                <video className='videoTag' autoPlay="autoplay" loop="loop" muted  playsInline>
                    <source src={About2} type='video/mp4' />
                </video>
            </div>
            </>:<>
            <div className="about-content">
                <video className='videoTag' autoPlay="autoplay" loop="loop" muted  playsInline>
                    <source src={About1} type='video/mp4' />
                </video>
                <div className="about-sub">
                    <h1>Acerca</h1>
                    <p className='about-textA'>{textSpaA}</p>
                </div>
            </div>
            <div className="about-content">
                <p className='about-textB'>{textSpaB}</p>
                <video className='videoTag' autoPlay="autoplay" loop="loop" muted  playsInline>
                    <source src={About2} type='video/mp4' />
                </video>
            </div>
            </>
            }
            
        </div>
    )
}

export default About;
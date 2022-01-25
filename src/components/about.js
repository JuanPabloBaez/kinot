import React from "react";
import About1 from '../assets/about01.mp4';
import About2 from '../assets/about02.mp4';


const About = () => { 
    window.scrollTo(0, 0);
    
    return(
        <div className="about-body">
            <div className="about-content">
                <video className='videoTag' autoPlay="autoplay" loop="loop" muted  playsInline>
                    <source src={About1} type='video/mp4' />
                </video>
                <div className="about-sub">
                    <h1>About</h1>
                    <p className='about-textA'>beatkino is a platform to stream a curated selection of independent cinema from around the world. 
Our goal is to collect remarkable works that might be dispersed and lost in the vast of the web and 
out of view of the commercial circles. The films in our catalog are selected because for the unique voice and character of their authors, their 
accomplishments on the cinematic craft or for presenting a particular point of view on a significant topic. </p>
                </div>
            </div>
            <div className="about-content">
                <p className='about-textB'> For the viewers, we look to offer an interesting and diverse catalog, an interesting alternative to mainstream media. For the authors, we mean to be a place to keep on display the work that could be considered past, a dynamic environment to keep the films close to viewers.  </p>
                <video className='videoTag' autoPlay="autoplay" loop="loop" muted  playsInline>
                    <source src={About2} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default About;
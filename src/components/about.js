import React from "react";
import About1 from '../assets/about01.mp4';
import About2 from '../assets/about02.mp4';
import './about.css';

const About = () => { 
    window.scrollTo(0, 0);
    
    
    return(
        <div className="about-body">
            <div className="about-content">
                <video className='videoTag' autoPlay loop muted>
                    <source src={About1} type='video/mp4' />
                </video>
                <div className="about-sub">
                <h1>About</h1>
                <p className='about-textA'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me?" he thought. </p>
                </div>
            </div>
            <div className="about-content">
                <p className='about-textB'> It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad. </p>
                <video className='videoTag' autoPlay loop muted>
                    <source src={About2} type='video/mp4' />
                </video>
            </div>
        </div>
    )
}

export default About;
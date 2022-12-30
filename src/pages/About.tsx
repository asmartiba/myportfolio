import React from 'react';
import me from './../images/me.jpg';
import './../styles/About.css';

const About = () => {
    return (
        <div className='hero'>
        <img src={me} alt="me" className='myimage'/>
        <p className='mytext'>
            As a doer, it interests me to discover things around me. Stepping out of comfort-zone has just made it expand.
            Interested in linguistics, philosophy, art, entheogens and IT.
            Painting thoughts… inspired by the existential intelligence, a wider understanding of the mind and surroundings. Breaking the ego’s interpretation and limitation of reality brings divine infinity.  An artwork is not what it is not, a place to draw conscience, feelings and emotions in this quantum world.
        </p>
        </div>
    )
}

export default About;
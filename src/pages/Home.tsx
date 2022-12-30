import React from "react";
import './../styles/Home.css';

const Home = () => {
    return (
    <div className="home">
        <div className="hero">
            <h2>Asmar Tiba</h2>
            <div className="aboutme">
                <p>
                    I have passion for languages, art and coding.
                </p>
                <div className="skills">
                    <h3>Works with:</h3>
                    <p>Adobe: Photoshop, After Effects, Animate, Illustrator, XD, Indesign, Audition, Premiere Pro, Blender 3D</p>
                    <br />
                    <h3>Programming:</h3>
                    
                        <h4>Front-end:</h4><p>NodeJS, React, HTML, React Native, CSS</p>
                        <h4>Back-end:</h4><p>ExpressJS, .NET, MySQL</p>
                        <h4>Programming Languages:</h4><p>C# and Typescript</p>
                    <br />  
                    <h3>Languages:</h3>
                    <p>English, Arabic, Russian, Hebrew, Turkish and Dutch</p>  
                </div>
            </div>
        </div>   
    </div>
    );
}

export default Home;
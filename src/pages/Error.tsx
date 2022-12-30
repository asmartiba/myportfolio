import React from "react";
import './../styles/Component.css';
import {Link} from 'react-router-dom';

let Gulpin = require("./../images/Gulpin.gif");

const Error = () => {
    return (
        <div className="compMain">
            <div className="ErrorPage">
                <h1 style={{marginTop: 20}}>404</h1>
                <h2>Looks like this page doesn't exist</h2>
                <img src={Gulpin} alt="Gulpin" width={150} height={140} />
                <h3 style={{marginTop: 80}}>how about you go <Link to={'/components'}><button className="Button">back</button></Link></h3>
            </div>
        </div>
    )
}

export default Error;
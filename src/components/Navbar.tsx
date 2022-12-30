import {Route, Link, useLocation} from 'react-router-dom';
import './../styles/Navbar.css';
import React, {useEffect, useState} from 'react';


const Navbar = () => {

    const [expandMenu, setExpandMenu] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandMenu(false)
    }, [location])

    return (
    <div className='navbar' id={expandMenu ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={() => {setExpandMenu((prev) => !prev)}}>
                ≡
            </button>
        </div>
 
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/components">Portfolio</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
    );
}

export default Navbar;
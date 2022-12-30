import React from 'react';
import './../styles/Footer.css';

interface FooterProps {
    copy: string;
    year: number;
}

const Footer = ({copy, year} : FooterProps) => {
    return (
        <div className='footer'>
            <p> Copyright &#169; {copy} {year}</p>
        </div>
    )
}

export default Footer
import React from 'react';
import './footer.css';
const Footer = () => {
    return (
        <div className='bg-dark text-white pt-2 footer' style={{height: '50px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <p>&copy;2021 All Right Reserved by Rashidul Karim</p>
        </div>
    );
};

export default Footer;
import React, { useState } from 'react'
import './navbarComponent.css';
import logo from '../images/logo.png';

const NavbarComponent = () => {
    // mobile navbar toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className='nav-main'>
                <div className='nav-logo' >
                    {/* add href to landing page on logo */}
                    <img src={logo} alt="logo" className='logo' />
                    <a href='/landing' className='nav-title'>Kinetic Footwear</a>
                </div>
                <div className={`nav-items ${isOpen && "open"} `}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </div>
                <div className={`nav-toggle ${isOpen && "open"} `}
                    onClick={() => setIsOpen(!isOpen)}>
                    <div className='bar'></div>
                </div>
            </div>
        </>
    )
}

export default NavbarComponent
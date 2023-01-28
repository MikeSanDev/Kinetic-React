import React from 'react'
import './NavbarComponent.css';
import logo from '../images/logo.png';

function NavbarComponent() {
    return (
        <>
            <div className='nav-main'>
                <div className='nav-logo' >
                    {/* add href to landing page on logo */}
                    <img src={logo} alt="logo" className='logo' />
                    <a href='/landing' className='nav-title'>Kinetic Footwear</a>
                </div>
                <div className='nav-items'>
                    <a href="/home/">Home</a>
                    <a href="/about">About</a>
                </div>
                <div className='nav-toggle'>
                    <div className='bar'></div>
                </div>
            </div>
        </>
    )
}

export default NavbarComponent
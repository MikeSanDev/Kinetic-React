import React, { useRef } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import './NavbarComponent.css';
import logo from '../images/logo.png';

const NavbarComponent = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className='nav-main'>
                <div className='nav-logo' >
                    {/* add href to landing page on logo */}
                    <img src={logo} alt="logo" className='logo' />
                    <a href='/landing' className='nav-title'>Kinetic Footwear</a>
                </div>
                <nav ref={navRef} className='nav-items'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>

                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavbarComponent
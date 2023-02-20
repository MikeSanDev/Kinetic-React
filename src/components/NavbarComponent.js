import React, { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
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
                <div className='nav-logo'>
                    <a href="/Home">
                        <img src={logo} alt="logo" className='logo' />
                    </a>
                    <a href='/' className='nav-title'>Kinetic Footwear</a>

                </div>
                <nav ref={navRef} className='nav-items'>
                    <a href="/Home">Home</a>
                    <a href="/About">About</a>
                    <a href="/Survey">Survey</a>
                    <a href="#concepts">Concepts</a>
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
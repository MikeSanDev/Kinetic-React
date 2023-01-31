import React from 'react';
import './footer.css';
import logo from '../images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer id="foot-main">
                <div className='main-col'>
                    <img className="foot-icon" src={logo} alt="logo" />
                    <div className='top-row'>
                        <div className="col-1">

                            <h4>Follow Us On</h4>
                            <div className="icon">
                                <div className='icon-group'>
                                    <FaFacebook className="fa-brands fa-facebook" />
                                    <a > Facebook </a>
                                </div>
                                <div className='icon-group'>
                                    <FaTwitter className="fa-brands fa-twitter" />
                                    <a > Twitter </a>
                                </div>
                                <div className='icon-group'>
                                    <FaInstagram className="fa-brands fa-instagram-square" />
                                    <a > Instagram</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4>About</h4>
                            <a href="/About">About Us</a>
                            <a >Contact Us</a>
                        </div>
                        <div className="col-3">
                            <h4>My Account</h4>
                            <a >Help</a>
                        </div>
                    </div>
                    <div className="call-action">
                        <p className="news-text">
                            Stay updated on our journey!
                        </p>
                        <form action="https://formsubmit.co/mjs070594@gmail.com" method="POST">
                            <input className="email_form" name="email" type="email" placeholder="Your email address" required />
                            <input type="hidden" name="_subject" value="" />
                            <input type="hidden" name="_next" value="" />
                            <button className="normal">Sign Up</button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
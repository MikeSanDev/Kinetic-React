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
                                    <h6 > Facebook </h6>
                                </div>
                                <div className='icon-group'>
                                    <FaTwitter className="fa-brands fa-twitter" />
                                    <h6 > Twitter </h6>
                                </div>
                                <div className='icon-group'>
                                    <FaInstagram className="fa-brands fa-instagram-square" />
                                    <h6 > Instagram</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4>About</h4>
                            <a href="/About">About Us</a>
                            <h6 >Contact Us</h6>
                        </div>
                        <div className="col-3">
                            <h4>My Account</h4>
                            <h6 >Help</h6>
                        </div>
                    </div>
                    <div className="call-action">
                        <p className="news-text">
                            Stay updated on our journey!
                        </p>
                        <form action="https://formsubmit.co/njohn@hawk.iit.edu" method="POST" className='call-action'>
                            <input className="email_form" type="email" placeholder="Your Email" name="email" required />
                            <input type="hidden" name="_next" value="/Thanks"></input>
                            <button className="normal" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
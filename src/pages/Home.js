import React, { useState } from 'react';
import NavbarComponent from '../components/NavbarComponent';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import SurveyBanner from '../components/SurveyBanner';
import Footer from '../components/Footer';
import detail from '../detail.js';
import { motion } from 'framer-motion';


const CreateCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='top'>
                <img
                    className="card-img"
                    src={isHovered ? props.hoverImage : props.image}
                    alt={props.name}
                    style={{ width: "385px", height: "300px" }}
                />
            </div>
            <div className="bottom">
                <h2 className="name">{props.name}</h2>
            </div>
        </div>
    );
};



function Home() {
    return (
        <motion.div
            transition={{
                duration: 1.50
            }}
            initial={{
                y: 0,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}>
            <NavbarComponent />
            <div id="hero">
                <motion.div
                    transition={{
                        duration: 1
                    }}
                    initial={{
                        x: 20,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }} className="hero-text">
                    <h1>Freedom of Energy For You.</h1>
                </motion.div>
                <motion.div
                    transition={{
                        delay: 1
                    }}
                    initial={{
                        x: 30,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }} className="news-text">
                    <p>
                        If you are interested, sign up to follow our journey and get
                        <span> 10% off</span> our first launch!
                    </p>
                </motion.div>
                <form action="https://formsubmit.co/njohn@hawk.iit.edu" method="POST" className='call-action'>
                    <input className="email_form" type="email" placeholder="Your Email" name="email" required />
                    <input type="hidden" name="_next" value="https://kineticfootwear.org/NewSub"></input>
                    <button className="normal" type="submit">Subscribe</button>
                </form>

            </div>
            <hr className="hero-hr" />
            <Banner1 />
            <Banner2 />
            <hr className="bw_hr" />
            <div id="concepts" className='products'>
                <h1 className="title">Design Concepts</h1>
                <p>Our theorized model and colorways</p>
                <div className='all-cards'>
                    {detail.map(CreateCard)}
                </div>
            </div>
            <hr className='blue-yellow-hr' />
            <SurveyBanner />
            <hr className='yellow-blue-hr' />
            <Footer />
        </motion.div>
    )
}

export default Home
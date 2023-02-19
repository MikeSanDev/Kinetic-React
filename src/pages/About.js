import React from 'react'
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import jumpLeft from '../images/jump_left.svg';
import walkRight from '../images/walk_right.svg';
import zombie from '../images/zombie_left.svg';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <NavbarComponent />
            <hr className="dark-light-hr" />
            <section className="about-main ">
                <motion.h1
                    transition={{
                        duration: 1.5
                    }}
                    initial={{
                        y: -20,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }} className="tech_title">Our Story:</motion.h1>
                <div className="tech_info story_info">
                    <motion.p
                        transition={{
                            duration: 2
                        }}
                        initial={{
                            y: -20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 20,
                            opacity: 1,
                        }}>As people who have experienced the frustration of a dead phone at the most inconvenient times, We understand how important it is to stay connected. Getting lost in a new city, missing out on a concert, or not being able to receive an important call can be incredibly stressful. That's why, at Kinetic Footwear, we've combined our passion for shoe design with our engineering expertise to address this growing problem in our increasingly connected world. Our energy harvesting shoe allows you to stay connected on the go without worrying about your phone dying. Join us in our mission to keep you moving, no matter where life takes you.</motion.p></div>
                <motion.div
                    transition={{
                        duration: 2.5
                    }}
                    initial={{
                        y: -20,
                        opacity: 0,
                    }}
                    animate={{
                        y: 20,
                        opacity: 1,
                    }} className="main_block">
                    <div className="tech_block tb1">
                        <div className="tech_photo tech_pic1"><img src={zombie} alt="zombie" />
                        </div>
                        <div className="tech_info">
                            <h5>Walking is an everyday activity!</h5>
                            <p>Did you know that when you walk, your footsteps generate a significant amount of energy that is absorbed by the surface beneath your feet? While this energy may not be enough to power large buildings or streetlights, it can certainly be harnessed to power smaller devices in our daily lives </p>
                        </div>
                    </div>
                    <div className="tech_block tb2">
                        <div className="tech_info">
                            <h5>Our product does just that.</h5>
                            <p> Despite the fact that many attempts have been made to create energy harvesting shoes (as evidenced by the hundreds of patents on such devices), there isn't a product quite like ours on the market today. While other attempts have fallen short due to insufficient power output, our innovative design overcomes this challenge, providing ample power to keep you connected on the go.
                            </p>
                        </div>
                        <div className="tech_photo tech_pic2"><img src={walkRight} alt="walking" />
                        </div>
                    </div>
                    <div className="tech_block tb3">
                        <div className="tech_photo tech_pic1"><img src={jumpLeft} alt="jumping" />
                        </div>
                        <div className="tech_info">
                            <h5>How does it work?
                            </h5>
                            <p>
                                Our energy harvesting shoe is designed to harness the compression energy created by every step and convert it into electricity that can be used to power your portable devices. With our shoe, you can get a full phone's worth of charge in just an hour of walking, making it easier to stay connected and enjoy your activities without worrying about battery life. </p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <hr className='light-dark-hr' />
            <Footer />
        </motion.div>
    )
}

export default About
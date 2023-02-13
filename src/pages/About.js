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
            <hr class="dark-light-hr" />
            <section class="about-main ">
                <h1 class="tech_title">How It Works:</h1>
                <div class="main_block">
                    <div class="tech_block tb1">
                        <div class="tech_photo tech_pic1"><img src={zombie} alt="zombie" />
                        </div>
                        <div class="tech_info">
                            <h5>Walking is an everyday activity!</h5>
                            <p>When humans walk, they actually put a fair amount of energy into the surface of which they are
                                moving on. After looking at many studies we found the range to be 50-67 Watts based on specific
                                variables (weight, speed, etc.). Now this isn’t enough power to power streetlights or buildings
                                but it is enough to be useful in our daily lives. </p>
                        </div>
                    </div>
                    <div class="tech_block tb2">
                        <div class="tech_info">
                            <h5>Our product does just that.</h5>
                            <p> Although many people have tried making an energy harvesting shoe before (as demonstrated by the
                                hundreds of patents on these types of devices) there isn’t a product like ours on the market!
                                This isn’t because of manufacturing or market reasons, but simply because no one has <span><strong>gotten enough power.</strong></span>
                            </p>
                        </div>
                        <div class="tech_photo tech_pic2"><img src={walkRight} alt="walking" />
                        </div>
                    </div>
                    <div class="tech_block tb3">
                        <div class="tech_photo tech_pic1"><img src={jumpLeft} alt="jumping" />
                        </div>
                        <div class="tech_info">
                            <h5>Our energy harvesting system gets way more energy than anyone else has ever gotten before.</h5>
                            <p>
                                Enough to make a product that can be useful! We are aiming to allow people to power their lives
                                by doing nothing more than what they would normally do. Imagine never having to check the
                                battery on your phone when you leave for work in the morning. Never having to carry around a
                                bulky power brick and a cable just so you can wait in line for that concert. All of these and
                                more become possible. </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='light-dark-hr' />
            <Footer />
        </motion.div>
    )
}

export default About
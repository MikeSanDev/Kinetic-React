import React from 'react'
import './banner2.css'
import gif from '../images/landing.mp4'

function Banner2() {
    return (
        <div id="banner2">
            <div class="idx_about_gif">
                <img src={gif} alt="kinetic gift" />
            </div>
            <div class="index_about">

                <h1 class="about-title">Giving portable power a new meaning
                </h1>
                <p>Looking for a way to stay connected on the go? In today's world, staying connected is more important than ever, and that's where Kinetic footwear comes in. We understand the importance of reliable connectivity and are proud to offer a solution.With our energy harvesting shoe, you can generate electricity with every step you take.
                    <br /><br /> This means you'll never have to worry about running out of battery life on your mobile devices, even when you're out and about. Plus, with no need for cables or external chargers, our energy harvesting shoe is the most convenient way to keep your devices charged on the go.</p>
                <button class="normal"><a class="learn-text" href="/about">Learn More</a></button>
            </div>

        </div>
    )
}

export default Banner2
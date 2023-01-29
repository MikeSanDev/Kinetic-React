import React from 'react'
import './banner2.css'
import gif from '../images/kinetic.gif'

function Banner2() {
    return (
        <div id="banner2">
            <div class="idx_about_gif">
                <img src={gif} alt="kinetic gift" />
            </div>
            <div class="index_about">
                <span class="banner--emoji">🔋👟🧠</span>
                <h1 class="about_title">The Problem</h1>
                <p>The only solution if you want power on the go is a portable power bank. These are great for storing energy, but
                    they are bulky, and force you to charge them and carry them, cables and all if you ever want to use them. Our
                    product solves all issues power banks have, all in the palm of your…feet. </p>
                <p>All you have to do is walk!</p>
                <button class="normal"><a class="learn-text" href="/about">Learn More</a></button>
            </div>

        </div>
    )
}

export default Banner2
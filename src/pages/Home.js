import React from 'react'
import Concept from '../components/Concept'

function Home() {
    return (
        <>
            <div id="hero">
                <div class="hero-text">
                    <h1>Freedom of Energy For You.</h1>
                </div>
                <div class="newstext">
                    <p>
                        if you are interested, sign up to follow our journey and get
                        <span>10% off</span> our first launch!
                    </p>
                </div>
            </div>
            <hr class="hero-hr" />
            <Concept />
        </>
    )
}

export default Home
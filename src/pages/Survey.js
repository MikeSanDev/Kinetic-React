import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import axios from 'axios'

function Survey() {
    return (
        <>

            <NavbarComponent />
            <div className="survey-container">

                <br></br>
                <h1>Survey</h1>
            </div>


            <Footer />

        </>
    )
}

export default Survey
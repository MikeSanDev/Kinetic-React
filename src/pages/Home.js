import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarComponent from '../components/NavbarComponent';
import Banner1 from '../components/Banner1';
import Banner2 from '../components/Banner2';
import SurveyBanner from '../components/SurveyBanner';
import Footer from '../components/Footer';
import detail from '../detail.js';


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
        <>
            <NavbarComponent />
            <div id="hero">
                <div className="hero-text">
                    <h1>Freedom of Energy For You.</h1>
                </div>
                <div className="news-text">
                    <p>
                        if you are interested, sign up to follow our journey and get
                        <span>10% off</span> our first launch!
                    </p>
                </div>
                <Form className='call-action'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className="email_form" type="email" placeholder="Your Email" />
                        <Button className="normal" type="submit">
                            Submit
                        </Button>
                    </Form.Group>

                </Form>
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
        </>
    )
}

export default Home
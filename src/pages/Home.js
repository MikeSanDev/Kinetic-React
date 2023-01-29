import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Concept from '../components/Concept'

function Home() {
    return (
        <>
            <div id="hero">
                <div class="hero-text">
                    <h1>Freedom of Energy For You.</h1>
                </div>
                <div class="news-text">
                    <p>
                        if you are interested, sign up to follow our journey and get
                        <span>10% off</span> our first launch!
                    </p>
                </div>
                <Form className='call-action'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className="email_form" type="email" placeholder="Your Email" />
                        <Button className="normal" variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>

                </Form>
            </div>
            <hr class="hero-hr" />
            <Concept />
        </>
    )
}

export default Home
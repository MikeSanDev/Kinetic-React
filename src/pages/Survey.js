import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Survey() {

    // form states 
    const [email, setEmail] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [question6, setQuestion6] = useState('');
    const [question7, setQuestion7] = useState('');

    return (
        <>
            <NavbarComponent />
            <hr className="blue-bright" />
            <div className="survey-container">
                <br></br>
                <h1 className='title'>Survey</h1>
                <br></br>


                {/* Form */}
                <Form className='form-main'>
                    <Form.Group className="form-control" >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control id="input-box" type="email" placeholder="Enter email" required
                            onChange={(e) => setEmail(e.target.value)} value={email} />

                        <Form.Text className="text-muted">
                            (We'll never share your email with anyone else.)
                        </Form.Text>

                    </Form.Group>

                    <br />
                    {/* Question 1 */}
                    <Form.Group className="form-control">
                        <Form.Label column lg={2}>
                            What is your first impression of this product?
                        </Form.Label>
                        <Form.Control id="input-box" type="text" placeholder="Normal text" required
                            onChange={(e) => setQuestion1(e.target.value)} value={question1} />
                    </Form.Group>
                    <br />
                    {/*  Question 2 */}
                    <Form.Group className="form-control">
                        <Form.Label column lg={2}>
                            What features would you add?
                        </Form.Label>
                        <Form.Control id="input-box" type="text" placeholder="Normal text" required
                            onChange={(e) => setQuestion2(e.target.value)} value={question2} />

                    </Form.Group>
                    <br />

                    {/*  Question 3 */}
                    <Form.Group as={Row} className="form-control">
                        <Form.Label as="legend" column sm={2}>
                            Is the product a good value for the price?
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Yes"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="No"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </Col>
                    </Form.Group>
                    <br />
                    {/*  Question 4 */}
                    <Form.Group as={Row} className="form-control">
                        <Form.Label as="legend" column sm={2}>
                            How likely would you find this product useful?                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Very Likely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Somewhat Likely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Neutral"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Somewhat Unlikely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Very Unlikely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </Col>
                    </Form.Group>
                    <br />

                    {/*  Question 5 */}
                    <Form.Group as={Row} className="form-control">
                        <Form.Label as="legend" column sm={2}>
                            If the product was available today, how likely would you be to buy it?
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Very Likely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Somewhat Likely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Neutral"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Somewhat Unlikely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Very Unlikely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </Col>
                    </Form.Group>
                    <br />

                    {/*  Question 6 */}
                    <Form.Group as={Row} className="form-control">
                        <Form.Label as="legend" column sm={2}>
                            How likely are you to recommend this product to people you know?                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="Very Likely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="Somewhat Likely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Neutral"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Somewhat Unlikely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Very Unlikely"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </Col>
                    </Form.Group>
                    <br />

                    {/* Question 7 */}
                    <Form.Group className="form-control" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Any comments or suggestions?</Form.Label>
                        <br />
                        <Form.Control id="area-box" as="textarea" rows={4}
                            onChange={(e) => setQuestion7(e.target.value)} value={question7} />
                    </Form.Group>
                    <br />
                    <Button className='survey-btn' type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <hr className="bright-blue" />
            <Footer />

        </>
    )
}

export default Survey
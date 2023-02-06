import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function Survey() {

    // form states 
    const [email, setEmail] = useState('');
    const [question1, setQuestion1] = useState('');
    const [age, setAge] = useState(0);
    const [question3, setQuestion3] = useState('');
    const [question4, setQuestion4] = useState('');
    const [question5, setQuestion5] = useState('');
    const [question6, setQuestion6] = useState('');
    const [question7, setQuestion7] = useState('');
    const [question8, setQuestion8] = useState('');
    const [question9, setQuestion9] = useState('');
    const [question10, setQuestion10] = useState('');
    const [question11, setQuestion11] = useState('');

    // submit event 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, question1, age, question3, question4, question5,
            question6, question7, question8, question9, question10, question11);
    }

    return (
        <>
            <NavbarComponent />
            <hr className="blue-bright" />
            <div className="survey-container">
                <br></br>
                <h1 className='title'>Survey</h1>
                <br></br>


                {/* Form */}
                <Form autoComplete='off' className='form-main'
                    onSubmit={handleSubmit}>
                    <Form.Group className="form-control" >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control className="input-box" type="email" placeholder="Enter email" required
                            onChange={(e) => setEmail(e.target.value)} value={email} />

                        <Form.Text className="text-muted">
                            (We'll never share your email with anyone else.)
                        </Form.Text>

                    </Form.Group>

                    <br />
                    {/* Question 1 */}
                    <Form.Group className="form-control">
                        <Form.Label>
                            What is your name and what do you do (occupation)?
                        </Form.Label>
                        <Form.Control className="input-box" type="text" required
                            onChange={(e) => setQuestion1(e.target.value)} value={question1} />
                    </Form.Group>
                    <br />
                    {/*  Question 2 */}
                    <Form.Group className="form-control">
                        <Form.Label>
                            Age:
                        </Form.Label>
                        <Form.Control className="input-box" type="number" min={1} max={100} required
                            onChange={(e) => {
                                if (e.target.value <= 100) {
                                    setAge(e.target.value);
                                }
                            }}
                            value={age} />
                    </Form.Group>
                    <br />
                    {/*  Question 3 */}
                    <Form.Group className="form-control">
                        <Form.Label >
                            Gender:
                        </Form.Label>
                        <br />
                        <Form.Select className="input-box"
                            onChange={(e) => setQuestion3(e.target.value)} value={question3}>
                            <option></option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="2">I do not wish to self-identify</option>
                        </Form.Select>
                    </Form.Group>
                    <br />
                    {/*  Question 4 */}
                    <Form.Group className="form-control">
                        <Form.Label>
                            What is your impression of our energy harvesting shoe?
                        </Form.Label>
                        <Form.Control className="input-box" type="text" required
                            onChange={(e) => setQuestion4(e.target.value)} value={question4} />
                    </Form.Group>
                    <br />

                    {/*  Question 5 */}
                    <Form.Group className="form-control">
                        <Form.Label >
                            How often do you engage in physical activities such as running, walking or hiking per day?
                        </Form.Label>
                        <br />
                        <Form.Select className="input-box"
                            onChange={(e) => setQuestion5(e.target.value)} value={question5} >
                            <option></option>
                            <option value="1">0-1 hours</option>
                            <option value="2">2-4 hours</option>
                            <option value="2">4-6 hours</option>
                            <option value="2">6+ hours</option>
                        </Form.Select>
                    </Form.Group>
                    <br />

                    {/*  Question 6 */}
                    <Form.Group className="form-control">
                        <Form.Label >
                            How likely are you to buy this product?
                        </Form.Label>
                        <br />
                        <Form.Select className="input-box"
                            onChange={(e) => setQuestion6(e.target.value)} value={question6}>
                            <option></option>
                            <option value="1">Shut up and take my money</option>
                            <option value="2">Likely</option>
                            <option value="2">On The Fence</option>
                            <option value="2">Not Convinced</option>
                            <option value="2">Never</option>
                        </Form.Select>
                    </Form.Group>
                    <br />

                    {/*  Question 7 */}
                    <Form.Group className="form-control">
                        <Form.Label >
                            Is this product a good value for the price ($200-300)?
                        </Form.Label>
                        <br />
                        <Form.Select className="input-box"
                            onChange={(e) => setQuestion7(e.target.value)} value={question7}>
                            <option></option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </Form.Select>
                    </Form.Group>
                    <br />
                    {/* Question 8 */}
                    <Form.Group className="form-control">
                        <Form.Label className="sub-text">
                            If not, what would be?
                        </Form.Label>
                        <Form.Control className="input-box" type="text" required
                            onChange={(e) => setQuestion8(e.target.value)} value={question8} />
                    </Form.Group>
                    <br />

                    {/*  Question 9 */}
                    <Form.Group className="form-control">
                        <Form.Label >
                            How likely are you to recommend this product to someone?
                        </Form.Label>
                        <br />
                        <Form.Select className="input-box"
                            onChange={(e) => setQuestion9(e.target.value)} value={question9}>
                            <option></option>
                            <option value="1">Very Likely</option>
                            <option value="2">Likely</option>
                            <option value="2">Not Likely</option>
                            <option value="2">Never</option>
                        </Form.Select>
                    </Form.Group>
                    <br />
                    {/* Question 10 */}
                    <Form.Group className="form-control">
                        <Form.Label>
                            What do you like about this product and what would you like to see it have?
                        </Form.Label>
                        <Form.Control className="input-box" type="text" required
                            onChange={(e) => setQuestion10(e.target.value)} value={question10} />
                    </Form.Group>
                    <br />
                    {/* Question 11 */}
                    <Form.Group className="form-control" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Anything else you would like to share with us?
                        </Form.Label>
                        <br />
                        <Form.Control className="area-box" as="textarea"
                            onChange={(e) => setQuestion11(e.target.value)} value={question11} />

                    </Form.Group>
                    <br />
                    <Button className="survey-btn" type="submit">
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
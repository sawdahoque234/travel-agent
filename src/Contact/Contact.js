import React from 'react';
import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { FaFacebook ,FaLinkedinIn,FaTwitterSquare,FaTelegram} from "react-icons/fa";
import './Contact.css'

const Contact = () => {
    return (
        <>
        <Container>
            <h4 className="fw-bold fst-italic text-primary fs-2 mt-4 text-uppercase text-decoration-underline py-5 text-lg-center">Contact Us</h4>
            <Row className="py-3">
                <Col sm={6}>
                    <img className="img-fluid rounded-3 p-3 w-100 rounded-2 shadow-lg border-3" src="https://media.istockphoto.com/photos/bern-picture-id475439326?b=1&k=20&m=475439326&s=170667a&w=0&h=JFEW2mYqYiAba5MT06dJGa3OLadDB2fAFShk6hljk8Y=" alt="" />
                </Col>
                <Col sm={6}>
                    <p className="fw- text-info fw-bolder fst-italic fs-2">CONTACT US ANYTHING</p>
                    <div className="w-75 mx-auto d-block">
                    <Form>
                    <Form.Group className="mb-3 py-2" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="your full name*" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" placeholder="comments/question*" rows={5} />
                            </Form.Group>
                            <Button variant="primary">Send Now</Button>
                    </Form>
                </div>
                </Col>
</Row>

        </Container>
        <Container>
<Row id="hd2">
                    <Col sm={7}>
                    <Row >
                <Col xs={3} className="fs-4  px-2 fw-bold  text-white text-lg-center">
                        4215<br />
                        
                        OUTSTANDING TOURS
                </Col>
                <Col xs={4} className="fs-4 mx-2   fw-bold  text-white text-lg-center">
                        1801<br />
                        WORLDWIDE CRUISE
                </Col>
                <Col xs={4} className="fs-4  fw-bold   text-white text-lg-center">
                        1220 <br />
                        LUXURY CAR BOOKING


                </Col>
                    
            </Row>
                        
</Col>
<Col sm={4}><h3 className="text-white mt-3" >CONTACT DETAILS</h3><br />
                    
                    <p className="text-white fs-4">
                    <span ><FaFacebook /></span><span className="mx-3">
                    <FaLinkedinIn />
                    </span>
                    <FaTwitterSquare />
                    <span className="mx-3">
                    <FaTelegram/>
                    </span>
                    </p>
                </Col>
</Row>

</Container>
    </>

    );
};

export default Contact;
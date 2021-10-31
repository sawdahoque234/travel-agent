import React from 'react';
import { Col, Form, Button, Row } from 'react-bootstrap';
import { BsLinkedin,BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

import './LasPart.css'

const LastPart = () => {
    return (
        <>
                <Row className="mt-5 lastpart text-white">
                    <Col xs={4} className="mx-4 my-5 py-3">
                        <h3>HoQTravel</h3>
                    <p>HoQTrave is a private retailer or public service that provides travel and tourism-related services to the people.<br />And suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours.</p>
                    <h3 class="py-3 my-2 text-white"><BsLinkedin /> <span className="text-info mx-2"><BsTwitter /></span> <BsFacebook /> <span className="text-warning mx-2"><BsInstagram/></span>
                    </h3>
                    </Col>
                <Col xs={7}>
                <p className="fw-bold fs-2 mt-3">Get In Touch</p>
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
                    </Form>
                    <div className="my-3">
<Button variant="primary">Send Now</Button>

                    </div>
                    </Col>
                </Row>
        </>
    );
};

export default LastPart;
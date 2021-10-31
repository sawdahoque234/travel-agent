import React from 'react';
import offer from '../../../img/offer.jpg'
import { Col, Row } from 'react-bootstrap';
import './offer.css'



const Offer = () => {
    return (
        <>
            <Row className="bg-warning my-5 py-3 mx-2 ">
                <Col xs={6}>
            <img src={offer} className=" w-100 h-100 rounded-3 shadow-lg border-3" alt="" />
            </Col>
                <Col xs={6} className="bg  text-white fw-bolder">
                    <h1 className="hd1 py-4 my-3 ">Best Offer</h1>
                    <h1>Bodrum Alacati To <br /> Istanbul Tour</h1>
                    <h2>7 NIGHTS, 6 DAYS</h2>
                    <h1 className="hd1 py-4 my-3 ">$1,455.0</h1>
                    <button className="btn btn-outline-warning fs-4"> Book Now</button>


            </Col>
            </Row>
        </>
    );
};

export default Offer;
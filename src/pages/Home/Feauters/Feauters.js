import React from 'react';
import { Col,  Container,  Row } from 'react-bootstrap';
import { AiFillDollarCircle,AiFillLike ,AiFillLock} from "react-icons/ai";
import './Features.css'
const Feauters = () => {
    return (
        <>
            <Container>
            <Row className="bg-gray rounded-3 border-3 shadow-lg">
                <Col xs={4}>
                    <span className="aisign"><AiFillDollarCircle /></span>
                    <h3>Best Price Guarantee</h3>
                    <p className="text-lg-start px-3 mx-2">In the unlikely event that you find a lower rates on HoQTravel we will either cancel your current itinerary and provide you a full refund, or refund you the entire difference in price. You will need to provide documentation that all the elements of ours</p>
                </Col>
                <Col xs={4}>
                <span className="aisign"><AiFillLock /></span>
                <h3>Safe and Secure</h3>
                <p className="text-lg-start px-3">For Clients conformantion  agents also provide information on customs regulations, required documents (passports, visas, and certificates of vaccination), travel advisories, and currency exchange rates.And Secret All the informantion of customers.</p>
                </Col>
                <Col xs={4}>
                <span className="aisign"><AiFillLike /></span>
                <h3>Best Travel Agent</h3>
                <p className="text-lg-start px-3">HoQTrave is a private retailer or public service that provides travel and tourism-related services to the people. And suppliers such as activities, airlines, car rentals, cruise lines, hotels, railways, travel insurance, and package tours.</p>
                </Col>
                </Row>
                </Container>
        </>
    );
};

export default Feauters;
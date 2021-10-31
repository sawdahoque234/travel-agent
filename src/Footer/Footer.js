import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineMail,AiFillPhone } from "react-icons/ai";
import './Footer.css'
import logo from '../img/logo.png'


const Footer = () => {
    return (
        <div>
  
  <Row id="footer1" className="">
<Col><p href="#home" className="fst-italic fw-bolder text-white text-decoration-underline mx-3 mt-3"><img src={logo} id="logo" alt="" />HoQTravel</p></Col>
<Col className="text-white mt-3">All Right Reserved.@hoqtravel 2021</Col>
                <Col className="text-white mt-3">
                   
        <span className="mx-2"><AiOutlineMail/></span>: hoqtravel@email.com
                <span className="mx-2"><AiFillPhone/></span>: + 1 800 755 600
</Col>
  </Row>
        </div>
    );
};

export default Footer;
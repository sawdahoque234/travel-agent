import React from 'react';
import { BsLinkedin,BsFacebook,BsTwitter } from "react-icons/bs";
import { Col,Container, Row } from 'react-bootstrap';
import img1 from '../../../img/img1.jpg'
import img2 from '../../../img/img2.jpg'
import img3 from '../../../img/img3.jpg'
import img4 from '../../../img/img4.jpg'

const Team = () => {
    return (
        <>
            <Container
            >
            <h1 className="fs-1 fw-bolder py-5"> Meet Out Team</h1>
            <Row>
                <Col className="border-3 rounded-3 shadow-lg">
                    <img src={img1} className="border-3 rounded-circle" alt="" /><br />
                    <h3 class="py-3 my-2 text-primary"><BsLinkedin /> <span className="text-info mx-2"><BsTwitter /></span> <BsFacebook /> 
                    </h3>
                    <h3 className="fw-bold">Mr. Jhone Doe</h3>
                    <h5>Founder</h5>
                    </Col>
                <Col className="border-3 rounded-3 shadow-lg">
                    <img src={img2} className="border-3 rounded-circle" alt="" /><br />
                    <h3 class="py-3 my-2 text-primary"><BsLinkedin/> <span className="text-info mx-2"><BsTwitter/></span> <BsFacebook/> 
                    </h3>
                    <h3 className="fw-bold">Mr. Smith</h3>
                    <h5>Owner</h5>
                </Col>
                <Col className="border-3 rounded-3 shadow-lg">
                    <img src={img3} className="border-3 rounded-circle" alt="" /><br />
                    <h3 class="py-3 my-2 text-primary"><BsLinkedin/> <span className="text-info mx-2"><BsTwitter/></span> <BsFacebook/> 
                    </h3>
                    <h3 className="fw-bold">Mr. Wilson</h3>
                    <h5>Manager</h5>
                </Col>
                <Col className="border-3 rounded-3 shadow-lg">
                    <img src={img4} className="border-3 rounded-circle" alt="" /><br />
                    <h3 class="py-3 my-2 text-primary"><BsLinkedin/> <span className="text-info mx-2"><BsTwitter/></span> <BsFacebook/> 
                    </h3>
                    <h3 className="fw-bold">Mrs. Jerry</h3>
                    <h5>Moderator</h5>
                </Col>
                
                </Row>
                </Container>
        </>
    );
};

export default Team;
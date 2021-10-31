import React from 'react';
import {  Nav, Navbar, Button } from 'react-bootstrap';
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { BiLogInCircle} from "react-icons/bi";
import logo from '../../../img/logo.png'
import useAuth from '../../../hooks/useAuth';



const Header = () => {
  const { user, logOut } = useAuth();

    return (
        <>
<Navbar  id="hd2" fixed="top" variant="dark" className="">
<Navbar.Brand to="#home" className="fst-italic fw-bolder text-white  mx-3 text-decoration-underline"><img src={logo} id="logo" alt="" />HoQ<span className="text-warning">Travel</span></Navbar.Brand>
            <Navbar.Toggle />
<Navbar.Collapse className="ms-auto text-white justify-content-end">
              <Nav.Link as={HashLink}  className="text-white fw-bold " to="/home">Home</Nav.Link>
              <Nav.Link as={HashLink} className="text-white fw-bold " to="/tours">Tour</Nav.Link>
            <Nav.Link  as={HashLink} className="text-white fw-bold " to="/contact">Contact Us</Nav.Link>
            
{/* **********after login***** */}
              {user.email && <Nav.Link as={HashLink} className="text-white fw-bold " to="/mybook">My Booking</Nav.Link>}
              {user.email &&
                <Nav.Link as={HashLink} className="text-white fw-bold " to="/managebooking">Manage All Booking</Nav.Link>}
              {user.email &&
              <Nav.Link as={HashLink} className="text-white fw-bold " to="/addtour">Add Tour</Nav.Link>
              }
              
{/* **********after login***** */}

              
              {user.email && <span className="mx-2 fw-bold" style={{ color: '#F2A808  ' }}>Hello! {user.displayName} </span>}
                {
                    user.email ?
                  <Button className="btn btn-warning text-white fw-bold mx-2 " onClick={logOut}>log out</Button>
                  
                        :
                  <Nav.Link as={HashLink} className="text-white fw-bold " to="/login"><span className="mx-2 "><BiLogInCircle/></span>Login</Nav.Link>
              }
              

    </Navbar.Collapse>

  </Navbar>  
        </>
    );
};

export default Header;
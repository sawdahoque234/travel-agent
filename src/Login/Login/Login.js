import React from 'react';
import { Container } from 'react-bootstrap';
import {useLocation, useHistory } from 'react-router-dom';

import { FcGoogle } from "react-icons/fc";
import { GrMail } from "react-icons/gr";
import './Login.css'
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();

    const history = useHistory();
    console.log(history)
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <>
<Container className="loginpage">
<div className="loginform">
<form >
<h1 className="mt-5 text-lg-center py-3">Please Sign In</h1>

<input className="mx-auto d-block" type="text" placeholder="Enter your name"/>
<br />
<input className="mx-auto d-block" type="email" placeholder="Enter your email"/> <br />
<input className="mx-auto d-block" type="password"   placeholder="Enter your password" /><br />
<div className="row mb-3">
</div>
<button type="submit" className="btn mx-auto  py-0 fs-5 d-block btn-outline-dark px-2"><span className="text-success mx-3 fs-3"><GrMail/></span>Sign in With Email</button><br />
                    </form>

<button onClick={handleGoogleLogin} className="mx-4 py-0 fs-5 fw-bold btn btn-outline-dark"> <span className="mx-2 fs-3"><FcGoogle/></span>Sign In With Google</button>
</div>
</Container>
</>
    );
};

export default Login;
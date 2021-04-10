
import React from 'react';
import { Link } from 'react-router-dom';
import FireAuth from '../FireAuth/FireAuth';
import Navbar from '../Navbar/Navbar';
import './CreateAccount.css'

const Login = () => {
    return (
        <div className="container form">
            <Navbar></Navbar>
            <form className="login-form">
                <div className="form-inputs">
                    <h4>Create an account</h4>
                    <input type="text" placeholder="Name" required/>
                    <br/>
                    <input type="text" placeholder="Username or Email" required/>
                    <br/>
                    <input type="password" name="" id="" placeholder="Password" required/>
                    <br/>
                    <input type="password" name="" id="" placeholder="Confirm Password" required/>
                    <br/>
                    <input type="submit" value="Create An Account" className="create-btn" />
                    <br/>
                    <p className="text-center mt-3">Already have an account? <span><Link to="/login">Login</Link></span></p>
                </div>
            </form>

            <p className="text-center">or</p>
            
            <FireAuth></FireAuth>

        </div>
    );
};


export default Login;
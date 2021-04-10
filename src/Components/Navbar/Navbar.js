import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Navbar.css'
import firebase from "firebase/app";

const Navbar = () => {

    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);

    const handleLogOut = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setLoggedInUser({});
          }).catch((error) => {
            // An error happened.
          });

    }

    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <h1 className="brand">City Rider</h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/"><a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a></Link>
                        <Link to="/search"><a class="nav-item nav-link" href="#">Destination</a></Link>
                        <Link to="/blog"><a class="nav-item nav-link" href="#">Blog</a></Link>
                        <Link to="/contact"><a class="nav-item nav-link " href="#">Contact</a></Link>
                        <Link to="/login"><a href="#"><button
                        onClick={handleLogOut} 
                        className="login-btn">
                        {loggedInUser.email ? "Log Out" : "Login"}
                        </button></a></Link>
                    </div>
                </div>
        </nav>
    );
};

export default Navbar;
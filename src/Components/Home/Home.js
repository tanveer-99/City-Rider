import React from 'react';
import VehiclesCard from '../VehiclesCard/VehiclesCard';
import './Home.css';
import bike from '../../images/Frame.png'
import car from '../../images/Frame-1.png'
import bus from '../../images/Frame-2.png'
import train from '../../images/Group.png'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div className="home">
            <div className="container">

                <Navbar></Navbar> 

                
                

                <div className="vehicles-card">
                    <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                        <VehiclesCard img={bike} name="bike"></VehiclesCard>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                        <VehiclesCard img={car} name="bus"></VehiclesCard>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                        <VehiclesCard img={bus} name="car"></VehiclesCard>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 d-flex justify-content-center">
                        <VehiclesCard img={train} name="train"></VehiclesCard>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
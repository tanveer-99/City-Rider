import React from 'react';
import { Link } from 'react-router-dom';
import './VehiclesCard.css'

const VehiclesCard = (props) => {
    const { img, name } = props;
    return (
            <Link to="/search">
                <div className="cards">
                    <img src={img} alt=""/>
                    <h4>{name}</h4>
                </div>
            </Link>
    );
};

export default VehiclesCard;
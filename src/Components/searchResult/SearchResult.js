import React, { useState } from 'react';
import './SearchResult.css'
import car from '../../images/Frame-2.png';
import people from '../../images/peopleicon.png'

const SearchResult = (props) => {
    let from = false;
    let destination = false;
    if(props.from === undefined) {
        from = true;
    }
    if(props.destination === undefined) {
        destination = true;
    }
    return (
        <div className="search-box">
                
            <div className="route">
                <p>{from ? 'Dhanmondi' : props.from  }</p>
                <div className="line"></div>
                <p>{destination ? 'Jatrabari' : props.destination}</p>
            </div>
            <div className="vehicle-info mt-3">
                <div style={{width: '100px', marginRight: '30px'}} className="d-flex justify-content-between align-items-center">
                    <img src={car} alt=""/>
                    <p>car</p>
                    <img className="people" src={people} alt=""/>
                    <p>4</p>
                </div>
                <div>
                    <h5>$69</h5>
                </div>
            </div>

            <div className="vehicle-info mt-3">
                <div style={{width: '100px', marginRight: '30px'}} className="d-flex justify-content-between align-items-center">
                    <img src={car} alt=""/>
                    <p>car</p>
                    <img className="people" src={people} alt=""/>
                    <p>4</p>
                </div>
                <div>
                    <h5>$69</h5>
                </div>
            </div>

            <div className="vehicle-info mt-3">
                <div style={{width: '100px', marginRight: '30px'}} className="d-flex justify-content-between align-items-center">
                    <img src={car} alt=""/>
                    <p>car</p>
                    <img className="people" src={people} alt=""/>
                    <p>4</p>
                </div>
                <div>
                    <h5>$69</h5>
                </div>
            </div>

            <div className="vehicle-info mt-3">
                <div style={{width: '100px', marginRight: '30px'}} className="d-flex justify-content-between align-items-center">
                    <img src={car} alt=""/>
                    <p>car</p>
                    <img className="people" src={people} alt=""/>
                    <p>4</p>
                </div>
                <div>
                    <h5>$69</h5>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
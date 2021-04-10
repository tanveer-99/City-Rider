import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SearchResult from '../searchResult/SearchResult';
import './Search.css'

const Search = () => {
    const [from, setFrom] = useState();
    const [destination, setDestination] = useState();
    const [isRouteSelected, setIsRouteSelected] = useState(false);

    const handlePick = (e) => {
        if(e.target.name === 'from') {
            setFrom(e.target.value);
        }
        if(e.target.name === 'destination') {
            setDestination(e.target.value);
        }
    }

    const handleRoute = () => {
        setIsRouteSelected(true);
    }
    console.log(isRouteSelected);

    return (
        <div className="container">
            <Navbar></Navbar>
            <hr/>
           
            <div className="row container mb-4">
                <div className="col-md-3">

                {
                    !isRouteSelected && 
                    <div className="search-box">
                
                    <div className="pick-from">
                    <p className="mb-1">Pick From</p>
                        <select name="from" className="pick mb-3" onClick={handlePick}>
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Mirpur">Mirpur</option>
                            <option value="Jatrabari">Jatrabari</option>
                            <option value="Farmgate">Farmgate</option>
                            <option value="New Market">New Market</option>
                            <option value="Kamalapur">Kamalapur</option>
                            <option value="Motijheel">Motijheel</option>
                            <option value="Shahbag">Shahbag</option>
                            <option value="Shodorghat">Shodorghat</option>
                            <option value="Gulshan">Gulshan</option>
                            <option value="Uttara">Uttara</option>
                            <option value="Malibagh">Malibagh</option>
                        </select>
                    </div>
                    
                    <div className="pick-to">
                        <p className="mb-1">Pick To</p>
                        <select  name="destination"
                        className="pick m-0" onClick={handlePick}>
                                <option value="Jatrabari">Jatrabari</option>
                                <option value="Mirpur">Mirpur</option>
                                <option value="Dhanmondi">Dhanmondi</option>
                                <option value="Farmgate">Farmgate</option>
                                <option value="New Market">New Market</option>
                                <option value="Kamalapur">Kamalapur</option>
                                <option value="Motijheel">Motijheel</option>
                                <option value="Shahbag">Shahbag</option>
                                <option value="Shodorghat">Shodorghat</option>
                                <option value="Gulshan">Gulshan</option>
                                <option value="Uttara">Uttara</option>
                                <option value="Malibagh">Malibagh</option>
                        </select>
                    </div>

                    <br/>
                    <button onClick={handleRoute} className="search-btn">Search</button>
                    </div>
                }

                {
                    isRouteSelected && 
                    <SearchResult from={from} destination={destination}></SearchResult>
                }

                </div>
                <div className="col-md-9">
                    <div className="map">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29220.24963029752!2d90.38718648799276!3d23.728429502257303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!3m2!1d23.746149499999998!2d90.3742307!4m5!1s0x3755b9cc7d566d03%3A0x2472a49ac0504cd2!2sJatra%20Bari%2C%20Dhaka!3m2!1d23.710610199999998!2d90.43490919999999!5e0!3m2!1sen!2sbd!4v1616775199714!5m2!1sen!2sbd"  style={{border: '0'}} allowfullscreen="" loading="lazy"></iframe>                    
                    </div>
                </div>
            </div>
            

            

        </div>
    );
};

export default Search;
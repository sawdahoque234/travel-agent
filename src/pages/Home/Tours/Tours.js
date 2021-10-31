import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour'
import "./Tours.css"
const Tours = () => {
    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('https://macabre-chupacabra-39951.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data));
    }, [])
    return (
        <>
                <div  id="tours"  className="py-3">
            <h1  id="tour" className="fw-bolder  text-uppercase text-lg-center py-4 mt-5">OUR Tours Offers
        </h1>
        <div className="tour-container">
            {
                tours.map(tour => <Tour
                    key={tour.id}
                    tour={tour}
                ></Tour>)
            }
        </div>
        </div>
        
        
    </>
       
    );
};

export default Tours;
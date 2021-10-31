import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Tour.css'
const Tour = ({tour}) => {
    const { _id,name,price, description,duration, img } = tour;

    return (
  <>
  <div className="tourdiv  mx-2 text-lg-center shadow-lg border-3 rounded-3">
            
        <img className="tourimg" src={img} alt="" />
                <h3>{name}</h3>
                <h5 className="bg-secondary py-2 rounded-3 text-white "><span className="fw-bold mx-2">$ {price}.00</span> | <span >{duration}</span></h5>
                            <p className="">{description.slice(0, 200)}</p>
               
                                    
                        <Link to={`/bookingpage/${_id}`}>
                                         <button className="btn btn-primary tourbtn">Book Now</button>
                                    </Link>
                
                                    
        <br /><br />
            </div>
    </>        
   
    )
};

export default Tour;
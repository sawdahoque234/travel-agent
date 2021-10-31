import React from 'react';
import './Banner.css'
import banner1 from '../../../img/img5.jpg';


const Banner = () => {
    return (
        <>
            <div className="bannerdiv mb-5">
            <img src={banner1} className="a" alt="" />
                <h1 className="hd text-white fw-bolder">Explore All Corner of <br /> The <span className="text-warning">World</span> With Us</h1>
            <button className="btn btn-outline-warning fw-bold text-white fs-5 mt-3 ">Explore Now</button>
            </div>
            
            
        </>
    );
};

export default Banner;
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './booking.css'

const BookingPage = () => {
    const { tourId} = useParams();
    const [tour, setTour] = useState([]);
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://macabre-chupacabra-39951.herokuapp.com/tours/${tourId}`)
            .then(res => res.json())
            .then(data => setTour(data))
    },[tourId])

//booking
    const onSubmit = data => {
        const booked= {...tour}
        data.book = booked;
    fetch('https://macabre-chupacabra-39951.herokuapp.com/books', {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(result => {
            if (result.insertedId) {
                alert('Booking proceed successfully!!!')
                reset();
            }
        console.log(result)
    })
};
        return (
                <Container >
            <div className="bookingpage mt-5">
            <Row>
                                {/* *detail** */}
                <Col xs={6}>
                <div className="bookdiv py-3 border-2 shadow-lg rounded-3">
                <img src={tour.img} className="img w-75" alt="" />
                <h3>{tour.name}</h3>
                <h4>Cost: $ {tour.price}.0</h4>
                <h4>Duration: {tour.duration}</h4>
                <p>{tour.description}</p>
                </div>
                        </Col>
                        {/* *********************user details*************** */}
                        <Col xs={6}>
                            <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
                                <h3>Book Tour</h3>
                            <input defaultValue={user.displayName} {...register("name")} />

                            <input defaultValue={user.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}
                                            <input defaultValue={tour.name}  />
                                            <input defaultValue={tour.price}  />
                            <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input
                                        type="date"
                                        {...register("test")}
                                        />
                            <input placeholder="phone number" defaultValue="" {...register("phone")} />

                            <input type="submit" value="Conform Booking" className="bg-warning" />
                            </form>

                        </Col>
</Row>y
                
            </div>
                </Container>
        )
};
    
export default BookingPage;
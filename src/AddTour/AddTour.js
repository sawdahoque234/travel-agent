import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddTour.css'

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://macabre-chupacabra-39951.herokuapp.com/tours', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully!!')
                    reset();
                }
            })
    }
        return (
            <div className="add-tour">
                <h3>Add Tour Offer</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
      
                    <input type="text" placeholder="Place" {...register("name", { required: true })} />
                    <input type="number" placeholder="Cost" {...register("price")} />
                    <input type="character"  placeholder="Duration" {...register("duration")} />
                    <textarea type="text" placeholder="Description" {...register("description")} />
                    <input placeholder="Image" {...register("img")} />
                    <input type="submit" value="Add Now" />
                </form>
            </div>
        );
    };

export default AddTour;
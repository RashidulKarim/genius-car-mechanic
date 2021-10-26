import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const time = new Date();
    console.log(time);
    


    const onSubmit = data => {
        const allInfo = {...data, time}
        axios.post("http://localhost:5000/services",{
            allInfo
        })
        .then(res => {
            console.log(res);
            
            if(res.data.insertedId){
                alert("successfully Added the Service")
                reset();
            }
            
        })
    };
    return (
        <div>
            <h2 className='text-center p-3'>Add Services</h2>
            <div className='service-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Name' {...register("name")} />
      <input placeholder='price' type='number' {...register("price")} />
      <textarea placeholder='description' {...register("description")} />
      <input placeholder='img-url'  {...register("img")} />
      <input type="submit" />
    </form>
            </div>
        </div>
    );
};

export default AddService;
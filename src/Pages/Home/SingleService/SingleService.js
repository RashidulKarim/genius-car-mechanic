import axios from 'axios';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import useProducts from '../../../hooks/useProducts';

const SingleService = () => {
    const history = useHistory();
    const {id} = useParams();
    const {services} = useProducts()
    
    const handleDelete =() =>{
        axios.delete(`http://localhost:5000/service/${id}`)
        .then(res => {
            if(res.data.deletedCount>0){
                alert("deleted SuccessFully")
                history.push('/')
            }
            
        })
    } 
       
    let foundProduct
    if(services.length){
        foundProduct = services.find(service => service._id === (id))
        console.log(foundProduct);        
    }
    return (
      <div className='text-center flex justify-content-center align-items-center' style={{height: "85vh", width:'100vw'}}>
           <img src={foundProduct?.img} alt="" />
           <h2>{foundProduct?.name}</h2>
           <h5>Price : {foundProduct?.price}</h5>
           <p>{foundProduct?.description}</p>
           <button onClick={handleDelete}>Delete Service</button>
       </div>
    );
};

export default SingleService;
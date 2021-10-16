import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../../../hooks/useProducts';

const SingleService = () => {
    const {id} = useParams();
    const {services} = useProducts() 
    console.log(services);
       
    let foundProduct
    if(services.length){
        
        foundProduct = services.find(service => service.id === parseInt(id))
    }
    return (
      <div className='text-center flex justify-content-center align-items-center' style={{height: "85vh", width:'100vw'}}>
           <img src={foundProduct?.img} alt="" />
           <h2>{foundProduct?.name}</h2>
           <h5>Price : {foundProduct?.price}</h5>
           <p>{foundProduct?.description}</p>
       </div>
    );
};

export default SingleService;
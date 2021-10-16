import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, price, description, img} = service;
    return (
        <Col xs={12} sm={12} md={6} lg={4}>
            <div className='text-center my-3 border border-2 rounded'>
                <img className='w-100' src={img} alt="" />
                <div className='my-3'>
                    <h3>{name}</h3>
                    <h5>Price: {price}</h5>
                    <p>{description}</p>
                    <Link to={`/book/${id}`}><button className='btn btn-warning'>Book {name.toLowerCase()}</button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Service;
import React from 'react';
import { Col } from 'react-bootstrap';

const Expart = (props) => {
    const {img, name, expertize} = props.expart
    return (
        <Col xs={12} sm={6} md={6} lg={3}>
            <div className='text-center my-3 border border-2 rounded'>
                <img className='w-100' src={img} alt="" />
                <div className='my-3'>
                    <h3>{name}</h3>
                   <h4 className='text-danger'>{expertize}</h4>
                </div>
            </div>
        </Col>
    );
};

export default Expart;
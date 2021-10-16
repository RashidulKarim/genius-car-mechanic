import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';
import Service from '../Service/Service';

const Services = () => {
    const {services} = useProducts()    
    return (
        <Container fluid>
            <h2 className='mt-5 mb-3 text-center text-info'>Our Services</h2>
            <Row>
            {
                services.map(service => <Service key={service.id} service={service}></Service>)
            }
            </Row>
        </Container>
    );
};

export default Services;
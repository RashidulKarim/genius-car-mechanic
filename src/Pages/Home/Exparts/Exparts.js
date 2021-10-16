import React from 'react';
import { Container, Row } from 'react-bootstrap';
import image1 from '../../../images/mechanic/mechanic-1.jpg';
import image2 from '../../../images/mechanic/mechanic-2.jpg';
import image3 from '../../../images/mechanic/mechanic-3.jpg';
import image4 from '../../../images/mechanic/mechanic-4.jpg';
import Expart from '../Expart/Expart';
const exparts = [
    {
        img: image1,
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img: image2,
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: image3,
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: image4,
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    }
]

const Exparts = () => {
    return (
        <div>
            <Container fluid id='exparts'>
            <h2 className='mt-5 mb-3 text-center text-info'>Our Exparts</h2>
            <Row>
            {
                exparts.map(expart => <Expart key={expart.name} expart={expart}></Expart>)
            }
            </Row>
        </Container>
        </div>
    );
};

export default Exparts;
import React from 'react';
import Banner from '../Banner/Banner';
import Exparts from '../Exparts/Exparts';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div id='services'></div>
            <Services></Services>
            <Exparts></Exparts>
        </div>
    );
};

export default Home;
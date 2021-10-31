import React from 'react';
import LastPart from '../../../LastPart/LastPart';
import Banner from '../Banner/Banner';
import Feauters from '../Feauters/Feauters';
import Offer from '../Offer/Offer';
import Team from '../Team/Team';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tours></Tours>
            <Feauters></Feauters>
            <Offer></Offer>
            <Team></Team>
            <LastPart></LastPart>
        </div>
    );
};

export default Home;
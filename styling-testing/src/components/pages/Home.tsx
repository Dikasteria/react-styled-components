import React from 'react';
import InfoSection from "../patterns/InfoSection/InfoSection";
import Pricing from '../patterns/Pricing/Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <Pricing />
        </>
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import DiscoverSec from '../section/DiscoverSec';
import { Helmet } from 'react-helmet';
import ReactTab from '../Tab/ReactTab';
import Shipping from '../Shipping/Shipping';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Toy Wheelz</title>
            </Helmet>
            <Banner></Banner>
            <ReactTab></ReactTab>
            <Gallery></Gallery>
            <DiscoverSec></DiscoverSec>
            <Shipping></Shipping>
        </div>
    );
};

export default Home;
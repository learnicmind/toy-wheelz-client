import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import DiscoverSec from '../section/DiscoverSec';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <DiscoverSec></DiscoverSec>
        </div>
    );
};

export default Home;
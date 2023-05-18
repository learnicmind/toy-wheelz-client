import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="car1.jpg" alt="Car 1" className="w-full h-auto" />
                            <div className="carousel-overlay">
                                <h2 className="text-4xl font-bold text-white">Welcome to Toy Wheelz</h2>
                                <p className="text-xl text-white">Explore our collection of toy cars</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="car2.jpg" alt="Car 2" className="w-full h-auto" />
                            <div className="carousel-overlay">
                                <h2 className="text-4xl font-bold text-white">Discover the Fun</h2>
                                <p className="text-xl text-white">Experience the thrill of our toy cars</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="car3.jpg" alt="Car 3" className="w-full h-auto" />
                            <div className="carousel-overlay">
                                <h2 className="text-4xl font-bold text-white">Start Your Adventure</h2>
                                <p className="text-xl text-white">Embark on exciting journeys with our toy cars</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
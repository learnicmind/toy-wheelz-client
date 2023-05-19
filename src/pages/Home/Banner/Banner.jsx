import React from 'react';

const Banner = () => {
    return (
        <div className="relative">
            <img src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684449226~exp=1684449826~hmac=61818fef8f2d69f7574a5f4c2601be5486369d8d3b8f9581b202620c762aa9a1" alt="Banner" className="w-full h-screen" />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-black to-transparent">
                <div className="max-w-lg mx-auto text-center">
                    <h1 className="text-4xl font-bold text-white leading-tight">
                        Embark on a <span className="text-blue-500">Toy Car Adventure</span>
                    </h1>
                    <p className="text-xl text-white mt-4">Dive into a World Bursting with Toy Car Magic and Uncover a Playground of Endless Fun, Exploration, and the Joy of Unleashing Your Inner Child!</p>
                </div>
            </div>
        </div>




    );
};

export default Banner;
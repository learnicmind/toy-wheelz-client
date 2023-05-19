import { FaReact, FaRegThumbsUp } from 'react-icons/fa';
import React from 'react';

const Gallery = () => {
    return (
        <div className='my-10 mx-auto md:w-[1300px]'>
                <div className='text-center mx-auto md:w-full w-[350px]'>
                    <h2 className='text-3xl font-bold'>Photo Gallery</h2>
                    <p className=' py-4 text-center '>
                        Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs! Immerse yourself in a world of awe-inspiring toy vehicles that are sure to ignite your imagination. Our gallery showcases an extensive collection of remarkable cars. </p>
                </div>

                <div className='grid grid-cols md:grid-cols-3 gap-4 mt-6'>

                        <div className='overflow-hidden  mx-auto w-[300px] md:w-full relative cursor-pointer'>
                            <img className='object-cover w-full h-56 md:h-64 rounded ' src="https://img.freepik.com/free-photo/closeup-shot-toy-red-wooden-train-wooden-table_181624-21684.jpg?size=626&ext=jpg&ga=GA1.1.1458484269.1673886849&semt=ais" alt="" />
                            <div className='absolute inset-0 bg-black bg-opacity-75  opacity-0 hover:opacity-100 text-gray-300 text-center pt-10 px-4 rounded'>
                                <p className='text-xl font-bold text-blue-700'>ToyWheelz</p>
                                <p>Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs!</p>
                                <div className='text-lg font-bold flex justify-between items-center p-3'>
                                    <p className='inline-flex items-center gap-2'><FaRegThumbsUp className='text-blue-700' /> 675</p>
                                    <p>Price: $6</p>
                                </div>
                            </div>
                    </div>

                        <div className='overflow-hidden mx-auto w-[300px] md:w-full relative cursor-pointer'>
                            <img className='object-cover w-full h-56 md:h-64 rounded' src="https://img.freepik.com/premium-photo/tuk-tuk-taxi-toy-wood-table_35719-1003.jpg?w=740" alt="" />
                            <div className='absolute inset-0 bg-black bg-opacity-75  opacity-0 hover:opacity-100 text-gray-300 text-center pt-10 px-4 rounded'>
                                <p className='text-xl font-bold text-blue-700'>ToyWheelz</p>
                                <p>Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs!</p>
                                <div className='text-lg font-bold flex justify-between items-center p-3'>
                                    <p className='inline-flex items-center gap-2'><FaRegThumbsUp className='text-blue-700' /> 367</p>
                                    <p>Price: $15</p>
                                </div>
                            </div>

                        </div>

                        <div className='overflow-hidden mx-auto w-[300px] md:w-full relative cursor-pointer'>
                            <img className='object-cover w-full h-56 md:h-64 rounded' src="https://img.freepik.com/free-photo/green-easter-car-with-brown-egg-copy-space_23-2149301303.jpg?t=st=1684454118~exp=1684454718~hmac=85dfa0edc3e2358feb7dd5d1bc2f9bf85f3337bed480bc74c6e216a4df7a1cc4" alt="" />
                            <div className='absolute inset-0 bg-black bg-opacity-75  opacity-0 hover:opacity-100 text-gray-300 text-center pt-10 px-4 rounded'>
                                <p className='text-xl font-bold text-blue-700'>ToyWheelz</p>
                                <p>Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs!</p>
                                <div className='text-lg font-bold flex justify-between items-center p-3'>
                                    <p className='inline-flex items-center gap-2'><FaRegThumbsUp className='text-blue-700' /> 275</p>
                                    <p>Price: $9</p>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden mx-auto w-[300px] md:w-full relative cursor-pointer'>
                            <img className='object-cover w-full h-56 md:h-64 rounded' src="https://img.freepik.com/premium-photo/blue-easter-car-with-eggs-yellow-background_23-2149301312.jpg" alt="" />
                            <div className='absolute inset-0 bg-black bg-opacity-75  opacity-0 hover:opacity-100 text-gray-300 text-center pt-10 px-4 rounded'>
                                <p className='text-xl font-bold text-blue-700'>ToyWheelz</p>
                                <p>Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs!</p>
                                <div className='text-lg font-bold flex justify-between items-center p-3'>
                                    <p className='inline-flex items-center gap-2'><FaRegThumbsUp className='text-blue-700' /> 275</p>
                                    <p>Price: $12</p>
                                </div>
                            </div>
                    </div>

                        <div class="overflow-hidden mx-auto w-[300px] md:w-full relative cursor-pointer">
                            <img class="object-cover w-full h-56 md:h-64 rounded" src="https://img.freepik.com/free-photo/pink-easter-car-with-red-egg_23-2149301296.jpg" alt="" />
                            <div class="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 text-center pt-10 px-4 rounded">
                                <p class="text-xl font-bold text-blue-700">ToyWheelz</p>
                                <p>Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs!</p>
                                <div class="text-lg font-bold flex justify-between items-center p-3">
                                    <p class="inline-flex items-center gap-2"><svg class="text-blue-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 10.54V5h-1a3 3 0 0 0-3 3v3H8V8a3 3 0 0 0-3-3H4v5.54M12 18L2 12l10-6 10 6-10 6z"></path></svg> 375</p>
                                    <p>Price: $7</p>
                                </div>
                            </div>
                        </div>

                        <div className='overflow-hidden mx-auto w-[300px] md:w-full relative cursor-pointer'>
                            <img className='object-cover h-56 md:h-64 rounded' src="https://img.freepik.com/free-photo/pink-easter-car-with-egg-still-life_23-2149301282.jpg" alt="" />
                            <div className='absolute inset-0 bg-black bg-opacity-75  opacity-0 hover:opacity-100 text-gray-300 text-center pt-10 px-4 rounded'>
                                <p className='text-xl font-bold text-blue-700'>ToyWheelz</p>
                                <p>Welcome to the Toy Wheelz Gallery, where dreams come to life in vibrant colors and captivating designs!</p>
                                <div className='text-lg font-bold flex justify-between items-center p-3'>
                                    <p className='inline-flex items-center gap-2'><FaRegThumbsUp className='text-blue-700' /> 645</p>
                                    <p>Price: $9</p>
                                </div>
                            </div>
                    </div>

                </div>
        </div>
    );
};

export default Gallery;

import React from 'react';

const Shipping = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-3'>Our Shipping methods</h1>
            <p className='text-slate-500 text-center px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci ipsum similique recusandae impedit nihil voluptatibus quam commodi at beatae! Deleniti ipsum sunt rerum pariatur velit odit, animi sed esse?</p>

            <div className='grid md:grid-cols-3 items-center justify-between gap-10 my-8 bg-blue-500 p-8 mx-8'>
                <div className='space-y-2'>
                    <img className='w-28 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJhRSEpLKFeeDTd86RJ_oyc0lEK2c4OubWtA&usqp=CAU&fbclid=IwAR0jCcYNEYgg8kw34wPt5wumHIDodtquou1GxFiuYzpz3LMwmfAm6STIQeU" alt="" />

                    <h1 className='text-xl font-bold text-white'>Shipping Abroad</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure voluptates nulla excepturi eligendi tempore!</p>
                </div>

                <div className='space-y-2'>
                    <img className='w-24 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ksePXnFt2g0ZdFNnqgYaf631t_pOO2J9xQ&usqp=CAU" alt="" />

                    <h1 className='text-xl font-bold text-white'>Shipping All Over Country</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure voluptates nulla excepturi eligendi tempore!</p>
                </div>

                <div className='space-y-2'>
                    <img className='w-20 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYwR6eTnXs0BpHpMx1zPFDJnGe2saGxJBi7Q2WJD5NVufIzYG_RGTHWt6UqxY-rqSDuxY&usqp=CAU" alt="" />

                    <h1 className='text-xl font-bold text-white'>Home Delivery Service</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure voluptates nulla excepturi eligendi tempore!</p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
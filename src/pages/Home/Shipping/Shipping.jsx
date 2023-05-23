import React from 'react';

const Shipping = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-3'>Our Delivery methods</h1>
            <p className='text-slate-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci ipsum similique recusandae impedit nihil voluptatibus quam commodi at beatae! Deleniti ipsum sunt rerum pariatur velit odit, animi sed esse?</p>

            <div className='grid md:grid-cols-3 items-center justify-between gap-10 my-8 bg-[#000C32] p-8 rounded-lg'>
                <div className='space-y-2'>
                    <img className='w-28 rounded' src="https://l.facebook.com/l.php?u=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%253AANd9GcRJhRSEpLKFeeDTd86RJ_oyc0lEK2c4OubWtA%26usqp%3DCAU%26fbclid%3DIwAR0jCcYNEYgg8kw34wPt5wumHIDodtquou1GxFiuYzpz3LMwmfAm6STIQeU&h=AT01FpLBvNPgMQBFDz4Mj2qiqwxAQqRqsx4upj5CejFrXUa5jn3d1xIl2w9Q3xMOtLHNh5egPlWbI2vvGxTRSMCnIyKxT4lc2iGcCyJoXc67evrDfuG6FLmtkdha9NoSz3Vs4Q" alt="" />

                    <h1 className='text-xl font-bold text-white'>Shipping Abroad</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure voluptates nulla excepturi eligendi tempore!</p>
                </div>

                <div className='space-y-2'>
                    <img className='w-24 rounded' src="https://static.vecteezy.com/system/resources/previews/001/760/473/original/delivery-service-composition-with-truck-and-packages-vector.jpg" alt="" />

                    <h1 className='text-xl font-bold text-white'>Shipping All Over Country</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure voluptates nulla excepturi eligendi tempore!</p>
                </div>

                <div className='space-y-2'>
                    <img className='w-20 rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeu_3v8p7agEko5rfTqmY2g6nbnNE02P4FplInFfokQ2gDIq-_i2HtHZS9ZfCs2LZ4gKc&usqp=CAU" alt="" />

                    <h1 className='text-xl font-bold text-white'>Home Delivery Service</h1>
                    <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iure voluptates nulla excepturi eligendi tempore!</p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;
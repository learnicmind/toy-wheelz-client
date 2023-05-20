import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';


const ToyDetail = () => {
    const toyDetail = useLoaderData();

    const { toy_img, toy_name, rating, seller_name, seller_email, price, available_quantity, description } = toyDetail;

    return (
        <div className='md:w-9/12 md:mx-auto mx-10'>
            <div className='grid md:grid-cols-2 gap-8 p-10 my-12 border rounded-lg shadow-xl'>
                <div className='space-y-1'>
                    <img className='h-60' src={toy_img} alt="" />
                    <h1 className="text-2xl font-bold">{toy_name}</h1>
                    <p className='text-xl font-bold'>Price: ${price}</p>

                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaRegStar className='text-orange-400' />}
                        placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
                        fullSymbol={<FaStar />}
                    />
                    <p className='text-lg'>Seller Name: {seller_name}</p>
                    <p className='text-lg'>Seller Email: {seller_email}</p>
                    <p className='text-lg pb-3'>Available Quantity: {available_quantity}</p>

                    <button className='bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent font-bold text-white hover:text-[#000C32] rounded px-4 py-1' style={{ transition: '0.5s' }}>Place Order</button>
                </div>

                <div>
                    <p><span className='text-xl font-bold'>Product Description: <br /></span>
                        {description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ToyDetail;
import React from 'react';
import { Link } from 'react-router-dom';

const TabData = ({ tabData }) => {
    return (
        <div className='bg-base-100 shadow-xl border p-5 rounded-lg space-y-2 h-80 relative'>

            <img className='w-full h-36' src={tabData.toy_img} alt="" />
            <h1 className='text-xl font-semibold'>{tabData.toy_name}</h1>
            <p>Price: ${tabData.price}</p>
            <div className='absolute bottom-5'>
                <Link className="bg-[#000C32] border-2 border-[#000C32] hover:bg-transparent text-white hover:text-[#000C32] rounded px-2 py-0" style={{ transition: '0.5s' }}>Shop Now</Link>
            </div>

        </div>
    );
};

export default TabData;
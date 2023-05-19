import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='p-10 bg-slate-300'>
            <div>
                <img className='h-[500px] w-full rounded-lg' src="https://cdn.dribbble.com/users/1291613/screenshots/3191420/monsters_404_800x600.png" alt="" />
            </div>
            <div className='flex justify-center items-center mt-4'>
                <Link to='/'><button className="btn btn-error">Back to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;